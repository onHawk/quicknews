import React, { Component } from 'react';

import { StyleSheet, Text } from 'react-native';

import {
  Button,
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Body,
  Content,
  List,
  ListItem,
} from 'native-base';

class SourceList extends Component {
  render() {
    return (
      <Container>
        <Header transparent>
          <Left>
            <Icon
              name="arrow-back"
              onPress={() => this.props.navigation.goBack()}
            />
          </Left>
          <Body>
            <Title style={{ color: 'black' }}>sources</Title>
          </Body>
        </Header>
        <Content>
          <List>
            <ListItem>
              <Text>source 1</Text>
            </ListItem>
            <ListItem>
              <Text>source 2</Text>
            </ListItem>
            <ListItem>
              <Text>source 3</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default SourceList;
