import React from "react";
import TextButton from "../../customButtons/textButton";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Page4 from "./page4";

export default function Page2({navigation}){
    return (
        <>
        <View>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate(Page4)}>
        <TextButton text="Page4"></TextButton>
        </TouchableOpacity>
        </View>
        
        </>
    )
}
const styles = StyleSheet.create({
    button:{

    }
})