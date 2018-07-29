import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Container, Header, Content, Form, Item, Picker, Textarea, Icon, Button, } from 'native-base';


export default class AddCourse extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2({value: string}) {
    this.setState({
      selected2: value
    });
  }

  render() {
    return (
      <View style={styles.container}>

    

        <Text style={styles.title}>Course Title</Text>
        {<Text style={styles.subTitle}>Enter short title of your course</Text>}
        <TextInput style={styles.input}
        underlineColorAndroid='rgba(0,0,0,0)' placeholder="Course title..."
        placeholderTextColor="#999999" />

          
          

        <Text style={styles.title}>Number of hours</Text>
        {<Text style={styles.subTitle}>The number of hours students will take to excel this course</Text>}
        <TextInput style={styles.input}
          keyboardType='numeric'
          underlineColorAndroid='rgba(0,0,0,0)' placeholder="Ex:33h"
          placeholderTextColor="#999999" />
          

        <Text style={styles.title}>Budget</Text>
        <TextInput style={styles.input}
          keyboardType='numeric'
          underlineColorAndroid='rgba(0,0,0,0)' placeholder="Budget"
          placeholderTextColor="#999999" />

          <Text style={styles.title}>Category</Text>

          <Container direction="right" >
          <Content>
            <Form>
              <Item picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="ios-arrow-down-outline" />}
                  style={{ width: undefined }}
                  placeholder="Select your SIM"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}
                >
                
                  <Picker.Item label="Wallet" value="key0" />
                  <Picker.Item label="ATM Card" value="key1" />
                  <Picker.Item label="Debit Card" value="key2" />
                  <Picker.Item label="Credit Card" value="key3" />
                  <Picker.Item label="Net Banking" value="key4" />
                </Picker>
              </Item>
            </Form>
          </Content>
        </Container>

          <Text style={styles.title}>Picture</Text>

          <Text style={styles.title}>Description</Text>

          <Container>
            <Content padder>
              <Form>
                <Textarea rowSpan={7} bordered placeholder="Description" />
              </Form>
            </Content>
          </Container>
          
          <Container>
            <Content>
              <Button info block style={{justifyContent: 'center', marginTop: 40,}}><Text> Primary </Text></Button>
            </Content>
        </Container>


      </View>
    );
  }
}

const styles = StyleSheet.create({
container:{
    flexGrow: 1,
    width: 350,
    padding: 30,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#fff',
    display: 'flex'
},
title:{
    color: '#000',
    fontSize: 13,
    alignSelf: 'flex-start',
},
subTitle:{
    color: '#aeaeae',
    fontSize: 10,
    alignSelf: 'flex-start',
    marginTop: 5,
},
input:{
    width: 170,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 10,
    fontSize: 16,
    color: '#999999',
    alignSelf: 'flex-end',
  },
  
});
