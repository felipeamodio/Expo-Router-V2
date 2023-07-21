import {forwardRef} from 'react';
import {TouchableOpacity, Text, TouchableOpacityProps} from 'react-native';

type Props = TouchableOpacityProps & {
    title: string;
}
export const Button = forwardRef<TouchableOpacity, Props>(({title, ...rest}, ref) => {
    return(
        <TouchableOpacity ref={ref} style={{width: 200, padding: 16, backgroundColor: '#8257E5', borderRadius: 7, alignItems: 'center'}} {...rest}>
            <Text style={{fontSize: 16, color: '#ffffff', fontWeight: '700'}}>
                {title}
            </Text>
        </TouchableOpacity>
    )
})