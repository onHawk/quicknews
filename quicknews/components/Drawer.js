import React, { Component } from 'react';
import { StyleSheet, View, FlatList, Text } from 'react-native';

import { Container, Content, ListItem, Header } from 'native-base';

import { withNavigation } from 'react-navigation';

const routes = ['Sources', 'Categories'];

class DrawerComp extends Component {
  render() {
    return (
      <Container>
        <View
          style={{
            height: 120,
            backgroundColor: 'lightblue',
            alignItems: 'stretch',
          }}
        >
          <Text>Drawer</Text>
        </View>

        <Content padder>
          <FlatList
            data={routes}
            renderItem={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data.item)}
                >
                  <Text>{data.item}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

export default withNavigation(DrawerComp);
