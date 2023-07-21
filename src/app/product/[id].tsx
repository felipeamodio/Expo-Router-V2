import { View, Text, Button } from "react-native";
import {useSearchParams} from 'expo-router';

export default function Product(){
    const {id} = useSearchParams(); //pegando o id e passa para a rota
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 44, fontWeight: '700'}}>
                PRODUTO: {id}
            </Text>
        </View>
    )
}