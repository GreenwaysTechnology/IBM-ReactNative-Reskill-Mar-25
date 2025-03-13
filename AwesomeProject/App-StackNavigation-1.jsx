import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet } from 'react-native'

const Stack = createNativeStackNavigator()

//screen: component

const HomeScreen = () => {
    return <View style={styles.container}>
        <Text>Home Screen</Text>
    </View>
}




function App() {
    return <NavigationContainer>
        {/* Type of Navigator : Stack or Tab */}
        <Stack.Navigator>
            {/* Declare screens */}
            <Stack.Screen name="Home" component={HomeScreen} />
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