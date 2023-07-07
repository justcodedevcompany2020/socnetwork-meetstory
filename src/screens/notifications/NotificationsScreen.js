import React, { useState } from "react";

import GeneralNotifications from "./GeneralNotifications";
import FriendRequests from "./FriendRequests";
import { Styles } from "../../styles/Styles";
import { View, useWindowDimensions, Text } from "react-native";
import { AppColors } from "../../styles/AppColors";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';


const renderScene = SceneMap({
    first: GeneralNotifications,
    second: FriendRequests,
});

export default function NotificationsScreen() {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Общие' },
        { key: 'second', title: 'Запросы в друзья (1)' },
    ])

    const renderTabBar = props => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: AppColors.LOCHMARA_COLOR, height: 2 }}
          style={{ backgroundColor: AppColors.WHITE_COLOR, color: AppColors.STEEL_BLUE_COLOR, elevation: 0, borderBottomWidth: 1, borderColor: AppColors.SOLITUDE_COLOR }}
          renderLabel={(a) => <Text style={[a.focused ? Styles.darkBlueSemiBold14 : Styles.blueSemiBold14]}>{a.route.title}</Text>}
          labelStyle={Styles.blueSemiBold14}
          pressOpacity={0}
          pressColor="white"
        />
      );

    return (
        <View style={Styles.containerTopPadding}>
            <TabView
             renderTabBar={renderTabBar}
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                sceneContainerStyle={{backgroundColor: AppColors.WHI,  color: AppColors.STEEL_BLUE_COLORTE_COLOR}}
                pagerStyle={{backgroundColor: AppColors.WHITE_COLOR, color: AppColors.STEEL_BLUE_COLOR, elevation: 0}}
                onp
            />
        </View>
    );
}