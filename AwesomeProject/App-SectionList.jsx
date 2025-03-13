import { StyleSheet, View, Text, SectionList } from "react-native";

//data:
const COURSELIST = [
    {
        title: 'User Interface',
        data: [
            'HTML',
            'CSS',
            'Android',
            'IOS',
            'Javascript'
        ]
    },
    {
        title: 'Backend',
        data: [
            'JAVA',
            'C#',
            'Microservices',
            'Python',
            'Javascript'
        ]

    },
]

const Course = props => {

    return <>
        <SectionList
            sections={COURSELIST}
            renderItem={({ item }) => {
                return <View style={styles.item}>
                    <Text style={styles.title}>{item}</Text>
                </View>
            }}
            renderSectionHeader={({ section: { title } }) => {
                return <Text style={styles.header}>{title}</Text>
            }}
            keyExtractor={(item, index) => {
                return item + index
            }}

        />
    </>
}

function App() {
    return <View style={styles.container}>
        <Course />
    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        marginHorizontal: 16,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
    },
    header: {
        fontSize: 32,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
    },
});
export default App;
