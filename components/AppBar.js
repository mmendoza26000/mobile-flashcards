import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default AppBar = ({ title }) => {
    

        return(
            <View style={styles.container}>
                    <MaterialCommunityIcons 
                        style={{color: 'white', paddingLeft: 20}}
                        size={35}
                        name='arrow-left' />
                    <Text style={styles.title} >{title}</Text> 
            </View>
    ) 
        
    
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 80,
        alignSelf: 'stretch',
        backgroundColor: 'black',
        alignItems: 'center',
        marginTop: 20
        

    },
    title: {
        color: 'white',
        paddingLeft: 20,
        fontWeight: 'bold',
        fontSize: 20
        

    }
})
