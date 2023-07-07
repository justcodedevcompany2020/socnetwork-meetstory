import React from "react";
import FriendRequestBlock from "./FriendRequestBlock";
import { ScrollView } from "react-native";

export default function FriendRequests(){
    const requests = [
        {
            image: require('../../assets/pngs/post1.png'),
            name: 'James',
            date: 'Cегодня в 13:44'
        },
        {
            image: require('../../assets/pngs/post1.png'),
            name: 'Lilly',
            date: 'Cегодня в 13:44'
        },  {
            image: require('../../assets/pngs/post1.png'),
            name: 'Harper',
            date: 'Cегодня в 13:44'
        },
    ]

    return <ScrollView style={{marginTop: 20, paddingHorizontal: 20}}>
        {requests.map((item, i) => <FriendRequestBlock requestInfo={item} key={i}/>)}
    </ScrollView>
}