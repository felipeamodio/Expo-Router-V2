import { Link } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Profile(){
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 44, fontWeight: '700'}}>PERFIL</Text>

            <Link href="/product/5" asChild>
                <Button title="Ver produto" />
            </Link>
        </View>
    )
}