import SplashScreen from 'react-native-splash-screen'
import React, { useEffect } from 'react'
import { View , Text } from 'react-native'

export default function App(){
  useEffect(()=>{
    SplashScreen.hide();
  },[])
  return(
    <View>
      <Text>Hi i ok bye</Text>
    </View>
  )

}