import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Title, H3, } from 'native-base';
export default class CourseView extends Component {
  render() {
    return (
      <Container style={{width: '100%'}}>
        <Header >
            <Left>
                <Button transparent>
                <Icon name="arrow-back" />
                </Button>
            </Left>
            <Body>
                <Title>Web Design</Title>
            </Body>
        </Header>
        <Content>
        <Card style={{flex: 0}}>
          <CardItem>
            <Left>
              <Thumbnail source={require("../images/Logosampletwo.png")} />
              <Body>
                <Text>UI Design Course</Text>
                <Text note>April 15, 2016</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image source={require("../images/Background.png")} style={{height: 200, width: 200, flex: 1}}/>
              <Text>
                //Your text here
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <H3>
                Trainer
              </H3>
              <Text>
              //Your text here
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <H3>
                Price
              </H3>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <H3>
                Rating
              </H3>
            </Body>
          </CardItem>
        </Card>
      </Content>
      </Container>
    );
  }
}