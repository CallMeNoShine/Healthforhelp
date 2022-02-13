import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';


//Screens
import HomeScreen from '../screen/HomeScreen';
import ChatScreen from '../screen/ChatScreen';
import InfoScreen from '../screen/InfoScreen';
import NewsScreen from '../screen/NewsScreen';

//Screen Name
const homeName = 'Home';
const chatName = 'Chat';
const infoName = 'Info';
const newsName = 'News';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOption={({route})=> ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn === chatName) {
                        iconName = focused ? 'chat' : 'chat-outline';
                    }
                     else if (rn === infoName) {
                        iconName = focused ? 'info' : 'info-outline';
                    } else if (rn === newsName) {
                        iconName = focused ? 'news' : 'news-outline';
                    }

                    return <Icon name={iconName} size={size} color={color}/>
                }
            })}
            screenOptions={{
                tabBarActiveTintColor: 'tomato',
                inactiveTintColor: 'grey',
                labelStyle: { paddingBottom: 10, fontSize: 10},
                style: {padding: 10, height: 70}
            }}
            >

            <Tab.Screen name={homeName} component={HomeScreen}/>    
            <Tab.Screen name={chatName} component={ChatScreen}/>    
            <Tab.Screen name={infoName} component={InfoScreen}/>    
            <Tab.Screen name={newsName} component={NewsScreen}/>   

        </Tab.Navigator>
        </NavigationContainer>
    );
}