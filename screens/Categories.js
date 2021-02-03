import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CategoryListItem from '../components/CategoryListItem'

import axios from 'axios';

export default class Categories extends React.Component {
  static navigationOptions = {
    title: 'Categories',
  };

  constructor() {
    super();
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    axios.get('/categories')
      .then(res => {
        this.setState({
          categories: res.data
        })
      })
      .catch(error => {
        console.error(error);
      })
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
              id:  item.id,
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
