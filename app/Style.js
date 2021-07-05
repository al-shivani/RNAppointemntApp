import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    homeContainer: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },

    listItem: {
        margin: 10,
        padding: 10,
        backgroundColor: "#FFF",
        width: "80%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 5
    },
    bookedListItem: {
        margin: 10,
        padding: 10,
        backgroundColor: "#DCDCDC",
        width: "80%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 5
    },
    bookContainer: {
        flex: 1,
        marginHorizontal: 16,
        margin: 10,
        padding: 10,
        backgroundColor: "#FFF",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
});