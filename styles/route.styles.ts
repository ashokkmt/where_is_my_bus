import { COLORS } from "@/utils/theme";
import { Dimensions, StyleSheet } from "react-native";

const {height , width} = Dimensions.get("window")

export const styles = StyleSheet.create({
    container: {
       flex:1,
       backgroundColor:COLORS.background,
       
    }
})