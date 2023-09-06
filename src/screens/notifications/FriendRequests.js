import React, { useEffect, useState } from "react";
import FriendRequestBlock from "./FriendRequestBlock";
import { FlatList, RefreshControl, Text, View } from "react-native";
import { getRequestPaginationAuth } from "../../api/RequestHelpers";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import { Styles } from "../../styles/Styles";
import { AppColors } from "../../styles/AppColors";

export default function FriendRequests() {
    const { token } = useSelector(state => state.auth)
    const [requests, setRequestes] = useState([])
    const [loading, setLoading] = useState(true)
    const [moreLoading, setMoreLoading] = useState()
    const [nextUrl, setNextUrl] = useState('https://socnetworkbackend.justcode.am/api/get_friend_request')
    const firstPageUrl = 'https://socnetworkbackend.justcode.am/api/get_friend_request'
    const [isRefreshing, setIsRefreshing] = useState(false);

    useEffect(() => {
        getFriendRequests()
    }, [])

    function getFriendRequests(refresh) {
        getRequestPaginationAuth(refresh ? firstPageUrl : nextUrl, token).then(res => {
            refresh ? setRequestes(res.data.data) : setRequestes([...requests, ...res.data.data]);
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
            getFriendRequests()
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
        getFriendRequests('refresh')
    };

    return loading ? (
        <Loading marginTop={20} />
    ) : (
        <FlatList
            showsVerticalScrollIndicator={false}
            style={{ paddingHorizontal: 20, marginTop: 20 }}
            keyExtractor={(item, index) => index}
            data={requests}
            renderItem={({ item, i }) => {
                return <FriendRequestBlock requestInfo={item} key={i} />
            }}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={renderFooter}
            ListEmptyComponent={() => <Text
                style={[
                    Styles.blueMedium16,
                    { alignSelf: 'center', width: '80%', textAlign: 'center' },
                ]}>
                У вас нет запросы на добавление в друзья
            </Text>}
             refreshControl={<RefreshControl refreshing={isRefreshing} colors={[AppColors.STEEL_BLUE_COLOR]} onRefresh={handleRefresh} />}
        />
    )
}