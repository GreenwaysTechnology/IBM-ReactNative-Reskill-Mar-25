import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View, Text, Button, TouchableHighlight, FlatList, ActivityIndicator } from 'react-native'
import { useState, useEffect } from "react";


const Stack = createNativeStackNavigator();

//api error
const Error = props => {
    return <>
        <Text>{props.error}</Text>
    </>
}
//loader component
const Spinner = props => {
    return <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <ActivityIndicator size='large' color="#0000ff" />
    </View>
}
//Post Component which gets data from rest api
const Posts = props => {
    let initalState = {
        isLoaded: false,
        items: [],
        error: null
    }
    const [posts, setPosts] = useState(initalState)

    async function fetchPosts() {
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts'
            const values = await (await fetch(url)).json()
            setPosts({ ...posts, isLoaded: true, items: posts.items.concat(values) })
        }
        catch (err) {
            setPosts({ ...posts, isLoaded: true, error: err })
        }
    }
    //useEffect : ComponentDidMount 
    useEffect(() => {
        fetchPosts()
    }, [])

    const onSelect = (item) => {
        props.navigation.navigate('PostsDetails', item)
    }

    const { error, isLoaded, items } = posts
    if (error) {
        return <Error error={error} />
    } else if (!isLoaded) {
        return <Spinner />
    } else {
        return <FlatList
            data={items}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
                return <TouchableHighlight activeOpacity={0.4}
                    underlayColor='yellow' onPress={() => { onSelect(item) }} >
                    <View>
                        <Text style={styles.item}>{item.title}</Text>
                    </View>
                </TouchableHighlight>
            }}
        />
    }

}
const HomeScreen = props => {
    const { navigation: { navigate } } = props
    const onMove = () => {
        navigate('Posts')
    }
    return <View style={styles.container}>
        <Text style={{
            fontSize: 40,
        }}>Home Screen</Text>
        <Button title="Posts" onPress={onMove} />
    </View>
}

const PostScreen = props => {
    return <>
        <Posts navigation={props.navigation} />
    </>
}

const PostsDetailScreen = props => {
    const { title, body } = props.route.params
    return <View style={styles.container}>
        <Text style={{ fontSize: 25, color: 'blue' }}>{title}</Text>
        <Text style={{ fontSize: 20, color: 'red' }}>{body}</Text>
    </View>
}

const App = props => {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen options={{
                title: 'MyHome', headerStyle: {
                    backgroundColor: 'yellow'
                }
            }} name="Home" component={HomeScreen} />
            <Stack.Screen name="Posts" component={PostScreen} />
            <Stack.Screen options={(navigation) => {
                //return options object
                return {
                    title: navigation.route.params.title
                }
            }} name="PostsDetails" component={PostsDetailScreen} />
        </Stack.Navigator>
    </NavigationContainer>
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        fontWeight: 'bold',
        color: '#000'

    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        color: '#000'
    }
})

