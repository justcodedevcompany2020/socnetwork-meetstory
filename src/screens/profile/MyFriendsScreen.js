import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import { FlatList, RefreshControl, StyleSheet, Text, View } from "react-native";
import { Styles } from "../../styles/Styles";
import UserBlock from "../../components/UserBlock";
import { AppColors } from "../../styles/AppColors";
import { useSelector } from "react-redux";
import { getRequestPaginationAuth } from "../../api/RequestHelpers";
import Loading from "../../components/Loading";


export default function MyFriendsScreen() {
    const [friends, setFriends] = useState([])
    const [loading, setLoading] = useState(true)
    const [moreLoading, setMoreLoading] = useState()
    const [nextUrl, setNextUrl] = useState('https://socnetworkbackend.justcode.am/api/get_my_friends_list')
    const firstPageUrl = 'https://socnetworkbackend.justcode.am/api/get_my_friends_list'
    const [isRefreshing, setIsRefreshing] = useState(false);
    const { token } = useSelector(state => state.auth)

    const [numberOfFriends, setNumberOfFriends] = useState(null)

    useEffect(() => {
        getMyFriends()
    }, [])

    function getMyFriends(refresh) {
        getRequestPaginationAuth(refresh ? firstPageUrl : nextUrl, token).then(res => {
            refresh ? setFriends(res.data.data.map(el => ({ ...el, user: { ...el.user, friend_status: 'remove' } }))) : setFriends([...friends, ...res.data.data.map(el => ({ ...el, user: { ...el.user, friend_status: 'remove' } }))]);
            setNumberOfFriends(res.all_data_count)
            setNextUrl(res.data.next_page_url)
            setIsRefreshing(false);
            setLoading(false);
            setMoreLoading(false);
        })
    }

    const handleLoadMore = () => {
        if (nextUrl) {
            console.log('handleLoadMore');
            setMoreLoading(true)
            getMyFriends()
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
        getMyFriends('refresh')
    };


    return <Container goBack headerTitle={'Мои друзья'}>
        <View style={styles.whiteText}>
            {(loading || isRefreshing) ? <View style={{ height: 22 }} /> : <Text style={{
                color: AppColors.WHITE_COLOR,
                fontSize: 15,
            }}>
                <Text style={Styles.whiteMedium15}> Друзей: </Text> {numberOfFriends}  (<Text style={Styles.whiteMedium15}>Онлайн</Text> 1)
            </Text>}
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
                    renderItem={({ item, index }) => {
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
    </Container>
}

const styles = StyleSheet.create({
    whiteText: {
        width: '100%',
        paddingLeft: 20,
        marginVertical: 20
    }
})