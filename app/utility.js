import {Linking} from 'react-native';

export function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function call(phoneNumber) {
  Linking.canOpenURL(phoneNumber)
    .then((supported) => {
      if (!supported) {
        console.log('Phone number is not available');
      } else {
        return Linking.openURL(`tel:${phoneNumber}`);
      }
    })
    .catch((err) => console.log(err));
}
