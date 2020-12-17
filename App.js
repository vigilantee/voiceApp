import React from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Enquiries from './app/components/molecules/enquiries';
import EnquiryDetails from './app/components/molecules/enquiryDetails';
import reducer from './app/reducers/index';

const store = createStore(reducer, applyMiddleware(thunk));
const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="enquiries"
              component={Enquiries}
              options={{title: 'ENQUIRIES'}}
            />
            <Stack.Screen
              name="enquiryDetails"
              options={{title: 'ENQUIRY DETAILS'}}>
              {(props) => <EnquiryDetails {...props} id={props.id} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
