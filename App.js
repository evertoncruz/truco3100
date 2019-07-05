/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      primary: 0,
      secondary: 0,
    };
  }

  incrementTeamA = () => {
    if(this.state.primary < 12) {
      this.setState({primary: this.state.primary + 1});
    }
  }

  incrementTeamB = () => {
    if(this.state.secondary < 12) {
      this.setState({secondary: this.state.secondary + 1});
    }
  }

  decreaseTeamA = () => {
    if(this.state.primary > 0) {
      this.setState({primary: this.state.primary - 1});
    }
  }

  decreaseTeamB = () => {
    if(this.state.secondary > 0) {
      this.setState({secondary: this.state.secondary - 1});
    }
  }

  resetPoint = () => {
    // Alert.alert('Deseja zerar o placar?')
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Cancel', onPress: () => true},
        {text: 'OK', onPress: () => this.setState({primary: 0, secondary: 0})},
      ],
    );
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.logo}>
        <Image
                source={require('./images/logo.png')}
                style=""/>
        </View>
        <View style={styles.menu}>
          <Text style={styles.title}>MARCADOR DE TRUCO</Text>
          <Text style={styles.title}>3100</Text>
        </View>
        <View style={styles.teams}>
          <View style={styles.team}>
            <Text style={styles.teamTitle}>A</Text>
            <Text style={styles.teamPoint}>{this.state.primary}</Text>
          </View>
          <View style={styles.team}>
            <Text style={styles.teamTitle}>B</Text>
            <Text style={styles.teamPoint}>{this.state.secondary}</Text>
          </View>
        </View>
        <View style={styles.reset}>
          <TouchableOpacity onPress={this.resetPoint}>
            <Text style={styles.resetButton}>Zerar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.enhancers}>
          <View style={styles.enhancer}>
          <TouchableOpacity onPress={this.incrementTeamA}>
            <Text style={styles.enhancerButton} >+</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.enhancer}>
            <TouchableOpacity onPress={this.incrementTeamB}>
            <Text style={styles.enhancerButton} >+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.enhancers}>
          <View style={styles.enhancer}>
          <TouchableOpacity onPress={this.decreaseTeamA}>
            <Text style={styles.enhancerButton} >-</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.enhancer}>
            <TouchableOpacity onPress={this.decreaseTeamB}>
            <Text style={styles.enhancerButton} >-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E8B57'
  },
  logo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  naipeBox: {
    height: 50,
    width: 50,
    borderColor: '#999',
    borderWidth: 5,
    margin: 10
  },
  title: {
    color: '#000'
  },
  menu: {
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  teams: {
    flex: 1,
    flexDirection: 'row',
  },
  team: {
    flex: 1,
    alignItems: 'center'
  },
  teamTitle: {
    fontSize: 50,
    color: '#000'
  },
  teamPoint: {
    fontSize: 100,
    marginTop: 40,
    borderRadius: 5,
    color: '#FFF'
  },
  enhancers: {
    flex: 1,
    flexDirection: 'row',
  },
  reset:{
    flex: 1,
    alignItems: 'center',
    marginTop: 60
  },
  resetButton: {
    alignItems: 'center',
    fontSize: 30,
    color: '#B22222'
  },
  enhancer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  enhancerButton: {
    fontSize: 150,
    color: '#000'
  }
});
