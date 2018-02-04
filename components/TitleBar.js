import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default TitleBar = ({ text, titlePosition }) => {
    

    if( titlePosition !== 'right' ){
        return(
            <View style={styles.container}>
                <View style={styles.titleBox}>
                    <Text style={styles.title} >{text}</Text>
                </View>
                <View style={{flex:1}}></View>
            </View>
    ) } else {
            return(
                <View style={styles.container}>
                    <View style={{flex:1}}></View>
                    <View style={styles.titleBox}>
                        <Text style={styles.title} >{text}</Text>
                    </View>
                </View>
            )   
    }
        
    
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25,
        flexDirection: 'row',
        height: 80,
        alignSelf: 'stretch',
        backgroundColor: 'white'
        

    },
    titleBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'yellow',
        borderBottomWidth: 3
    },
    title: {
        padding: 20
        

    }
})
