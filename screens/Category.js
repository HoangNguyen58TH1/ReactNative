import React from 'react';
import { View, Text } from 'react-native';

export default class Category extends React.Component {
  static navigationOptions = {
    title: 'Category',
  };

  render() {
    return (
      <View>
        <Text>Category</Text>
      </View>
    );
  }
}
