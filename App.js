/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Voice from '@react-native-community/voice';
import {SafeAreaView, StyleSheet} from 'react-native';
import VideoComponent from './components/atoms/videoComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recognized: null,
      started: '',
      results: [],
    };
    Voice.onSpeechStart = this.onSpeechStart.bind(this);
    Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
  }
  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }
  onSpeechStart(e) {
    this.setState({
      started: null,
    });
  }
  onSpeechRecognized(e) {
    this.setState({
      recognized: null,
    });
  }
  onSpeechResults(e) {
    let pos = require('pos');
    let words = new pos.Lexer().lex(e.value[0]);
    let tagger = new pos.Tagger();
    let taggedWords = tagger.tag(words);
    let noun = taggedWords.filter((el) => el[1] === 'NN' || el[1] === 'NNS');
    this.setState({
      results: e.value,
      noun: noun ? (noun[0] ? noun[0][0] : null) : null,
    });
  }
  async _startRecognition(e) {
    this.setState({
      recognized: true,
      started: '',
      results: [],
    });
    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  }

  stopListening(e) {
    Voice.stop();
    this.setState({
      recognized: true,
    });
  }

  changeText = (text) => {
    this.setState({
      results: [text],
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <VideoComponent
          text={this.state.results[0]}
          changeText={this.changeText}
          recognized={this.state.recognized}
          start={this._startRecognition.bind(this)}
          stop={this.stopListening.bind(this)}
          noun={this.state.noun}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  transcript: {
    textAlign: 'center',
    color: '#B0171F',
    marginBottom: 1,
    top: '400%',
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(228, 29, 62)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
