/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Enquiries from './components/molecules/enquiries';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recognized: null,
      started: '',
      results: [],
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Enquiries />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
