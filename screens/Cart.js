import React from 'react';
import { View, Text } from 'react-native';
import IconFA from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';

const myButton = (
  <IconFA.Button
    name="laptop"
    backgroundColor="#3b5998"
    light
  >
    Login with Facebook buy Cart
  </IconFA.Button>
);
const myButton2 = (
  <IconFA.Button
    name="facebook"
    solid
  >
    Login with Facebook buy Cart
  </IconFA.Button>
);

export default class CartScreen extends React.Component {
  static navigationOptions = {
    title: 'Cart',
  };

  render() {
    return (
      <View>
        <Text>Cart</Text>
        <Text>{myButton}</Text>
        <Text>{myButton2}</Text>

        <Animatable.Text animation="slideInDown" iterationCount="infinite" direction="alternate">Up and down you go</Animatable.Text>
        <Animatable.Text animation="slideInDown" iterationCount="infinite" direction="alternate">❤️</Animatable.Text>
        <Animatable.Text animation="pulse" easing="ease-out" iterationCount="infinite"
          style={{ textAlign: 'center' }}>❤️</Animatable.Text>
      </View>
    );
  }
}
