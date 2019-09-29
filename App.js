import React, {useState} from 'react';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {AppLoading} from 'expo';
import * as Font from 'expo-font';
import ReduxThunk from 'redux-thunk';

import productsReducer from './src/store/reducers/productsReducer';
import cartReducer from './src/store/reducers/cartReducer';
import ordersReducer from './src/store/reducers/ordersReducer';
import authReducer from './src/store/reducers/authReducer';
import NavigationContainer from './src/navigation/NavigationContainer';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }
  return (
    <Provider store={store}>
      <NavigationContainer />
    </Provider>
  );
}
