import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { Styles } from "../../styles/Styles";
import UserBlock from "../../components/UserBlock";
import { getRequestPagination } from "../../api/RequestHelpers";
import Loading from "../../components/Loading";


export default function NewFacesScreen() {
    const [newFaces, setNewFaces] = useState([])
    const [loading, setLoading] = useState(true)
    const [moreLoading, setMoreLoading] = useState()
    const [nextUrl, setNextUrl] = useState('https://socnetworkbackend.justcode.am/api/new_registered_users')
    const firstPageUrl = 'https://socnetworkbackend.justcode.am/api/new_registered_users'
    const [isRefreshing, setIsRefreshing] = useState(false);

    useEffect(() => {
        getNewFaces()
    }, [])

    function getNewFaces(refresh) {
        getRequestPagination(refresh ? firstPageUrl : nextUrl).then(res => {
            console.log(res);

            refresh ? setNewFaces(res.data.data) : setNewFaces([...newFaces, ...res.data.data]);
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
            getNewFaces()
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
        setNewFaces([])
        getNewFaces('refresh')
    };


    return <View style={[Styles.containerTopPadding,]}>
        {loading ? (
            <Loading />
        ) : (
            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ paddingHorizontal: 20, marginTop: 5 }}
                keyExtractor={(item, index) => index}
                data={newFaces}
                renderItem={({ item, index }) => {
                    return <UserBlock chatIcon activityStatus userInfo={item} />
                }}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.1}
                ListFooterComponent={renderFooter}
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
            />
        )}
    </View>
}