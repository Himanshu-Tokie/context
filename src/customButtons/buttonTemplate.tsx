import React, { useContext } from "react";
import { Text, TextInput, View,StyleSheet } from "react-native";
import { SignUpData } from "../utils/util";
import { Data } from "../utils/context";

export default function ButtonTemplate({text}){
    const data = useContext(Data)
    function check(input:string){
        switch(text){
            case SignUpData.UserName:
                data[0][1](input);
                break;
            case SignUpData.UserPassword:
                data[1][1](input);
                break;
            default:
                console.log("Nothing");               
        }
    }
    
    return (
        <>
        <View>
            <View>
                <Text>
                    {text}
                </Text>
            </View>
            <View style={styles.textInput}>
                <TextInput 
                    onChangeText={check}
                    placeholder={text}
                    // color="black"
                />
            </View>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    textInput:{
        borderWidth: 2,
        borderColor: "grey",
        borderRadius: 20,
        padding: 10,
        textAlign: "left",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    }
})