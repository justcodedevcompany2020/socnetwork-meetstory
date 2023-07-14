import React, { useEffect, useState } from "react";
import AppNavigation from "../../navigation/AppNavigation";
import { useDispatch } from "react-redux";
import SplashScreen from "react-native-splash-screen";
import { checkToken } from "../../store/actions/saveToken";


export default function AuthScreen() {

    const [screen, setScreen] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        setInitialScreen()
    }, [])

    function setInitialScreen() {
        dispatch(checkToken()).then(res => {
            if (res) {
                setScreen('Menu')
            } else {
                setScreen('LoginScreen')
            }
        }).then(() => SplashScreen.hide())
    }

    return screen && <AppNavigation initialRouteName={screen} />
}