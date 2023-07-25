import React, { useState } from "react";
import Container from "../../components/Container";
import { View, Text, FlatList, } from "react-native";
import { Styles } from "../../styles/Styles";
import SearchBlock from "../../components/SearchBlock";
import UserBlock from "../../components/UserBlock";
import Loading from "../../components/Loading";
import { useSelector } from "react-redux";
import { postRequestPaginationAuth } from "../../api/RequestHelpers";
import FilterSearchPopup from "./FilterSearchPopup";


export default function SearchScreen({ navigation, route }) {
   const [searchValue, setSearchValue] = useState(null)
   const [loading, setLoading] = useState(false);
   const [users, setUsers] = useState([]);
   const [nextUrl, setNextUrl] = useState('https://socnetworkbackend.justcode.am/api/search_user')
   const firstPageUrl = 'https://socnetworkbackend.justcode.am/api/search_user'

   const [footerLoading, setFooterLoading] = useState()
   const { token } = useSelector(state => state.auth)

   const [modalVisible, setModalVisible] = useState(false);
   const [filterData, setFilterData] = useState({})


   function onSearch(value, my_filter_data) {
      let myValue = value

      if (typeof value == 'string') {
         setSearchValue(value)
      }

      //load more-y chi
      if (value != undefined) {
         //datarka
         // if (!value) {
         //    setSearchValue(value)
         //    return
         // }
         setLoading(true);
      } else {
         myValue = searchValue
      }

      const myFilterData = my_filter_data ?? filterData
      console.log({
         search: myValue,
         ...myFilterData
      }, 'FILTER DATA');

      postRequestPaginationAuth(typeof value == 'string' ? firstPageUrl : nextUrl, token, {
         search: myValue,
         ...myFilterData
      }).then(([status, body]) => {
         if (status === 200) {
            typeof value == 'string' ? setUsers(body.users.data) : setUsers([...users, ...body.users.data])
            console.log(body.users.next_page_url, 'next_page_url');
            setNextUrl(body.users.next_page_url)
         } else setUsers([])

         setLoading(false)
         setFooterLoading(false)
      })
   }

   const handleLoadMore = () => {
      if (nextUrl) {
         setFooterLoading(true)
         onSearch()
      }
   };

   const renderFooter = () => {
      return footerLoading ? <View style={{ marginVertical: 20 }}>
         <Loading />
      </View> : null
   };

   return <>
      <Container headerTitle={'Поиск'} filterIcon onPressFilter={() => setModalVisible(true)}>
         <SearchBlock value={searchValue} setValue={onSearch} />
         <View style={Styles.whiteContainer}>
            {typeof searchValue == 'string' ? (loading ? (
               <Loading marginTop={20} />
            ) : users.length === 0 ? (
               <Text
                  style={[
                     Styles.blackRegular15,
                     { textAlign: 'center', marginTop: 50 },
                  ]}>
                  Ничего не найдено
               </Text>
            ) : (
               <FlatList
                  showsVerticalScrollIndicator={false}
                  style={{ marginTop: 20, }}
                  data={users}
                  renderItem={(item, i) => <UserBlock userInfo={item.item} moreIcon activityStatus onPress={() => navigation.navigate('UserScreen')} />}
                  keyExtractor={item => item.id.toString()}
                  onEndReached={handleLoadMore}
                  onEndReachedThreshold={1}
                  ListFooterComponent={renderFooter}
               />
            )) : <Text style={[
               Styles.blackRegular15,
               { textAlign: 'center', marginTop: 50 },
            ]}>Найдите людей для новых знакомств.</Text>}
         </View>
      </Container>
      <FilterSearchPopup modalVisible={modalVisible} setModalVisible={setModalVisible} onSearch={(filterData) => onSearch(searchValue, filterData)} setFilterData={setFilterData} />
   </>
}
