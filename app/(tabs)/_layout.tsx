import { Tabs } from 'expo-router'
import { CustomIcon } from '~/components/custom-icon'

export default function Layout() {
  return (
    <Tabs
      screenOptions={{ tabBarActiveTintColor: '#C67C4E', headerShown: false }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'home',
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              images={
                focused
                  ? require('~/assets/icons/home.png')
                  : require('~/assets/icons/home-o.png')
              }
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: ' ',
          tabBarIcon: ({ color }) => (
            <CustomIcon
              images={
                color === '#C67C4E'
                  ? require('~/assets/icons/favs-o.png')
                  : require('~/assets/icons/favs.png')
              }
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: ' ',
          tabBarIcon: ({ color }) => (
            <CustomIcon
              images={
                color
                  ? require('~/assets/icons/shop.png')
                  : require('~/assets/icons/shop-o.png')
              }
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="notify"
        options={{
          title: ' ',
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              images={
                focused
                  ? require('~/assets/icons/notify.png')
                  : require('~/assets/icons/notify-o.png')
              }
            />
          ),
          tabBarLabel: () => null,
        }}
      />
    </Tabs>
  )
}
