import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import CategoryListItem from './components/CategoryListItem'

import BaseballCap from './assets/baseball-cap.png'
import Tshirt from './assets/tshirt.png'
import Pants from './assets/pants.png'
import Belt from './assets/belt.png'
import Sneakers from './assets/sneakers.png'
import Socks from './assets/socks.png'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [
        { id: 1, title: 'BaseballCap', image: BaseballCap },
        { id: 2, title: 'Tshirt', image: Tshirt },
        { id: 3, title: 'Pants', image: Pants },
        { id: 4, title: 'Belt', image: Belt },
        { id: 5, title: 'Sneakers', image: Sneakers },
        { id: 6, title: 'Socks', image: Socks }
      ]
    }
  }
  render() {
    const { categories } = this.state
    return (
      <View>
        <FlatList
          data={categories}
          renderItem={ ({item}) => <CategoryListItem category={item} /> }
          keyExtractor={ item => `${item.id}` }
          contentContainerStyle={styles.scrollView}
        />
        <StatusBar style="auto" />
      </View>
    );
  }
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
