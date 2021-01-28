import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CategoryListItem from './components/CategoryListItem'

import BaseballCap from './assets/baseball-cap.png'
import Tshirt from './assets/tshirt.png'
import Pants from './assets/pants.png'
import Belt from './assets/belt.png'
import Sneakers from './assets/sneakers.png'
import Socks from './assets/socks.png'

const category = [
  { title: 'BaseballCap', image: BaseballCap },
  { title: 'Tshirt', image: Tshirt },
  { title: 'Pants', image: Pants },
  { title: 'Belt', image: Belt },
  { title: 'Sneakers', image: Sneakers },
  { title: 'Socks', image: Socks }
]

export default function App() {
  return (
    <View>
      <ScrollView style={ styles.scrollView }>
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
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  categoryEmpty: {
    textAlign: 'center'
  },
  scrollView: {
    paddingLeft: 10,
    paddingRight: 10
  }
});
