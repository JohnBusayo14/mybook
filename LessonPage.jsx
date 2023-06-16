
import React from 'react'
import { View,Text,Image, ScrollView } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'


const LessonPage = () => {
 
    return (
        <SafeAreaView >
        <ScrollView >
       <TouchableOpacity className=' w-screen bg-[44A1A0] flex flex-col items-center'>
       <Text className=' font-bold'>QUATER'S THEME:DEMONSTRATION OF THE CHRISTIAN LIFE</Text>
       <Text>(Exposition on the book of Philemon)</Text>
       <Text className=' font-bold'>UNIT1:Plea For Forgiveness (Lesson 1-4)</Text>
      
       </TouchableOpacity>

       <TouchableOpacity className=' mx-auto my-5  w-80 h-40 flex flex-row justify-center items-center'>
       <View className=' w-2/3 h-full justify-center items-center '>
       <Text className=' font-extrabold text-2xl italic'>LESSON</Text>
       <Text className=' font-extrabold text-7xl font-mono'>1</Text>
     
       <Text className=' font-medium text-sm ' >JUN. 04,2023</Text>
       <Text className=' font-medium text-xs '>(RESPONSIBILITY MONTH)</Text>
       </View>
       <Image className=' w-1/2 h-full bg-transparent' source = {require('../assets/teach.png')} />
       </TouchableOpacity>
     <TouchableOpacity className=' w-96 h-24 bg-[#44A1A0] flex my-10 flex-col items-center m-auto justify-center'>
     <Text className=' font-extrabold text-2xl italic'>PHILEMON:AUTHOR'S FOCUS & </Text>
     <Text className=' font-extrabold text-2xl italic text-[#1B0B0B]'>MAJOR CHARACTERS</Text>
     </TouchableOpacity>
     <View  className=' w-screen bg-[44A1A0] flex flex-col items-center  my-5'> 
     <Text>Suggested Hymns:G.H.B 1,5</Text>
     <Text>Devotional Reading: Philem. 1:8-10</Text>
     <Text>Topic For Adults: You Must Demontrate Christian Life </Text>
     <Text>Topic For Youth: You Must Demontrate Christian Life </Text>
     <Text>Topic For Intermediate: You Must Demontrate Christian Life </Text>
     <Text>Lesson Scriptures: Philem.1:8-10; Acts 26:9-13</Text>
     </View>

     <View className=' w-5/6 h-32 border-solid border-2 border-[#44A1A0] mx-auto justify-between items-center'>
     <Text className=' -m-6 bg-white p-3 font-extrabold text-xl'>MEMORY VERSE</Text>
     <Text className=' text-center text-base'>"Trust in the Lord with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths."<Text className=' font-extrabold'>Proverbs 3:5-6 </Text></Text>
     </View>
     <Text>DAILY DEVOTIONAL READING</Text>
     <View>
     </View>
     
        </ScrollView>
        </SafeAreaView>
       )
 
}

export default LessonPage
