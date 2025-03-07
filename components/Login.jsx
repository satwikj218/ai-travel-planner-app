import { View, Text, Image } from 'react-native';
import React from 'react';

export default function Login() {
  return (
    <View>
      <Image source={require('./../assets/images/login.jpg')} 
        style={{ 
            width: '100%', 
            height: '500' 
        }} />
        <View>
            <Text style = {{
                fontSize: 28,
                fontFamily: 'outfit-bold'
            }}>AI Travel Planner</Text>
        </View>
    </View>
  )
}