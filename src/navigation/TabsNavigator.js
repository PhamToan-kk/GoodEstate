import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';

import {
  HomeScreen,
  SearchScreen,
  HistoryScreen,
  UserProfile,
} from '../containers';
import AnimatedTabBar from '@gorhom/animated-tabbar';
import {VectorIcon} from '../components';
import {Colors} from '../styles';
const Tab = createBottomTabNavigator();

const tabs = {
  HomeStack: {
    // < Screen name
    labelStyle: {
      color: Colors.Cornflower_Blue,
    },
    icon: {
      component: () => (
        <VectorIcon
          MaterialCommunityIcons
          name="home"
          size={25}
          color={Colors.Cornflower_Blue}
        />
      ),
      activeColor: Colors.Cornflower_Blue,
      // inactiveColor: 'red',
    },
    background: {
      activeColor: Colors.Lavender,
      // inactiveColor: 'rgba(207,235,239,0)',
    },
  },
  SearchStack: {
    // < Screen name
    labelStyle: {
      color: Colors.Cornflower_Blue,
    },
    icon: {
      component: () => (
        <VectorIcon
          MaterialCommunityIcons
          name="layers-search-outline"
          color={Colors.Cornflower_Blue}
          size={23}
        />
      ),
      activeColor: Colors.Cornflower_Blue,
      inactiveColor: 'blue',
    },
    background: {
      activeColor: Colors.Lavender,
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
  HistoryStack: {
    // < Screen name
    labelStyle: {
      color: Colors.Cornflower_Blue,
    },
    icon: {
      component: () => (
        <VectorIcon
          FontAwesome5
          name="hornbill"
          color={Colors.Cornflower_Blue}
          size={23}
        />
      ),
      activeColor: Colors.Cornflower_Blue,
      inactiveColor: 'blue',
    },
    background: {
      activeColor: Colors.Lavender,
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
};

export const TabsNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => (
        <AnimatedTabBar
          tabs={tabs}
          {...props}
          // style={{borderRadius:15,marginBottom:10,marginHorizontal:10,alignItems:'center'}}
          iconSize={24}
          // itemOuterSpace	={15}
        />
      )}>
      <Tab.Screen component={HomeScreen} name={'HomeStack'} />
      <Tab.Screen component={SearchScreen} name={'SearchStack'} />
      <Tab.Screen component={UserProfile} name={'HistoryStack'} />
    </Tab.Navigator>
  );
};
