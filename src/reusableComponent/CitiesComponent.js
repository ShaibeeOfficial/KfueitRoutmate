import { View, Text, Image , TouchableOpacity} from 'react-native'
import React from 'react'
import { color } from '../Theme/Color'
import Fonts from '../Theme/Fonts'

const CitiesComponent = ({source,title,onPress}) => {
    return (
        <View>
            <TouchableOpacity style={{ marginLeft:30,marginBottom:10,height: 200, width: 100, justifyContent: "center", borderRadius: 10 }} onPress={onPress}>
                <View style={{ alignItems: "center" }}>
                    <Image style={{ height: 200, width: 150, borderRadius:20 }} source={source}></Image>
                    <Text style={{ marginLeft: "5%", color: color.Black, fontSize: 18, fontFamily: Fonts.GillroySemiBold, fontSize: 20 }}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CitiesComponent