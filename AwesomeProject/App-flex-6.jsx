import { StyleSheet, View, Text } from "react-native";

const App = () => {
    return <View style={styles.container}>
        <Text style={styles.headerStyle}>Flex wrap</Text>
        <View style={styles.elementsContainer}>
            <View style={{ width: 50, height: 50, backgroundColor: 'red' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />

            <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />

            <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'green' }} />

            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'white' }} />
            <View style={{ width: 50, height: 50, backgroundColor: 'blue' }} />


        </ View>
    </View>
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:50
    },
    headerStyle: {
        fontSize: 29,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 24,
        color: 'blue'
    },
    elementsContainer: {
        flex: 1,
        backgroundColor: 'black',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        rowGap: 10,
        columnGap: 10,
        marginBottom: 24
    }

})