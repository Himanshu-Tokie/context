import React from "react";
import TextButton from "../../customButtons/textButton";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Page3 from "./page3";

export default function Page1({navigation}){
    return (
        <>
        <View>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate(Page3)}>
        <TextButton text="Page3"></TextButton>
        </TouchableOpacity>
        </View>
        
        </>
    )
}
const styles = StyleSheet.create({
    button:{

    }
})