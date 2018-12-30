import React, { Component } from 'react';
import { View, Text,StyleSheet,Image,Dimensions } from 'react-native';


let deviceHieght = Dimensions.get('window').height
export default class ModuleHeader extends Component {
  

  render() {
    return (
      <View style={styles.headerMain}>
                
      {/*Left Part Of Header*/}
      
      <View style={styles.left}>
          <View style={styles.leftWrapper}>
              <View style={styles.viewStylesImage}>
                  <Image
                      source={require('./assets/shape.png')}
                      style={styles.imageStyle}
                  />
              </View>
              <View style={styles.viewStyles}><Text style={styles.textStyle}>محمد حسین ضیایی</Text></View>
              <View style={styles.viewStyles}>
                  <Image
                      source={require('./assets/profile.png')}
                  />
              </View>
          </View>
          <View style={styles.rightWrapper}>
              <View style={styles.viewStyles}>
                  <Image
                      source={require('./assets/bell.png')}
                  />
              </View>
              <View style={styles.viewStyles}>
                  <Image
                      source={require('./assets/setting.png')}
                  />
              </View>
              <View style={styles.viewStyles}>
                  <Image
                      source={require('./assets/magnifier.png')}
                  />
              </View>
          </View>
      </View>
      
      {/*Right Part Of Header*/}
      
      <View style={styles.right}>
          <View style={styles.rightWrapper}>
              <View style={[styles.viewStyles2,{    backgroundColor: '#243342',height:55}]}>
                  <View style={styles.viewStylesImage2}>
                      <Image
                          source={require('./assets/dropdown_orange.png')}
                          style={styles.imageStyle}
                      />
                  </View>
                  <Text style={styles.textStyle}>محصولات</Text>
              </View>
              <View style={styles.viewStyles2}>
                  <View style={styles.viewStylesImage2}>
                      <Image
                          source={require('./assets/shape.png')}
                          style={styles.imageStyle}
                      />
                  </View>
                  <Text style={styles.textStyle}>دوره های آموزشی</Text>
              </View>
              <View style={styles.viewStyles2}>
                  <View style={styles.viewStylesImage2}>
                      <Image
                          source={require('./assets/shape.png')}
                          style={styles.imageStyle}
                      />
                  </View>
                  <Text style={styles.textStyle}>رخداد ها</Text>
              </View>
              <View style={styles.viewStyles2}>
                  <View style={styles.viewStylesImage2}>
                      <Image
                          source={require('./assets/shape.png')}
                          style={styles.imageStyle}
                      />
                  </View>
                  <Text style={styles.textStyle}>پیشنهادات</Text>
              </View>
          </View>
          
          <View style={styles.logoStyleView}>
              <Image
                  source={require('./assets/payam_gostar_logo.png')}
                  style={styles.imageStyle}
              />
          </View>
      </View>
  </View>
    );
  }
}




const styles = StyleSheet.create({
  headerMain: {
      flex: .07,
      backgroundColor: '#2e3f50',
      borderTopColor: '#ff795f',
      borderTopWidth: 3,
      flexDirection: 'row',
      justifyContent: 'space-between'
  },
  left: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  right: {
      alignItems: 'center',
      flexDirection: 'row'
  },
  leftWrapper: {
      flexDirection: 'row',
      borderRightWidth: 1,
      borderRightColor: 'white',
      paddingLeft: 55,
      paddingRight: 15
  },
  rightWrapper: {
      paddingLeft: 25,
      paddingRight:15,
      flexDirection: 'row-reverse',
  },
  textStyle: {
      fontSize: 15,
      color: 'white'
  },
  viewStyles: {
      paddingHorizontal: 10,
      justifyContent: 'center',
  },
  viewStylesImage: {
      justifyContent: 'center',
  },
  imageStyle: {
      justifyContent: 'center',
      alignItems: 'center'
  },
  viewStyles2: {
      flexDirection: 'row',
      paddingHorizontal: 10,
      justifyContent: 'center',
      alignItems:'center'
  },
  imageStyle2: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 50,
      
  },
  viewStylesImage2: {
      justifyContent: 'center',
      paddingRight: 10
  },
  logoStyleView:{
      paddingRight:50,
      paddingLeft:25,
      borderLeftColor: 'white',
      borderLeftWidth:1
  }
  
});
