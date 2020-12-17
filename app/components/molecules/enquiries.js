import React, {Component} from 'react';
import {Text, ScrollView, View, TouchableOpacity} from 'react-native';
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
    console.log(this.props.enquiries.length);
    return (
      <>
        <ScrollView>
          {this.props.enquiries.map((el, index) => {
            return (
              <TouchableOpacity
                key={el.enqId}
                onPress={() => {
                  this.props.navigation.navigate('enquiryDetails', {
                    id: index,
                  });
                }}>
                <Card data={el} />
              </TouchableOpacity>
            );
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
