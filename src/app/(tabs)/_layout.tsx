import { Tabs } from "expo-router";
import {MaterialIcons} from '@expo/vector-icons';

export default function TabRoutesLayout(){
    return(
        <Tabs screenOptions={{headerShown: false}}>
            <Tabs.Screen
                name="index"
                options={{
                    title: "Início",
                    tabBarIcon: ({size, color}) => (
                        <MaterialIcons
                            name="home"
                            size={size}
                            color={color}
                         />
                    )
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({size, color}) => (
                        <MaterialIcons
                            name="person"
                            size={size}
                            color={color}
                         />
                    )
                }}
            />

            <Tabs.Screen
                name="settings"
                options={{
                    title: "Configurações",
                    tabBarIcon: ({size, color}) => (
                        <MaterialIcons
                            name="settings"
                            size={size}
                            color={color}
                         />
                    )
                }}
            />
        </Tabs>
    )
}