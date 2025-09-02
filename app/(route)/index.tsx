import BusCard from "@/components/busCard";
import { styles } from "@/styles/route.styles";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const Index = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name="chevron-back-outline" size={44} color="black" />
            </TouchableOpacity>

            <BusCard />
            <BusCard />
            <BusCard />
            <BusCard />
        </View>
    );
};

export default Index;
