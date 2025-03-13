import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();
//create tab:
const Stack = createNativeStackNavigator();

const Messages = props => {
    const { navigation } = props;
    return <View style={styles.container}>
        <Text>Messages Screen</Text>
        <Button title="go to Settions" onPress={() => {
            navigation.navigate('Settings')
        }} />
    </View>
}
const Feed = props => {
    return <View style={styles.container}>
        <Text>Feed Screen</Text>
    </View>
}
const UserManagementScreen = ()=>{
    return <View style={styles.container}>
        <Text>User Management Screen</Text>
    </View>
}
const ControlPanelScreen = ()=>{
    return <View style={styles.container}>
        <Text>Control Panel Screen</Text>
    </View>
}
const Settings = props => {
    return <Tab.Navigator>
        <Tab.Screen name="UserManagement" component={UserManagementScreen} />
        <Tab.Screen name="ControlPanel" component={ControlPanelScreen} />
    </Tab.Navigator>
}
const Home = props => {
    return <Tab.Navigator>
        <Tab.Screen name="Messages" component={Messages} />
        <Tab.Screen name="Feed" component={Feed} />
    </Tab.Navigator>
}
function App() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: true }}
            />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    </NavigationContainer>

}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
