import { icons } from '@/constants/icons'
import React from 'react'
import { Image, Text, View } from 'react-native'

const Saved = () => {
  return (
    <View className='flex-1 bg-primary px-10'>
      <View className='flex justify-center items-center flex-1 flex-cold gap-5'>
        <Image source={icons.save} className='size-10' tintColor='white' />
        <Text className='text-gray-500 text-base'>Saved</Text>
      </View>
    </View>
  )
}

export default Saved