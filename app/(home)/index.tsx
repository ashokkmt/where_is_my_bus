import { styles } from "@/styles/home.styles";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Index = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerWrapper}>
                <TouchableOpacity>
                    <Ionicons name="reorder-three" size={34} color="white" />
                </TouchableOpacity>

                <Text style={styles.headerText}>Where is My Train</Text>

                <TouchableOpacity>
                    <Ionicons name="mic-sharp" size={30} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.stationWrapper}>
                <View style={styles.rowWrapper}>

                    <View style={styles.inputColumn}>
                        <View style={styles.inputRow}>
                            <Ionicons name="ellipse-outline" size={20} color="black" />
                            <TextInput
                                style={styles.input}
                                placeholder="From Station"
                                placeholderTextColor="black"
                            />
                        </View>

                        <View style={styles.swapWrapper}>
                            <Ionicons name="ellipsis-vertical" size={18} color="gray" />
                            <View style={styles.divider} />
                            <TouchableOpacity style={styles.swapButton}>
                                <Ionicons name="swap-vertical" size={22} color="#1565C0" />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.inputRow}>
                            <Ionicons name="location-outline" size={22} color="black" />
                            <TextInput
                                style={styles.input}
                                placeholder="To Station"
                                placeholderTextColor="black"
                            />
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={styles.findButton}>
                    <Text style={styles.findButtonText}>Find Train</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Index;
