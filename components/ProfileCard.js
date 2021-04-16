import React, { Component } from 'react';
import PropTypes from 'prop-types';
import update from 'immutability-helper';
import { Platform, StyleSheet, Image, View, Text, TouchableHighlight} from "react-native";

const userImage = require('./images/user2.png');
const data = [{
  image: userImage,
  name: 'QP',
  occupation: 'Coder',
  description:'Why do Java programmers have to wear glasses? ...Cuz they can\'t C#',
  showThumbnail: true,
}];
const ProfileCard = (props) =>{
  const {
    image, 
    name, 
    occupation, 
    description, 
    onPress, 
    showThumbnail
  } = props;
  let containerStyles = [styles.cardContainer];
  if(showThumbnail){
    containerStyles.push(styles.cardThumbnail);
  }
  return(
    <TouchableHighlight onPress={onPress}>
      <View style={styles.cardContainer}>

        <View style={styles.cardImageContainer}>
          {/* user1.jpg user2.png user3.png*/}
          <Image style={styles.cardImage} source={image} />
        </View>

        <View style={styles.textContainer}>
          <View>
            <Text style={styles.cardName}>{name}</Text>
          </View>
          
          <View style={styles.cardOccupationContainer}>
            <Text style={styles.cardOccupation}>
              {occupation}
            </Text>
          </View>

          <View>
            <Text style={styles.cardDescription}>
              {description}
            </Text>
          </View>
        </View>
      </View> 
    </TouchableHighlight>
  )
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired
};

export default class App extends Component {
  constructor (props, context){
    super(context);
    super(props);
    this.state = {
      data: data,
    };
  }
  handleProfileCardPress = (index)=>{
    const showThumbnail = !this.state.data[index].showThumbnail;
    this.setState({
      data: update(this.state.data, 
        {[index]:{showThumbnail:{$set:showThumbnail}}})
    });
  };
  render() {
    const list = this.state.data.map(function(item,index){
      const {image,name, occupation,description,showThumbnail} = item;
      return (
        <ProfileCard 
          key={'card-'+index}
          image = {image}
          name = {name}
          occupation = {occupation}
          description = {description}
          onPress = {this.handleProfileCardPress.bind(this,index)}
          showThumbnail = {showThumbnail}
        />
      );
    }, this);
    return <View>{list}</View>;
  }
}

//styles
const profileCardColor = 'peachpuff';
const textbackgroundColor = 'ghostwhite';
const textColor = 'black';

const styles = StyleSheet.create({

  cardContainer: {
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
    borderColor:'black',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius:20,
    alignItems:'center',
    ...Platform.select({
      ios:{
        shadowColor:'black',
        shadowOffset:{
          height:10
        },
        shadowOpacity:1,
      },
      android:{
        elevation:30,
      },

    }),
  },
  cardImageContainer:{
    backgroundColor:'white',
    borderWidth:3,
    borderColor:'black',
    width:120,
    height:120,
    borderRadius:60,
    alignItems: 'center',
    marginTop:30,
    paddingTop:10,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10
        },
        shadowOpacity: 1,
      },
      android: {
        borderWidth:3,
        borderColor:'black',
        elevation: 20,
      },

    }),
  },
  cardImage:{
    width:80,
    height:80,
  },
  textContainer: {
    alignItems: 'center',
    backgroundColor: textbackgroundColor,
    borderRadius: 20,
    position:'absolute',
    height:298,
    top:100,
    zIndex:-1,
  },
  cardName:{
    color: textColor,
    marginTop:70,
    fontWeight:'bold',
    fontSize:24,
  },
  cardOccupationContainer:{
    borderColor:'black',
    borderBottomWidth:3,
  },
  cardOccupation:{
    fontWeight: 'bold',
    marginTop:10,
    marginBottom:10,
  },
  cardDescription:{
    fontStyle:'italic',
    marginTop:20,
    marginRight:50,
    marginLeft:50,
    marginBottom:10,
  },
  cardThumbnail:{
    transform:[{scale: 0.2}]
  },
  
});