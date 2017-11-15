import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, StatusBar, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');


export default class Basebar extends Component {

  constructor(props) {
    super(props);
  }

  //如果没有传值 生成默认
  static defaultProps = {
    title: 'title',
    backgroundcolor: '#fff',
    color: '#000',
    fontsize: 18,
    height: 80,

  }

  //左侧图标
  _renderLeft() {
    if (this.props.lefticon) {
      return (
        <Text style={{ width: 50, textAlign: 'center' }}>{this.props.lefticon}</Text>
      )
    } else {
      return (
        <Text></Text>
      )
    }
  }

  //右侧图标
  _renderRight() {
    if (this.props.righticon) {
      return (
        <Text style={{ width: 50, textAlign: 'center' }}>{this.props.righticon}</Text>
      )
    } else {
      return (
        <Text></Text>
      )
    }
  }


  render() {
    var { height, backgroundcolor, color, fontsize, title, lefticon, righticon } = this.props;
    return (
      <View style={[styles.container, {
        height: height,
        backgroundColor: backgroundcolor,
      }]}//组件高度 背景颜色 this.props.height
      >
        <StatusBar
          animated={true}//状态栏变化时是否使用动画
          hidden={false}//是否隐藏状态栏
          backgroundColor={backgroundcolor}//仅作用于android。 状态栏背景色
          translucent={true}//仅作用于android。 是否透明
          barStyle={'default'}//状态栏文本的颜色（’default’, ‘light-content’, ‘dark-content’）
          showHideTransition={'fade'}//仅作用于ios。显示或隐藏状态栏时所使用的动画效果（’fade’, ‘slide’）
          networkActivityIndicatorVisible={true}//仅作用于ios。是否显示正在使用网络。 
        />

        {this._renderLeft()}

        <Text style={{ color: color, fontSize: fontsize }}>
          {title}
        </Text>

        {this._renderRight()}

      </View>
    )

  }



}

const styles = StyleSheet.create({
  container: {
    width: width,//宽度为屏幕的宽度
    justifyContent: 'space-between',//居中
    alignItems: 'center',//居中
    flexDirection: 'row'
  }
});
