import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import { Container, Content, Text, List, ListItem } from 'native-base';

import { withNavigation } from 'react-navigation';

import SideBar from './Sidebar';

const routes = ['Home', 'NyTimes', 'Sources'];

class DrawerComp extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          {/* <Text>DRAWER</Text> */}

          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
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
