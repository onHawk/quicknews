import React, { Component } from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';

import {
  Content,
  Card,
  CardItem,
  Thumbnail,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';

class Articles extends Component {
  render() {
    const { title, description, url } = this.props.article;
    console.log(this.props.articles);
    return (
      <Content>
        <Card>
          <CardItem>
            <Text>{title}</Text>
          </CardItem>
          <CardItem>
            <Text>{description}</Text>
          </CardItem>
          <CardItem>
            <Text>{url}</Text>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

export default Articles;
