import { StyleSheet } from "react-native";
import { COLORS } from "@/utils/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.stackBg
    },

    headerWrapper: {
        backgroundColor: COLORS.homeHeaderTitle,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 8,
        marginHorizontal: 3,
        marginTop: 5,
        maxHeight: 50,
        borderRadius: 11,
        
    },

    headerText: {
        fontSize: 25,
        fontWeight: "800",
        color:COLORS.headerText
        
    },

    stationWrapper: {
        marginTop: 10,
        backgroundColor: COLORS.homeHeader,
        paddingHorizontal: 8,
        marginHorizontal: 3,
        height:300,
        position:"relative",
        alignItems:"center"

    },  

    inputWrapper: {
        flex:1,
        // backgroundColor:"blue",
        paddingTop:30,
        gap:40,
        display:"flex",
        width:"95%",
        paddingRight:10
    },

    inputBoxWrapper: {
        display:'flex',
        flexDirection:"row",
        position:"relative",
        alignItems:"center",
        width:"90%",
        gap:14,
        borderRadius:10,
        borderWidth:2
    },

    inputBox: {
        width:"100%",
        // backgroundColor:"red",
        height:50
    },

    buttonWrapper: {
        height: 48,
        backgroundColor: COLORS.stationButton,
        borderRadius:16,
        width:"100%",
        position:"absolute",
        bottom:10,
    
    },

    butttonText: {
        fontSize: 30,
        color:"#ffff"

    },

    buttonTextWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    line: {
        borderWidth:1,
    } ,

    input: {
        paddingLeft:10,
        fontSize:20,
        paddingTop:10
    }



})