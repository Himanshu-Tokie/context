import React, { useContext } from "react";
import TextButton from "../../customButtons/textButton";
import { StyleSheet, TouchableOpacity, View,Text } from "react-native";
import { Data } from "../../utils/context";
// import Page3 from "./page3";


export default function Page3({navigation}){
    const name = useContext(Data);
    return (
        <>
        <View>
            <Text>{name[0][0]}</Text>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.goBack()}>
        <TextButton text="Go Back"></TextButton>
        </TouchableOpacity>
        </View>
        
        </>
    )
}
const styles = StyleSheet.create({
    button:{

    }
})