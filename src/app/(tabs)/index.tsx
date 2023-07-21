import { View, Text } from "react-native";
import {Link} from 'expo-router';
import {Button} from "@/components/Button";

export default function Home(){
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 44, fontWeight: '700'}}>HOME</Text>

            {/**passei esse asChild pq ele tem que repassar essa interação de toque para o Button baseado na rota que está utilizando  */}
            {/* <Link href="/settings" asChild>
                <Button title="Configurações" />
            </Link> */}

            <Link href="/product/5" asChild>
                <Button title="Ver produto"/>
            </Link>
        </View>
    )
}