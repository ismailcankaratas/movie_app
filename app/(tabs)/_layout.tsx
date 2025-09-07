import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { Image, ImageBackground, ImageSourcePropType, Text, View } from 'react-native'

interface TabIconProps {
  focused: boolean
  icon: ImageSourcePropType
  label: string
}

const TabIcon = ({ focused, icon, label }: TabIconProps) => {
  if (focused) {
    return (
      <ImageBackground source={images.highlight} className='flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 items-center justify-center rounded-full overflow-hidden'>
        <Image source={icon} tintColor="#151312" className='size-5' />
        <Text className='text-secondary text-base font-semibold ml-2'>{label}</Text>
      </ImageBackground>
    )
  }
  return (
    <View className='size-full mt-4 rounded-full items-center justify-center'>
      <Image source={icon} tintColor="#A8B5DB" />
    </View>
  )
}

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
      tabBarShowLabel: false,
      tabBarItemStyle: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      tabBarStyle: {
        backgroundColor: '#0f0D23',
        borderRadius: 50,
        marginHorizontal: 20,
        marginBottom: 36,
        height: 52,
        position: 'absolute',
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#0f0d23',
      }
    }}>
      <Tabs.Screen name="index" options={{
        title: 'Home',
        tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} icon={icons.home} label="Home" />
        ),
        headerShown: false
      }} />
      <Tabs.Screen name="search" options={{
        title: 'Search', tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} icon={icons.search} label="Search" />
        ),
        headerShown: false
      }} />
      <Tabs.Screen name="saved" options={{
        title: 'Saved', tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} icon={icons.save} label="Saved" />
        ),
        headerShown: false
      }} />
      <Tabs.Screen name="profile" options={{
        title: 'Profile', tabBarIcon: ({ focused }) => (
          <TabIcon focused={focused} icon={icons.person} label="Profile" />
        ),
        headerShown: false
      }} />
    </Tabs>
  )
}

export default TabsLayout

