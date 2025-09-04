import { COLORS } from "@/utils/theme";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Pressable,
} from "react-native";
import { useRef, useEffect } from "react";
import { BusCardProps } from "@/app/types";

const BusCard = ({
    index,
    busNo,
    routeName,
    startTime,
    endTime,
    est,
}: BusCardProps) => {
    const AnimatedTouchable = Animated.createAnimatedComponent(Pressable);
    const opacity = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(20)).current;

    useEffect(() => {
        const timeout = setTimeout(() => {
            Animated.parallel([
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 400,
                    useNativeDriver: true,
                }),
                Animated.timing(translateY, {
                    toValue: 0,
                    duration: 400,
                    useNativeDriver: true,
                }),
            ]).start();
        }, index * 150);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <AnimatedTouchable
            style={[styles.container, { opacity, transform: [{ translateY }] }]}
        >
            <TouchableOpacity>
                <View style={styles.busCarWrapper}>
                    <View style={styles.firstWrapper}>
                        <View style={styles.numberTextWrapper}>
                            <Text style={{ fontSize: 16, fontWeight: "700" }}>
                                {busNo}
                            </Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 22, fontWeight: "400" }}>
                                {routeName}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.secondWrapper}>
                        <Text>{startTime}</Text>
                        <Text>................</Text>
                        <Text>{est}</Text>
                        <Text>................</Text>
                        <Text>{endTime}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </AnimatedTouchable>
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

    busCarWrapper: {
        paddingVertical: 10,

        paddingHorizontal: 15,
        gap: 25,
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
