import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e9ecef",
        paddingTop: 10,
    },

    headerWrapper: {
        backgroundColor: "#0860add7",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 12,
        marginHorizontal: 8,
        marginBottom: 10,
        height: 50,
        borderRadius: 12,
    },
    headerText: {
        fontSize: 20,
        fontWeight: "700",
        color: "white",
    },

    stationWrapper: {
        backgroundColor: "white",
        marginHorizontal: 12,
        padding: 16,
        borderRadius: 12,
    },

    rowWrapper: {
        flexDirection: "row",
        marginBottom: 16,
    },


    inputColumn: {
        flex: 1,
    },

    inputRow: {
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: "#e0e0e0",
        marginBottom: 8,
        display : 'flex',
        flexDirection : 'row',
        alignItems : 'center',
        gap : 2
    },

    input: {
        fontSize: 16,
        color: "black",
        width : '100%'
    },

    swapWrapper: {
        display : 'flex',
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 6,
        gap : 4
    },

    divider: {
        flex: 1,
        height: 1,
        backgroundColor: "#ccc",
    },

    swapButton: {
        backgroundColor: "#e3f2fd",
        borderRadius: 20,
        padding: 6,
        marginLeft: 8,
    },

    findButton: {
        backgroundColor: "#2e7d32",
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
    },
    findButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "600",
    },
});
