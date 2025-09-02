import { COLORS } from "@/utils/theme";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const BusCard = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.busCarWrapper}>

                <View style={styles.firstWrapper}>
                    <View style={styles.numberTextWrapper}>
                        <Text style={{ fontSize: 16, fontWeight: "700" }}>
                            1239
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: 22, fontWeight: "400" }}>
                            Route of bus
                        </Text>
                    </View>
                </View>

                <View style={styles.secondWrapper}>
                    <Text>3:55 PM</Text>
                    <Text>................</Text>
                    <Text>7 hrs 18 mins</Text>
                    <Text>................</Text>
                    <Text>11:13 PM</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default BusCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        maxHeight: 100,
        borderBottomWidth: 2,
        marginHorizontal: 10,
        marginBottom: 1,
        borderRadius: 15,

        shadowColor: COLORS.black,
        shadowOffset: {
            width: 1,
            height: 2,
        },
        shadowOpacity: 0.1,
        elevation: 8,

        borderBottomColor: COLORS.border,
        borderRightColor: COLORS.border,
        borderTopColor: "#eee",
        borderLeftColor: "#eee",
    },

    busCarWrapper:{
    
       
        paddingVertical:10,
 
        paddingHorizontal:15,
        gap:25
    

        
    },
    firstWrapper: {
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
    },

    numberTextWrapper: {
        backgroundColor: "#cee6f8ff",
        width: 55,
        height: 25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },

    secondWrapper: {
        flexDirection: "row",
       
    },
});
