
import {Image,TouchableOpacity, Text,Button, View } from 'react-native';
import { Box, Pressable } from "native-base";
import React, { useState } from "react";
import Modal from "react-native-modal";




const SecondPage = ({navigation}) => {
  
 
    const [isModalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
  

  
  return (
  <View className=' w-screen h-screen bg-white align-middle justify-around'>

  <TouchableOpacity onPress={() => navigation.navigate('Lesson1')} className=' w-80 h-20 bg-[#1c64b1] flex flex-col justify-center align-middle m-auto'>
  <Text className=' text-2xl text-white text-center'>4TH QUARTER</Text>
  <Text className=' text-2xl text-white text-center'>JUNE-AUGUST,2023</Text>
  </TouchableOpacity>
  <View className=' w-80 h-40   flex flex-col justify-center align-middle m-auto'>
  <Text className=' text-xl text-center font-serif'>THEME</Text>
  <Text className=' text-2xl text-center italic font-extrabold'>Demonstration of the </Text>
  <Text className=' text-4xl text-center font-extrabold'>CHRISTIAN LIFE</Text>
  <Text className=' text-sm  text-center font-normal'>(EXPOSITION ON THE BOOK OF PHILEMON)</Text>
  </View>

  <View className=' w-screen h-2/3 flex flex-col gap-5 align-middle items-center'>

  <TouchableOpacity onPress={toggleModal} className=' w-10/12 h-44 flex flex-col  bg-black  rounded-md justify-center items-center align-middle shadow-2xl' >
  <Text className=' font-extrabold text-2xl italic text-white'>First Unit</Text>
  <Text className=' font-extrabold text-lg text-white'>Plea For Forgiveness (Lesson 1-4)</Text>

  <Modal 
  isVisible={isModalVisible}
  testID={'modal'}
  backdropColor="#B4B3DB"
  backdropOpacity={0.8}
  animationIn="zoomInDown"
  animationOut="zoomOutUp"
  animationInTiming={600}
  animationOutTiming={600}
  backdropTransitionInTiming={600}
  backdropTransitionOutTiming={600}>
  
    <TouchableOpacity onPress={toggleModal}  className=' w-90 h-80 rounded-md shadow-2xl shadow-slate-600 bg-green-400 flex flex-col justify-center items-center' >
   
     <Text  className=' font-extrabold text-2xl italic'>UNIT 1</Text>
     <Text className=' font-extrabold text-lg'>Plea For Forgiveness (Lesson 1-4)</Text>
    <View className=' flex flex-row gap-20 py-3'>
    <Text>June 4</Text>
    <Text>Philemon: Author's Focus And Major Character</Text>
    </View>

    <View className=' flex flex-row gap-20 py-3'>
    <Text>June 4</Text>
    <Text>Philemon: Author's Focus And Major Character</Text>
    </View>
    <View className=' flex flex-row gap-20 py-3'>
    <Text>June 4</Text>
    <Text>Philemon: Author's Focus And Major Character</Text>
    </View>
    <View className=' flex flex-row gap-20 py-3'>
    <Text>June 4</Text>
    <Text>Philemon: Author's Focus And Major Character</Text>
    </View>
    <View className=' flex flex-row gap-20 py-3'>
    <Text>June 4</Text>
    <Text>Philemon: Author's Focus And Major Character</Text>
    </View>
    </TouchableOpacity>
  </Modal>
</TouchableOpacity>

<TouchableOpacity onPress={toggleModal} className=' w-10/12 h-44 flex flex-col  bg-black  rounded-md justify-center items-center align-middle shadow-2xl' >
<Text className=' font-extrabold text-2xl italic text-white'>Second Unit</Text>
<Text className=' font-extrabold text-lg text-white'>Restoration Through Christ (Lesson 5-8)</Text>

<Modal 
isVisible={isModalVisible}
testID={'modal'}
backdropColor="#B4B3DB"
backdropOpacity={0.8}
animationIn="zoomInDown"
animationOut="zoomOutUp"
animationInTiming={600}
animationOutTiming={600}
backdropTransitionInTiming={600}
backdropTransitionOutTiming={600}>

  <TouchableOpacity onPress={toggleModal}  className=' w-90 h-80 rounded-md shadow-2xl shadow-slate-600 bg-green-400 flex flex-col justify-center items-center' >
 
   <Text  className=' font-extrabold text-2xl italic'>UNIT 1</Text>
   <Text className=' font-extrabold text-lg'>Plea For Forgiveness (Lesson 1-4)</Text>
  <View className=' flex flex-row gap-20 py-3'>
  <Text>June 4</Text>
  <Text>Philemon: Author's Focus And Major Character</Text>
  </View>

  <View className=' flex flex-row gap-20 py-3'>
  <Text>June 4</Text>
  <Text>Philemon: Author's Focus And Major Character</Text>
  </View>
  <View className=' flex flex-row gap-20 py-3'>
  <Text>June 4</Text>
  <Text>Philemon: Author's Focus And Major Character</Text>
  </View>
  <View className=' flex flex-row gap-20 py-3'>
  <Text>June 4</Text>
  <Text>Philemon: Author's Focus And Major Character</Text>
  </View>
  <View className=' flex flex-row gap-20 py-3'>
  <Text>June 4</Text>
  <Text>Philemon: Author's Focus And Major Character</Text>
  </View>
  </TouchableOpacity>
</Modal>
</TouchableOpacity>
<TouchableOpacity onPress={toggleModal} className=' w-10/12 h-44 flex flex-col  bg-black  rounded-md justify-center items-center align-middle shadow-2xl' >
<Text className=' font-extrabold text-2xl italic text-white'>Third Unit</Text>
<Text className=' font-extrabold text-lg text-white'>Christocentric Lifestyles Enjoined (Lesson 9-12)</Text>

<Modal 
isVisible={isModalVisible}
testID={'modal'}
backdropColor="#B4B3DB"
backdropOpacity={0.8}
animationIn="zoomInDown"
animationOut="zoomOutUp"
animationInTiming={600}
animationOutTiming={600}
backdropTransitionInTiming={600}
backdropTransitionOutTiming={600}
transparent={true}
>

  <TouchableOpacity   className=' w-90 h-2/3 rounded-md shadow-2xl  bg-green-400 flex flex-col justify-center items-center gap-5' >
 
   <Text  className=' font-extrabold text-2xl italic' >UNIT 1</Text>
   <Text className=' font-extrabold text-lg'>Plea For Forgiveness (Lesson 1-4)</Text>

   <TouchableOpacity className=' flex flex-row w-full h-10  gap-5 bg-transparent justify-center items-center' onPress={() => navigation.navigate('LessonPage')}> 
   <Text  className=' font-extrabold text-center text-lg '>June 4</Text>
  <Text  className=' font-extrabold text-center text-lg'>Philemon: Author's Focus And Major Character</Text>
   </TouchableOpacity>
   <TouchableOpacity className=' flex flex-row w-full h-10  gap-5 bg-transparent justify-center items-center rounded-md mb-2' onPress={() => navigation.navigate('Lesson1')}> 
   <Text  className=' font-extrabold text-center text-lg '>June 4</Text>
  <Text  className=' font-extrabold text-center text-lg'>Philemon: Author's Focus And Major Character</Text>
   </TouchableOpacity>
   <TouchableOpacity className=' flex flex-row w-full h-10  gap-5 bg-transparent justify-center items-center rounded-md mb-2' onPress={() => navigation.navigate('Lesson1')}> 
   <Text  className=' font-extrabold text-center text-lg '>June 4</Text>
  <Text  className=' font-extrabold text-center text-lg'>Philemon: Author's Focus And Major Character</Text>
   </TouchableOpacity>
   <TouchableOpacity className=' flex flex-row w-full h-10  gap-5 bg-transparent justify-center items-center mx-5 rounded-md mb-2' onPress={() => navigation.navigate('Lesson1')}> 
   <Text  className=' font-extrabold text-center text-lg items-center'>June 4</Text>
  <Text  className=' font-extrabold text-center text-lg'>Philemon: Author's Focus And Major Character</Text>
   </TouchableOpacity>
   <TouchableOpacity className=' flex flex-row w-full h-10  gap-5 bg-transparent justify-center items-center rounded-md mb-2' onPress={toggleModal} > 
   <Text  className=' font-extrabold  bg-white text-lg '>Close</Text>
  
   </TouchableOpacity>

  </TouchableOpacity>
</Modal>

</TouchableOpacity>

 </View>

  </View>
  )
 
}

export default SecondPage


