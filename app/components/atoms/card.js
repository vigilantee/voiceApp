import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {getRandomColor, call} from '../../utility';

const Card = (props) => {
  const {data} = props;
  const color = getRandomColor();
  return (
    <View style={styles.card}>
      <View style={styles.profile}>
        <View style={[styles.profilePic, {backgroundColor: color}]}>
          <Text>{data.name.charAt(0)}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.details}>
          <Text style={styles.subheading} numberOfLines={1}>
            {data.name}
          </Text>
          <Text style={styles.listText}>{data.categoryName}</Text>
          <Text style={styles.listText}>{data.location}</Text>
          <Text style={styles.listText}>{data.classLocPref}</Text>
        </View>
        <View style={styles.phonecall}>
          <Text style={styles.agoText}>16 hours ago</Text>
          <TouchableOpacity onPress={() => call('23482948')}>
            <FontAwesome5 name={'mobile-alt'} color={color} size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'grey',
  },
  profile: {
    // backgroundColor: 'yellow',
    padding: 7,
    paddingTop: 15,
    width: '15%',
  },
  profilePic: {
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    padding: 5,
    width: 50,
    height: 50,
    borderRadius: 150,
    fontSize: 25,
  },
  container: {
    // backgroundColor: 'red',
    display: 'flex',
    width: '85%',
    height: 125,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 15,
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  phonecall: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  subheading: {
    fontWeight: 'bold',
    fontSize: 18,
    maxWidth: 200,
  },
  listText: {
    fontSize: 15,
  },
  agoText: {
    fontSize: 12,
  },
});

export default Card;
