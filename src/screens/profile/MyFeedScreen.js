import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, ScrollView, Text, View } from "react-native";
import { Styles } from "../../styles/Styles";
import Button from "../../components/Button";
import PostComponent from "../feed/components/PostComponent";
import { postRequestPaginationAuth } from "../../api/RequestHelpers";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import { AppColors } from "../../styles/AppColors";


export default function MyFeedScreen({ navigation, route }) {

  const { token } = useSelector(state => state.auth)
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [moreLoading, setMoreLoading] = useState()
  const [nextUrl, setNextUrl] = useState('https://socnetworkbackend.justcode.am/api/get_post')
  const firstPageUrl = 'https://socnetworkbackend.justcode.am/api/get_post'
  const [isRefreshing, setIsRefreshing] = useState(false);
  // const [checking, setChecking] = useState()
  const [refresh, setRefresh] = useState(route.params?.refresh)
  // console.log('refresh', refresh);

  useEffect(() => {
    getPosts()
  }, [])

  function getPosts(refresh) {
    postRequestPaginationAuth(refresh ? firstPageUrl : nextUrl, token).then(([status, data]) => {
      refresh ? setPosts(data.data.data) : setPosts([...posts, ...data.data.data]);
      setNextUrl(data.data.next_page_url)
      setIsRefreshing(false);
      setLoading(false);
      setMoreLoading(false);
    })
  }

  const handleLoadMore = () => {
    if (nextUrl) {
      console.log('handleLoadMore');
      setMoreLoading(true)
      getPosts()
    }
  }

  const renderFooter = () => {
    return moreLoading ? <View style={{ marginBottom: 40 }} >
      <View style={{ marginBottom: 30 }}>
        <Loading />
      </View>
    </View > : null
  }

  const handleRefresh = () => {
    setIsRefreshing(true);
    getPosts('refresh')
  };

  useEffect(() => {
    if (!loading && isRefreshing) getPosts('refresh')
  }, [isRefreshing])


  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      handleRefresh()
    });
    return unsubscribe;
  }, [navigation]);


  return <View style={Styles.containerTopPadding}>
    {loading ? (
      <Loading marginTop={20} />
    ) : (
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 20 }}
        keyExtractor={(item, index) => index}
        data={posts}
        renderItem={({ item }) => {
          return <PostComponent postInfo={item} navigation={navigation} myAccount/>
        }}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
        ListHeaderComponent={() => <Button text={'Добавить публикацию'} height={40} onPress={() => navigation.navigate('AddPostScreen')} marginBottom={20} />}
        ListEmptyComponent={() => <Text
          style={[
            Styles.blueMedium16,
            { textAlign: 'center' },
          ]}>
          У вас нет публикаций
        </Text>}
        refreshControl={<RefreshControl aria-hidden refreshing={isRefreshing} colors={[AppColors.STEEL_BLUE_COLOR]} onRefresh={handleRefresh} />}
      />
    )}
  </View>
}