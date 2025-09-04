import BusCard from "@/components/busCard";
import { styles } from "@/styles/route.styles";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Animated,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import BusCardSkeleton from "@/components/busCardSkeleton";
import { useEffect, useRef, useState } from "react";
import { FlashList } from "@shopify/flash-list";

const DATA = [
    {
        busNo: "1234",
        routeName: "1A",
        startTime: "3:55 PM",
        endTime: "11:13 PM",
        est: "7 hrs 18 mins",
    },
    {
        busNo: "1234",
        routeName: "1A",
        startTime: "3:55 PM",
        endTime: "11:13 PM",
        est: "7 hrs 18 mins",
    },
    {
        busNo: "1234",
        routeName: "1A",
        startTime: "3:55 PM",
        endTime: "11:13 PM",
        est: "7 hrs 18 mins",
    },
    {
        busNo: "1234",
        routeName: "1A",
        startTime: "3:55 PM",
        endTime: "11:13 PM",
        est: "7 hrs 18 mins",
    },
    {
        busNo: "1234",
        routeName: "1A",
        startTime: "3:55 PM",
        endTime: "11:13 PM",
        est: "7 hrs 18 mins",
    },
    {
        busNo: "1234",
        routeName: "1A",
        startTime: "3:55 PM",
        endTime: "11:13 PM",
        est: "7 hrs 18 mins",
    },
    {
        busNo: "1234",
        routeName: "1A",
        startTime: "3:55 PM",
        endTime: "11:13 PM",
        est: "7 hrs 18 mins",
    },
    {
        busNo: "1234",
        routeName: "1A",
        startTime: "3:55 PM",
        endTime: "11:13 PM",
        est: "7 hrs 18 mins",
    },
    {
        busNo: "1234",
        routeName: "1A",
        startTime: "3:55 PM",
        endTime: "11:13 PM",
        est: "7 hrs 18 mins",
    },
    {
        busNo: "1234",
        routeName: "1A",
        startTime: "3:55 PM",
        endTime: "11:13 PM",
        est: "7 hrs 18 mins",
    },
    {
        busNo: "1234",
        routeName: "1A",
        startTime: "3:55 PM",
        endTime: "11:13 PM",
        est: "7 hrs 18 mins",
    },
    {
        busNo: "1234",
        routeName: "1A",
        startTime: "3:55 PM",
        endTime: "11:13 PM",
        est: "7 hrs 18 mins",
    },
];

const Index = () => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const timeout = setTimeout(() => setLoading(false), 3000);

        return () => clearTimeout(timeout);
    });

    if (loading) {
        return (
            <ScrollView style={styles.container}>
                <BusCardSkeleton />
                <BusCardSkeleton />
                <BusCardSkeleton />
                <BusCardSkeleton />
                <BusCardSkeleton />
                <BusCardSkeleton />
                <BusCardSkeleton />
                <BusCardSkeleton />
                <BusCardSkeleton />
                <BusCardSkeleton />
            </ScrollView>
        );
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="chevron-back-outline" size={44} color="black" />
            </TouchableOpacity>

            <View style={{flex:1}}>
                <FlashList
                    data={DATA}
                    renderItem={({ item, index }) => (
                        <BusCard {...item} index={index} />
                    )}
                    estimatedItemSize={100}
                    showsVerticalScrollIndicator={true}
                />
            </View>
        </View>
    );
};

export default Index;
