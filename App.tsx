import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import BudgetListingScreen from './components/BudgetListingScreen';
import BudgetEntryScreen from './components/BudgetEntryScreen';
import { Provider } from 'react-redux';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

    
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/Store';
import Header from './components/Header';
import Footer from './components/Footer';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
         <Header title="Home Budget App"/> 
         <NavigationContainer>
          <Stack.Navigator initialRouteName='Budget Entry'>
            <Stack.Screen name="Budget Entry" component={BudgetEntryScreen} options={{ title: 'Budget entry',headerStyle: {backgroundColor: '#734da8',},headerTintColor: '#fff',headerTitleAlign: 'center',
          }}/>
            <Stack.Screen name="Budget Listing" component={BudgetListingScreen} options={{ title: 'Budget entry listing',headerStyle: {backgroundColor: '#734da8',},headerTintColor: '#fff',headerTitleAlign: 'center',
          }}/>
          </Stack.Navigator>
         </NavigationContainer>
          <Footer />
    </PersistGate>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    
    position: 'relative',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginBottom:25
  },
  content: {
    
    marginBottom: 15, // Adjust this value if needed
  },
});
export default App;
