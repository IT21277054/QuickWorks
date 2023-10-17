import { StyleSheet, View, Text, TouchableOpacity} from "react-native";

const ButtonWithBackground = (props:any) =>{
    const content = (
        <View style ={[styles.button,{backgroundColor:props.color}]}>
            <Text style={styles.text}>
                {props.title}
            </Text>
        </View>
    )
    return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
    button:{
        padding:16,
        width:150,
        borderRadius:15,
        alignItems:'center'
    },
    text:{
        color:'white',
        fontSize:20
    }
})

export default ButtonWithBackground