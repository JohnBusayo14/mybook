import React from 'react'
import {Image,TouchableOpacity, Text, View } from 'react-native';


const Homescreen = ({navigation}) => {
  return (
    <View className="flex-1 items-center justify-around bg-white">
  
    <View className="flex-1 items-center justify-center bg-white gap-2">
    <Image source = {require('../assets/frontimage2.jpg')} />
    <Text className='text-2xl text-gray-400 font-extrabold'>THE GOSPEL FAITH MISSION INT'</Text>
    <Text className='font-bold text-lg text-gray-400'>Sunday School Manual</Text>
    </View>
    <TouchableOpacity 
    className='h-12 w-80 bg-[#ACC8E5] justify-center mb-10 align-middle rounded-md'
    onPress={() => navigation.navigate('SecondPage')}>
    <Text className='text-center text-lg font-bold'>Get Started</Text>
    </TouchableOpacity>
    </View>
  )
}

export default Homescreen
