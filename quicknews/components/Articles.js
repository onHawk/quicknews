import React, { Component } from 'react';
import moment from 'moment';

import { withNavigation } from 'react-navigation';

import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Linking,
} from 'react-native';

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
    const {
      title,
      description,
      publishedAt,
      source,
      urlToImage,
      url,
      content,
    } = this.props.article;

    const published = moment(publishedAt).fromNow();

    return (
      <Card>
        <CardItem>
          <Text style={styles.title}>{title}</Text>
        </CardItem>
        <CardItem>
          <Thumbnail style={styles.articleImg} source={{ uri: urlToImage }} />
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>{description}</Text>
          </Body>
        </CardItem>
        <CardItem style={styles.articleInfo}>
          <Left>
            <TouchableOpacity
              style={styles.article}
              onPress={() => Linking.openURL(url)}
            >
              <Text>source</Text>
            </TouchableOpacity>
          </Left>

          <Body>
            <Text style={styles.source}>{source.name}</Text>
            <Text style={styles.published}>{published}</Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  article: {
    backgroundColor: '#DDDDDD',
    padding: 7,
    borderRadius: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  articleImg: {
    flex: 1,
    height: 300,
    borderRadius: 3,
  },
  source: {
    color: '#1E90FF',
  },
  published: {
    fontSize: 11,
  },
  articleInfo: {
    backgroundColor: '#f1f1f1',
  },
});

export default withNavigation(Articles);
