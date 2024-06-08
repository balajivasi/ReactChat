import React, {useEffect} from 'react';
import LanguageProvider from './src/context/LanguageProvider';
import Main from './src/main';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import SplashScreen from 'react-native-splash-screen';
function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <LanguageProvider>
        <Main />
      </LanguageProvider>
    </Provider>
  );
}

export default App;
