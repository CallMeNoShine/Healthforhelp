import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; //Icon directory Links: https://ionic.io/ionicons


//Screens
import HomeScreen from '../screen/HomeScreen';
import ChatScreen from '../screen/ChatScreen';
import InfoScreen from '../screen/InfoScreen';
import NewsScreen from '../screen/NewsScreen';

//Screen Name
const homeName = 'หน้าหลัก';
const chatName = 'พูดคุบกับเภสัช';
const infoName = 'ข้อมูลยา';
const newsName = 'ข่าวน่ารู้';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={infoName}
            screenOptions={({route})=> ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === chatName) {
                        iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
                    } else if (rn === infoName) {
                        iconName = focused ? 'information-circle' : 'information-circle-outline';
                    } else if (rn === newsName) {
                        iconName = focused ? 'newspaper' : 'newspaper-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: 'tomato',
                inactiveTintColor: 'grey',
                labelStyle: { paddingBottom: 10, fontSize: 10},
                style: {padding: 10, height: 70}
            })}>

            <Tab.Screen name={homeName} component={HomeScreen} 
                options={{
                    headerStyle: { backgroundColor: 'tomato'} , 
                    headerTitleAlign: 'center',
                    headerTintColor: '#fff',
                    headerTitleStyle: { fontWeight: 'bold'}
                    }}/>    
            <Tab.Screen name={chatName} component={ChatScreen} 
                options={{
                    headerStyle: { backgroundColor: 'tomato'},
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center',
                    headerTitleStyle: { fontWeight: 'bold'}
                }}/>    
            <Tab.Screen name={infoName} component={InfoScreen} options={{
                    headerStyle: { backgroundColor: 'tomato'},
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center',
                    headerTitleStyle: { fontWeight: 'bold'}
                }}/>    
            <Tab.Screen name={newsName} component={NewsScreen} options={{
                    headerStyle: { backgroundColor: 'tomato'},
                    headerTintColor: '#fff',
                    headerTitleAlign: 'center',
                    headerTitleStyle: { fontWeight: 'bold'}
                }}/>   

        </Tab.Navigator>
        </NavigationContainer>
    );
}