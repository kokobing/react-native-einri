import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, StatusBar, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');




export default class BaseImage extends Component {

  constructor(props) {
    super(props);
  }

  //如果没有传值 生成默认
  static defaultProps = {
    title: 'title',
    color: '#000',
    fontsize: 18,
    height: 80,

  }



  render() {
    var { height, color, fontsize, title } = this.props;


    const styles = StyleSheet.create({
      container: {
        width: width,//宽度为屏幕的宽度
        height: height ,
        justifyContent: 'space-between',//居中
        alignItems: 'center',//居中
        flexDirection: 'row'
      },
      textboxstyle:{
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0, 
        justifyContent: 'center', alignItems: 'center'
      },
      textstyle:{
        color: color,
        fontSize: fontsize,
     },
    });
    

    return (
      <View style={styles.container}>
        <Image style={{width:width , height: height }}
          source={{ uri: 'http://img.hb.aicdn.com/3a3ce5f235183ee74486057ae6dbdaf4916df57294ade-lQgCPE_fw658' }} />
          
        <View style={styles.textboxstyle}>
              
            <Text style={styles.textstyle}>{title}</Text>
       
        </View>

      </View>
    )

  }



}

