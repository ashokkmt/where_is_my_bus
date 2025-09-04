// import { COLORS } from "@/utils/theme";
// import {
//     View,
//     Text,
//     StyleSheet,
//     TouchableOpacity,
//     Animated,
// } from "react-native";
// import { useEffect, useRef } from "react";

// const BusCardSkeleton = () => {
//     // Imagine your skeleton box is 55px wide (numberTextWrapper).
//     // The shimmer bar itself is 80px wide.
//     // If we start the shimmer at 0, it would already be visible halfway in the box.
//     const translateX = useRef(new Animated.Value(-100)).current;

//     useEffect(() => {
//         Animated.loop(
//             Animated.timing(translateX, {
//                 toValue: 300, // move shimmer across
//                 duration: 1200,
//                 useNativeDriver: true,
//             })
//         ).start();
//     }, []);

//     return (
//         <TouchableOpacity style={styles.container}>
//             <View style={styles.busCardWrapper}>
//                 <View style={styles.firstWrapper}>
//                     <View
//                         style={[styles.skeletonLine, { width: 55, height: 20 }]}
//                     >
//                         {/* shimmer overlay */}
//                         <Animated.View
//                             style={[
//                                 styles.shimmer,
//                                 { transform: [{ translateX }] },
//                             ]}
//                         />
//                     </View>
//                     <View
//                         style={[
//                             styles.skeletonLine,
//                             { height: 25, width: 250 },
//                         ]}
//                     >
//                         <Animated.View
//                             style={[
//                                 styles.shimmer,
//                                 { transform: [{ translateX }] },
//                             ]}
//                         />
//                     </View>
//                 </View>

//                 <View style={[styles.skeletonLine, { height: 20, width: 300 }]}>
//                     <Animated.View
//                         style={[
//                             styles.shimmer,
//                             { transform: [{ translateX }] },
//                         ]}
//                     />
//                 </View>
//             </View>
//         </TouchableOpacity>
//     );
// };

// export default BusCardSkeleton;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: COLORS.white,
//         maxHeight: 100,
//         borderBottomWidth: 2,
//         marginHorizontal: 10,
//         marginBottom: 1,
//         borderRadius: 15,
//         shadowColor: COLORS.black,
//         shadowOffset: { width: 1, height: 2 },
//         shadowOpacity: 0.1,
//         elevation: 8,
//         borderBottomColor: COLORS.border,
//         borderRightColor: COLORS.border,
//         borderTopColor: "#eee",
//         borderLeftColor: "#eee",
//     },

//     busCardWrapper: {
//         paddingVertical: 10,
//         paddingHorizontal: 15,
//         gap: 25,
//     },

//     firstWrapper: {
//         flexDirection: "row",
//         gap: 10,
//         alignItems: "center",
//     },

//     numberTextWrapper: {
//         backgroundColor: "#E0E0E0",
//         width: 55,
//         height: 25,
//         borderRadius: 5,
//         overflow: "hidden", // <– important for shimmer
//     },

//     secondWrapper: {
//         flexDirection: "row",
//         gap: 10,
//     },

//     shimmer: {
//         position: "absolute",
//         left: 0,
//         // the top and bottom stretch the shimmer with absolute so no height is required
//         top: 0,
//         bottom: 0,
//         width: 40,
//         backgroundColor: "rgba(255,255,255,0.6)",
//     },

//     skeletonLine: {
//         backgroundColor: "#E0E0E0",
//         borderRadius: 4,
//         overflow: "hidden",
//     },
// });



import { COLORS } from "@/utils/theme";
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Animated,
} from "react-native";
import { useEffect, useRef } from "react";

const BusCardSkeleton = () => {
    const progress = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(progress, {
                    toValue: 1,
                    duration: 1200,
                    useNativeDriver: true,
                }),
                Animated.timing(progress, {
                    toValue: 0,
                    duration: 1200,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    // opacity will move like a wave
    const shimmerOpacity = progress.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0.3, 1, 0.3], // dark → bright → dark
    });

    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.busCardWrapper}>
                <View style={styles.firstWrapper}>
                    <Animated.View
                        style={[
                            styles.skeletonLine,
                            { width: 55, height: 20, opacity: shimmerOpacity },
                        ]}
                    />
                    <Animated.View
                        style={[
                            styles.skeletonLine,
                            { width: 250, height: 25, opacity: shimmerOpacity },
                        ]}
                    />
                </View>

                <Animated.View
                    style={[
                        styles.skeletonLine,
                        { width: 310, height: 20, opacity: shimmerOpacity },
                    ]}
                />
            </View>
        </TouchableOpacity>
    );
};

export default BusCardSkeleton;

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
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.1,
        elevation: 8,
        borderBottomColor: COLORS.border,
        borderRightColor: COLORS.border,
        borderTopColor: "#eee",
        borderLeftColor: "#eee",
    },
    busCardWrapper: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        gap: 25,
    },
    firstWrapper: {
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
    },
    skeletonLine: {
        backgroundColor: "#E0E0E0",
        borderRadius: 4,
    },
});
