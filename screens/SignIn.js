import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Cap from '../assets/icon.png';
import IconFA from 'react-native-vector-icons/FontAwesome'

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'SignIn'
  }

  render() {
    return(
      <View style={styles.viewContainer}>
        <View style={styles.viewLogo}>
          <Image source={Cap} style={styles.logo} ></Image>
          <Text style={styles.logoText}>COOL MUSIC</Text>
        </View>

        <View style={styles.viewContent}>
          <View>
            <TextInput style={styles.inputAccount} value="hoangnv20081998@gmail.com" />
            <TextInput style={styles.inputAccount} value="*********" />
          </View>

          <View style={{marginTop: 40}}>
            <TouchableOpacity>
              <Text style={styles.buttonTextLogin}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 10}}>
            <TouchableOpacity>
              <Text style={styles.buttonForgot}>Forgot password?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.iconLogin}>
            <IconFA name="facebook" size={28} color="blue" backgroundColor="red" />
            <IconFA name="google" size={28} color="blue" />
            <IconFA name="twitter" size={28} color="blue" />
          </View>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  viewLogo: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007aff',
  },
  logo: {
    width: 64,
    height: 64,
  },
  logoText: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 20
  },

  viewContent: {
    flex: 3,
    backgroundColor: '#fff',
    width: '100%',
    justifyContent: 'center'
  },
  buttonTextLogin: {
    color: '#fff',
    backgroundColor:'#007aff',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 15,
    width: '70%',
    marginHorizontal: '15%',
    borderRadius: 6,
    overflow: 'hidden'
  },
  buttonForgot: {
    color: '#d2d2d2',
    backgroundColor:'#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingVertical: 15,
    width: '70%',
    marginHorizontal: '15%',
    borderRadius: 6,
    overflow: 'hidden'
  },

  inputAccount: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderBottomColor: '#d2d2d2',
    width: '70%',
    marginHorizontal: '15%',
  },

  iconLogin: {
    marginTop: 30,
    flexDirection: 'row',
    width: '70%',
    marginHorizontal: '15%',
    justifyContent: 'space-around'

  }
})