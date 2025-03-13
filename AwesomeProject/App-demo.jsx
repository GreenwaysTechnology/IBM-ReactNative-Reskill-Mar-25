import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, StyleSheet, Button } from 'react-native'

//create Object of Stack
const Stack = createNativeStackNavigator()

//Screen Components
const Home = (props) => {

    const onMove = () => {
        //move to Profile
        props.navigation.navigate("Profile")
    }
    return <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="GoToProfile" onPress={onMove} />
    </View>
}

const Profile = (prop) => {
    return <View style={styles.container}>
        <Text>Profile Screen</Text>
    </View>
}

function App() {
    return <NavigationContainer>
        {/* Type of Navigation :Stack or Tab or Drawer Navigation */}
        {/* Stack Navigation */}
        <Stack.Navigator>
            {/* Define screens */}
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    </NavigationContainer>

}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})