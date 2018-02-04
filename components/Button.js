import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


export default Button = ({ label='No Label', bgColor='white', textColor='black', border = true }) => {
    

    return(
        <TouchableOpacity
            style={{
                width: 200,
                backgroundColor: bgColor,
                padding: 10,
                marginTop: 10,
                paddingLeft: 50,
                paddingRight: 50,
                borderRadius: 8,
                borderWidth: border ? 2 : 0,
                alignItems: 'center'
            }}
        >
            <Text
                style={{color: textColor, fontSize: 18}}
            >{label}</Text>
        </TouchableOpacity>
    ) 
        
    
}

