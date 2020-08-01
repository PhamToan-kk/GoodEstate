import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {
  HomeStackScreens,
  HistoryStackScreens,
  SearchStackScreens,
} from './StacksNavigator';
import AnimatedTabBar from '@gorhom/animated-tabbar';
import {VectorIcon} from '../components';
const Tab = createBottomTabNavigator();

const tabs = {
  HomeStack: {
    // < Screen name
    labelStyle: {
      color: '#1194AA',
    },
    icon: {
      component: () => (
        <VectorIcon
          MaterialCommunityIcons
          name="home"
          size={25}
          color={'gray'}
        />
      ),
      activeColor: 'rgba(17,148,170,1)',
      inactiveColor: 'blue',
    },
    background: {
      activeColor: 'rgba(207,235,239,1)',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
  SearchStack: {
    // < Screen name
    labelStyle: {
      color: '#1194AA',
    },
    icon: {
      component: () => (
        <VectorIcon MaterialCommunityIcons name="layers-search-outline" color={'gray'} size={23} />
      ),
      activeColor: 'rgba(17,148,170,1)',
      inactiveColor: 'blue',
    },
    background: {
      activeColor: 'rgba(207,235,239,1)',
      inactiveColor: 'rgba(207,235,239,0)',
    },
  },
  HistoryStack: {
    // < Screen name
    labelStyle: {
      color: '#1194AA',
    },
    icon: {
      component: () => (
        <VectorIcon FontAwesome5 name="hornbill" color={'gray'} size={23} />

      ),
      activeColor: 'rgba(17,148,170,1)',
      inactiveColor: 'blue',
    },
    background: {
      activeColor: 'rgba(207,235,239,1)',
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
      <Tab.Screen component={HomeStackScreens} name={'HomeStack'} />
      <Tab.Screen component={SearchStackScreens} name={'SearchStack'} />
      <Tab.Screen component={HistoryStackScreens} name={'HistoryStack'} />
    </Tab.Navigator>
  );
};
