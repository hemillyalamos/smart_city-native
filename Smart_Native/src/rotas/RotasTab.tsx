import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Inicial} from '../telas/Inicial'
import {Usuarios} from '../telas/Usuarios'
import {AmbientesEquipamentos} from '../telas/AmbientesEquipamentos'
import { Feather } from '@expo/vector-icons'
import { FormularioAmbienteEquipamento } from '../componentes/FormularioAmbienteEquipamento'


const { Navigator, Screen } = createBottomTabNavigator()

export function RotasTab(){
    return(
        <Navigator screenOptions={{ 
            headerShown: false, 
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#6c757d',
            tabBarStyle: {
                backgroundColor: '#f72585',
                borderTopColor: 0,
                paddingBottom: 10,
                paddingTop: 10
            }
        }}>

            <Screen 
                name='inicial'
                component={Inicial}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Feather name="home" size={size} color={color} /> 
                    )
                }}
            />

            <Screen 
                name='ambiente'
                component={FormularioAmbienteEquipamento}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Feather name="map-pin" size={size} color={color} /> 
                    )
                }}                
            />

        </Navigator>
    )
}