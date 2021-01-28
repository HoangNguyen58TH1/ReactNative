import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoryListItem from './components/CategoryListItem'

import BaseballCap from './assets/baseball-cap.png'
import Tshirt from './assets/tshirt.png'
import Pants from './assets/pants.png'
import Sneakers from './assets/sneakers.png'

const category = [
  { title: 'BaseballCap', image: BaseballCap },
  { title: 'Tshirt', image: Tshirt },
  { title: 'Pants', image: Pants },
  { title: 'Sneakers', image: Sneakers }
]

export default function App() {
  return (
    <View style={styles.container}>
      {
        category.length > 0 && category.map( (item, index) => (
          <CategoryListItem key={index} category={item} />
        ))
      }
      {
        category.length === 0 && <Text style={styles.categoryEmpty}>
          Nothing category here.
        </Text>
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dce4ec',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  categoryEmpty: {
    textAlign: 'center'
  }
});
