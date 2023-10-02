import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, createStore } from 'redux';
import rootReducer from './redux/reducers';
import Navigation from './navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const store = createStore(rootReducer);

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
