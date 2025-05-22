import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';

import {useNavigation} from '@react-navigation/native';
import SettingsScreen from '../screens/SettingsScreen';
import AllGoalsScreen from '../screens/AllGoalsScreen';
import NotesListScreen from '../screens/NotesListScreen';
import QuizStartScreen from '../screens/QuizStartScreen';

const Tab = createBottomTabNavigator();

const getTabIcon = (routeName) => {
    switch (routeName) {
        case 'Home':
            return require('../assets/img/Archive.png');
        case 'SettingsScreen':
            return require('../assets/img/Settings.png');
        case 'AllGoalsScreen':
            return require('../assets/img/Challenge.png');
        case 'NotesListScreen':
            return require('../assets/img/Note.png');

        case 'QuizStartScreen':
            return require('../assets/img/Game.png');

        default:
            return require('../assets/img/Archive.png');
    }
};

const MainTabNavigator = () => {
    const navigation = useNavigation();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                headerTitleStyle: {
                    color: 'white',
                    fontFamily:'Quantico-BoldItalic',
                    fontSize: 40,
                },
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 40,
                    left: 20,
                    right: 20,
                    elevation: 5,
                    backgroundColor: '#566b75',
                    borderRadius: 30,
                    width: '80%',
                    marginLeft: '10%',
                    height: 70,
                    paddingTop: 15,
                    paddingBottom: 10,
                },
                tabBarIcon: ({focused}) => {
                    const iconSource = getTabIcon(route.name);
                    return (
                        <Image
                            source={iconSource}
                            style={{
                                width: 30,
                                height: 30,
                                tintColor: focused ? '#0BEFFF' : '#FFFFFF',
                            }}
                        />
                    );
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'Home',
                }}
            />

            <Tab.Screen
                name="AllGoalsScreen"
                component={AllGoalsScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'Home',
                }}
            />

            <Tab.Screen
                name="NotesListScreen"
                component={NotesListScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'Home',
                }}
            />

            <Tab.Screen
                name="QuizStartScreen"
                component={QuizStartScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'Home',
                }}
            />

            <Tab.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{
                    tabBarLabel: '',
                    headerTitle: 'Settings',
                }}
            />
        </Tab.Navigator>
    );
};

export default MainTabNavigator;
