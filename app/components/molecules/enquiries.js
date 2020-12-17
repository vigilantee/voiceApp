import React, {Component} from 'react';
import {Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getSearchResultsFromAPI} from '../../actions/enquiries';
import Card from '../atoms/card';

class Enquiries extends Component {
  constructor(props) {
    super(props);
    this.props.enquiries.length > 1 || this.props.getSearchResults();
  }
  render() {
    // this.props.getSearchResults();
    return (
      <>
        <Text>ENQUIRIES</Text>
        <ScrollView>
          {this.props.enquiries.map((el) => {
            return <Card data={el} />;
          })}
        </ScrollView>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  enquiries: state.enquiryReducer.allSearchResults,
});

const matchDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      getSearchResults: getSearchResultsFromAPI,
    },
    dispatch,
  );

export default connect(mapStateToProps, matchDispatchToProps)(Enquiries);
