import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem'

import BaseballCap from '../assets/baseball-cap.png'
import Tshirt from '../assets/tshirt.png'
import Pants from '../assets/pants.png'
import Belt from '../assets/belt.png'
import Sneakers from '../assets/sneakers.png'
import Socks from '../assets/socks.png'

export default class Categories extends React.Component {
  static navigationOptions = {
    title: 'Categories',
  };

  constructor() {
    super();
    this.state = {
      categories: [
        { id: 1, title: 'BaseballCap', image: [BaseballCap, Tshirt], 
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        price: 10000
       },
        { id: 2, title: 'Tshirt', image: [Tshirt, Pants], 
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        price: 20000
       },
        { id: 3, title: 'Pants', image: [Pants, Belt], 
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        price: 30000
       },
        { id: 4, title: 'Belt', image: [Belt, Sneakers], 
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        price: 40000
       },
        { id: 5, title: 'Sneakers', image: [Sneakers, Socks], 
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        price: 50000
       },
        { id: 6, title: 'Socks', image: [Socks, BaseballCap], 
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        price: 60000
       }
      ]
    }
  }
  render() {
    const { categories } = this.state
    const { navigation } = this.props
    return (
      <View>
        <FlatList
          data={categories}
          renderItem={ ({item}) => 
          <CategoryListItem
            category={item} 
            onPress={() => navigation.navigate('Category', { 
              title:  item.title,
              image:  item.image,
              description: item.description,
              price: item.price,
            }) }
          /> }
          keyExtractor={ item => `${item.id}` }
          contentContainerStyle={styles.scrollView}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    paddingLeft: 10,
    paddingRight: 10
  }
});
