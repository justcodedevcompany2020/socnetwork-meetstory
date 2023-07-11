import React, { useEffect, useRef, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/configureStore';
import AppNavigation from './src/navigation/AppNavigation';
import SplashScreen from 'react-native-splash-screen';
import { AppState } from 'react-native';

function App() {

    // const appState = useRef(AppState.currentState);
    // const [appStateVisible, setAppStateVisible] = useState(appState.current);

    useEffect(() => {
        SplashScreen.hide()

        // AppState.addEventListener("change", _handleAppStateChange);
        // return () => {
        //     AppState.removeEventListener("change", _handleAppStateChange);
        // };
    }, []);

    // const _handleAppStateChange = (nextAppState) => {
    //     if (
    //         appState.current.match(/inactive|background/) &&
    //         nextAppState === "active"
    //     ) {
    //         // TODO SET USERS ONLINE STATUS TO TRUE
    //     } else {
    //         // TODO SET USERS ONLINE STATUS TO FALSE
    //     }
    //     appState.current = nextAppState;
    //     setAppStateVisible(appState.current);
    //     console.log("AppState", appState.current);
    // };

    return (
        <Provider store={store}>
            <AppNavigation />
        </Provider>
    );
}

export default App;
