import React, { Component } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

export default class MainAppDateSelector extends Component {
  render() {
    return (
      <View style={styles.dateSelectorContainer}>
        <View style={styles.appStateNofication}>
          <View style={styles.textBox}>
            <Text style={{color:'#eee',fontWeight:'800',fontSize:18}}>  رزرو جلسه </Text>
          </View>
          <View style={styles.closeButtonWrapper}>
            <Image source={require("./assets/close3.png")} />
          </View>
        </View>

        <View style={styles.profileDetails}>
          <View style={styles.profileImageWrapper}>
            <Image
              source={require("./assets/avatar.png")}
              style={{ width: 48, height: 48, borderRadius: 50 }}
            />
          </View>
        <View style={styles.profileDetailWrapper}>
        <View style={styles.sessionDetails}>
        <Image source={require('./assets/Oval.png')} 
        style={{marginHorizontal:10}}/>
        <Text style={{marginHorizontal:6, fontSize:15,fontWeight:'800',}}>جلسه اول</Text>
        <Text style={{marginHorizontal:6 ,fontSize:15,fontWeight:'800',}}>استقرار</Text>
        <Text style={{marginHorizontal:6 ,fontSize:15,fontWeight:'800',}}> 3/5  ساعت</Text>
        
        </View>
          <View style={styles.profileNameWrapper}>
            <Text style={{ fontWeight: "600", fontSize: 18, color: "#777" }}>
              شرکت دنیای پردازش
            </Text>
          </View>

          </View>
        </View>

        <View style={styles.DatePicker}>
          <View style={styles.pickeDateText}>
            <Text style={{fontSize:22,fontWeight:'800',color:'#444'}} >یک روز را انتخاب کنید</Text>
          </View>
          <View style={styles.pickeDateScroller}>
            <Image source={require("./assets/backward.png")} style={{marginHorizontal:15}}/>

            <ScrollView horizontal={true}>
              <View style={styles.simpleDate}>
                <View style={styles.weekday}>
                  <Text style={{color:'#222',fontWeight:'600'}}>شنبه</Text>
                </View>
                <View style={styles.monthDay}>
                  <Text style={{color:'#222',fontWeight:'600'}}> 19 آبان</Text>
                </View>
              </View>

              <View style={styles.simpleDate}>
                <View style={styles.weekday}>
                  <Text style={{color:'#222',fontWeight:'600'}}>یکشنبه</Text>
                </View>
                <View style={styles.monthDay}>
                  <Text style={{color:'#222',fontWeight:'600'}}> 20 آبان</Text>
                </View>
              </View>

              <View style={styles.simpleDate}>
                <View style={styles.weekday}>
                  <Text style={{color:'#222',fontWeight:'600'}}>دوشنبه</Text>
                </View>
                <View style={styles.monthDay}>
                  <Text style={{color:'#222',fontWeight:'600'}}> 21 آبان</Text>
                </View>
              </View>

              <View style={styles.simpleDate}>
                <View style={styles.weekday}>
                  <Text style={{color:'#222',fontWeight:'600'}}>سه شنبه</Text>
                </View>
                <View style={styles.monthDay}>
                  <Text style={{color:'#222',fontWeight:'600'}}> 22 آبان</Text>
                </View>
              </View>

              <View style={styles.simpleDate}>
                <View style={styles.weekday}>
                  <Text style={{color:'#222',fontWeight:'600'}}>چهارشنبه</Text>
                </View>
                <View style={styles.monthDay}>
                  <Text style={{color:'#222',fontWeight:'600'}}> 23 آبان</Text>
                </View>
              </View>

              <View style={styles.simpleDate}>
                <View style={styles.weekday}>
                  <Text style={{color:'#222',fontWeight:'600'}}>پنج شنبه</Text>
                </View>
                <View style={styles.monthDay}>
                  <Text style={{color:'#222',fontWeight:'600'}}>24 آبان</Text>
                </View>
              </View>

              <View style={styles.simpleDate}>
                <View style={styles.weekday}>
                  <Text style={{color:'#222',fontWeight:'600'}}>جمعه</Text>
                </View>
                <View style={styles.monthDay}>
                  <Text style={{color:'#222',fontWeight:'600'}}>25 آبان</Text>
                </View>
              </View>

              <View style={styles.simpleDate}>
                <View style={styles.weekday}>
                  <Text style={{color:'#222',fontWeight:'600'}}>شنبه</Text>
                </View>
                <View style={styles.monthDay}>
                  <Text style={{color:'#222',fontWeight:'600'}}> 26 آبان</Text>
                </View>
              </View>

              <View style={styles.simpleDate}>
                <View style={styles.weekday}>
                  <Text style={{color:'#222',fontWeight:'600'}}>یک شنبه</Text>
                </View>
                <View style={styles.monthDay}>
                  <Text style={{color:'#222',fontWeight:'600'}}>27 آبان</Text>
                </View>
              </View>
            </ScrollView>

            <Image source={require("./assets/foreward.png")} style={{marginHorizontal:15}}/>
          </View>
          <View style={styles.pickerDateOptions}>
            <View style={styles.optionCard}>
              <View style={styles.availableHours}>
                <Text style={{color:'#333',fontWeight:'600' ,fontSize:15}}> 13:00 الی 16:30</Text>
              </View>
              <View style={styles.dayParts}>
                <Text style={{    color: '#7d8997',fontWeight:'400',fontSize:17}}>بعد از ظهر</Text>
              </View>
            </View>
            
            
            <View style={styles.optionCard}>
              <View style={styles.availableHours}>
                <Text style={{color:'#333',fontWeight:'600',fontSize:15}}>9:00 الی 12:30</Text>
              </View>
              <View style={styles.dayParts}>
                <Text style={{    color: '#7d8997',fontWeight:'400',fontSize:17}}>صبح</Text>
              </View>
            </View>

          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  dateSelectorContainer: {
    flex: 0.93,
    // backgroundColor: "lightgreen"
    backgroundColor:'#fff'
  },
  appStateNofication: {
    flex: 0.085,
    backgroundColor: "#2aa9b3",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal:15
  },
  profileDetails: {
    flex: 0.16,
    backgroundColor: "#fff",
    marginTop:20
    // flexDirection:'row'
  },
  DatePicker: {
    flex: 0.55,
    // backgroundColor: "royalblue",

    alignItems: "center",
    justifyContent: "center"
  },

  pickeDateText: {
    flex: 0.2,
    // backgroundColor: "red",
    justifyContent:'center',
    alignItems:'center'
  },
  pickeDateScroller: {
    flex: 0.5,
    // backgroundColor: "gold",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 100
  },

  simpleDate: {
    width: 90,
    height: 90,
    // backgroundColor: "olivedrab",
    marginHorizontal: 40,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 100,
    borderWidth:2,
    borderColor: '#2e3f50',
    padding: 10,
  },

  pickerDateOptions:{
borderColor:'green',
// borderWidth:5,
flexDirection:'row',
justifyContent:'center',
alignItems:'center',
flex:.4
  },
  optionCard:{
    borderColor: '#2e3f50',
borderWidth:2,
borderRadius:6,
// borderStyle:'double',
marginHorizontal:25,
height:80,
width:140,
justifyContent:'space-evenly',
alignItems:'center',
padding:5
  },
  profileImageWrapper: {
    // borderWidth: 5,
    // borderColor: "red",
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center"
  },
  profileDetailWrapper:{
flex:.5,
borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection:'row-reverse',
    backgroundColor:'#f5f5f5'


  },
  profileNameWrapper: {
      flex:.2,
    // backgroundColor:"#000",
    justifyContent:'center',
    alignItems:'center'
  },
  sessionDetails:{
flex:.4,
// backgroundColor:'gold',
flexDirection:'row-reverse',
paddingHorizontal: 2,

  }
  //   ImageStyler: {
  //     borderWidth: 1,
  //     // borderColor:'',
  //     borderRadius: 50
  //   }
});
