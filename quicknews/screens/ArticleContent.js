import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Linking,
} from 'react-native';

class ContentScreen extends Component {
  render() {
    const { navigation } = this.props;
    const art = navigation.getParam('article');
    return (
      <View>
        <Text>{art}</Text>
      </View>
    );
  }
}

export default ContentScreen;
