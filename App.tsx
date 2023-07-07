import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import NavigationMenu from './src/navigation/NavigationMenu';
import { store } from './src/store/configureStore';
import AppNavigation from './src/navigation/AppNavigation';
import SplashScreen from 'react-native-splash-screen';

function App() {

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <Provider store={store}>
        <AppNavigation />
    </Provider>
  );
}

export default App;
