import React from "react";
import TextButton from "../../customButtons/textButton";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Page3 from "./page3";
import Page5 from "./page5";

export default function Page4({navigation}){
    return (
        <>
        <View>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate(Page5)}>
        <TextButton text="Page5"></TextButton>
        </TouchableOpacity>
        </View>
        
        </>
    )
}
const styles = StyleSheet.create({
    button:{

    }
})