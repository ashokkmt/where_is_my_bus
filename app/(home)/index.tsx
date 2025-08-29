
import { styles } from "@/styles/home.styles";
import { View, Text, TouchableOpacity, TextInput, Button } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';


const Index = () => {
    return (
        <View style={styles.container}>

            <View style={styles.headerWrapper}>
                <TouchableOpacity>

                    <Ionicons name="reorder-three" size={34} color="black" />
                </TouchableOpacity>

                <Text style={styles.headerText}>Where is my Bus</Text>

                <TouchableOpacity>
                    <Ionicons name="mic-sharp" size={30} color="black" />
                </TouchableOpacity>

            </View>
            <View style={styles.stationWrapper}>

                <View style={styles.inputWrapper}>

                    <View style={styles.inputBoxWrapper}>
                        <TouchableOpacity style={styles.inputBox}>
                            <TextInput style={styles.input} placeholderTextColor={"black"} placeholder="from station" />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Ionicons name="close" size={34} color="black" />
                        </TouchableOpacity>


                    </View>

                    <View style={styles.line}>
                        
                    </View>

                    <View style={styles.inputBoxWrapper}>
                        <TouchableOpacity style={styles.inputBox}>
                            <TextInput style={styles.input} placeholderTextColor={"black"} placeholder="to station" />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Ionicons name="close" size={34} color="black" />
                        </TouchableOpacity>
                    </View>


                </View>


                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.buttonTextWrapper}>
                        <Text style={styles.butttonText}>Find Bus</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Index;