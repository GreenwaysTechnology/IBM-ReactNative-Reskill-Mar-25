import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet, Button } from 'react-native'

const Stack = createNativeStackNavigator()

//screen: component

const HomeScreen = (props) => {
    const onMove = () => {
        props.navigation.navigate("Profile", { id: 1, name: 'Subramanian' })
    }
    return <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title='Profile' onPress={onMove} />
    </View>
}
const ProfileScreen = props => {
    const profile = props.route.params
    return <View style={styles.container}>
        <Text>Profile Screen</Text>
        <Text>{profile.id} {profile.name}</Text>
    </View>
}



function App() {
    return <NavigationContainer>
        {/* Type of Navigator : Stack or Tab */}
        <Stack.Navigator>
            {/* Declare screens */}
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />

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