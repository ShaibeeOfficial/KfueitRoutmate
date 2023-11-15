import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from "@react-navigation/native";
import Login from '../../src/Screens/Login/Index';
import Home4Students from '../Screens/Home4Students/Index';
import Schedule from '../Screens/Schedule/Index';
import Tracking from '../Screens/Tracking/Index';
import SplashScreen from '../Screens/SplashScreen/Index';
import RYKTime from '../Screens/RYK-Time/Index';
import KhanPurTime from '../Screens/KPR-Time/Index';
import SadiqabadTime from '../Screens/SDQ-Time/Index';
import LiaqatPurTime from '../Screens/LQP-Time/Index';

const myStack = createNativeStackNavigator();
const Navigation = () => {

    return (
        <NavigationContainer>
            <myStack.Navigator>
            <myStack.Screen options={{ headerShown: false }} name='SplashScreen' component={SplashScreen} />
            <myStack.Screen options={{ headerShown: false }} name='Login' component={Login} />
            <myStack.Screen options={{ headerShown: false }} name='Home4Students' component={Home4Students} />
            <myStack.Screen options={{ headerShown: false }} name='Schedule' component={Schedule} />
            <myStack.Screen options={{ headerShown: false }} name='Tracking' component={Tracking} />
            <myStack.Screen options={{ headerShown: false }} name='RYKTime' component={RYKTime} />
            <myStack.Screen options={{ headerShown: false }} name='KhanPurTime' component={KhanPurTime} />
            <myStack.Screen options={{ headerShown: false }} name='SadiqbadTime' component={SadiqabadTime} />
            <myStack.Screen options={{ headerShown: false }} name='LiaqatPurTime' component={LiaqatPurTime} />
            </myStack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation