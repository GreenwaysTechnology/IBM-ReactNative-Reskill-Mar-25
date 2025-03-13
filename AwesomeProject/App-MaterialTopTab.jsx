import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet, Text } from 'react-native'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();


const FeedScreen = () => {
    return <View style={{ flex: 1, marginBottom:40, marginTop:40, justifyContent: 'center', alignItems: 'center' }}>
        <Text>FeedScreen</Text>
    </View>
}
const NotificationsScreen = () => {
    return <View style={{ flex: 1, marginBottom:40, marginTop:40, justifyContent: 'center', alignItems: 'center' }}>
        <Text>NotificationsScreen</Text>
    </View>
}
const ProfileScreen = () => {
    return <View style={{ flex: 1,marginBottom:40, marginTop:40,justifyContent: 'center', alignItems: 'center' }}>
        <Text>ProfileScreen</Text>
    </View>
}

//Tab Configuration
function MyTabs() {
    return <Tab.Navigator initialRouteName="Profile" screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
        },
        tabBarStyle: {
            backgroundColor: 'powderblue'
        }
    }}>
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
}

function App() {

    return <NavigationContainer>
        <MyTabs />
    </NavigationContainer>

}
export default App;