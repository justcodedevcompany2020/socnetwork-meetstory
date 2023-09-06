import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, RefreshControl } from 'react-native';
import Container from '../../components/Container';
import UserBlock from '../../components/UserBlock';
import { Styles } from '../../styles/Styles';
import { AppColors } from '../../styles/AppColors';
import { postRequestPaginationAuth } from '../../api/RequestHelpers';
import Loading from '../../components/Loading';
import { useSelector } from 'react-redux';

export const UserFriends = ({ route }) => {

  const [friends, setFriends] = useState([])
  const [loading, setLoading] = useState(true)
  const [moreLoading, setMoreLoading] = useState()
  const [nextUrl, setNextUrl] = useState('https://socnetworkbackend.justcode.am/api/get_user_info')
  const firstPageUrl = 'https://socnetworkbackend.justcode.am/api/get_user_info'
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { token } = useSelector(state => state.auth)
  const { userId } = route.params

  const [numberOfFriends, setNumberOfFriends] = useState(null)

  useEffect(() => {
    getUserFriends()
  }, [])

  function getUserFriends(refresh) {
    postRequestPaginationAuth(refresh ? firstPageUrl : nextUrl, token, {
      user_id: userId
    }).then(([status, data]) => {
      console.log(data.friends.data[0]);
      refresh ? setFriends(data.friends.data) : setFriends([...friends, ...data.friends.data]);
      setNumberOfFriends(data.count)
      setNextUrl(data.friends.next_page_url)
      setIsRefreshing(false);
      setLoading(false);
      setMoreLoading(false);
    })
  }

  const handleLoadMore = () => {
    if (nextUrl) {
      console.log('handleLoadMore');
      setMoreLoading(true)
      getUserFriends()
    }
  }

  const renderFooter = () => {
    return <View style={{ marginBottom: 70 }}>
      {moreLoading ? <View style={{ marginBottom: 30 }}>
        <Loading />
      </View> : null}
    </View>
  }

  const handleRefresh = () => {
    setIsRefreshing(true);
    getUserFriends('refresh')
  };

  return (
    <Container headerTitle="Друзья пользователя" goBack>
      <View style={styles.whiteText}>
        {(loading || isRefreshing) ? <View style={{ height: 22 }} /> : <Text style={{
          color: AppColors.WHITE_COLOR,
          fontSize: 15,
        }}>
          <Text style={Styles.whiteMedium15}> Друзей: </Text> {numberOfFriends} </Text>}
      </View>
      <View style={Styles.whiteContainer}>
        {loading ? (
          <Loading marginTop={20} />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 20 }}
            keyExtractor={(item, index) => index}
            data={friends}
            renderItem={({ item }) => {
              return <UserBlock moreIcon activityStatus userInfo={item.user} />
            }}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={renderFooter}
            ListEmptyComponent={() => <Text
              style={[
                Styles.blueMedium16,
                { textAlign: 'center' },
              ]}>
              Нет друзей
            </Text>}
            refreshControl={<RefreshControl refreshing={isRefreshing} colors={[AppColors.STEEL_BLUE_COLOR]} onRefresh={handleRefresh} />}
          />
        )}
      </View>
    </Container >
  );
};


const styles = StyleSheet.create({
  whiteText: {
    width: '100%',
    paddingLeft: 20,
    marginVertical: 20
  }
})