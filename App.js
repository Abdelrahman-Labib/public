import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import AddCourse from './components/pages/AddCourse';
import Categories from './components/pages/Categories';
import CourseView from './components/pages/CourseView';
import Interface from './components/pages/Interface';
import Favourites from './components/pages/Favourites';
import Profile from './components/pages/Profile';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Profile />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#d2d6de',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
