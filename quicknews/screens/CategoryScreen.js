import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, StatusBar } from 'react-native';
import {
  Container,
  Header,
  Tab,
  Tabs,
  ScrollableTab,
  Body,
  Left,
  Button,
  Icon,
  Title,
} from 'native-base';

import Tech from '../components/categories/Technology';

class CategoryScreen extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" style={{ color: 'black' }} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: 'black' }}>News</Title>
          </Body>
        </Header>

        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="Technology">
            <Tech />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default CategoryScreen;
