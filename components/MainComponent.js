import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens
import HomeScreen from '../screen/Home';
import InfoScreen from '../screen/Info';
import NewsScreen from '../screen/News';

//Screen Name
const homeName = 'Home';
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
                    } else if (rn === infoName) {
                        iconName = focused ? 'info' : 'info-outline';
                    } else if (rn === newsName) {
                        iconName = focused ? 'news' : 'news-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>
                }
            })}>
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'grey',
                labelStyle: { paddingBottom: 10, fontSize: 10},
                style: {padding: 10, height: 70}
            }}

            </Tab.Navigator>
        </NavigationContainer>
    );
}