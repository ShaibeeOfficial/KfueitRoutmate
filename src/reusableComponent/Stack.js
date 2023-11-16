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
import ZahirPeerTime from '../Screens/ZP-Time/Index';
import RYKTracking from '../Screens/RYK-Tracking/Inex';
import KhanPurTracking from '../Screens/KPR-Tracking/Index';
import SadiqabadTracking from '../Screens/SDQ-Tracking/Index';
import ZahirPeerTracking from '../Screens/ZP-Tracking/Index';
import Home4Driver from '../Screens/Home4Driver/Index';
import ChooseCities from '../Screens/DriverCities/Index';
import UpdateTrackingRYK from '../Screens/Update-Tracking-RYK/Index';
import UpdateTrackingKPR from '../Screens/Update-Tracking-KPR/Index';
import UpdateTrackingSDQ from '../Screens/Update-Tracking-SDQ/Index';
import UpdateTrackingZP from '../Screens/Update-Tracking-ZP/Index';
import Details from '../Screens/Details';
import SdkDetails from '../Screens/SdkDetails';
import StudentSdkDetails from '../Screens/StudentSdkDetails';

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
            <myStack.Screen options={{ headerShown: false }} name='ZahirPeerTime' component={ZahirPeerTime} />
            <myStack.Screen options={{ headerShown: false }} name='RYKTracking' component={RYKTracking} />
            <myStack.Screen options={{ headerShown: false }} name='KhanPurTracking' component={KhanPurTracking} />
            <myStack.Screen options={{ headerShown: false }} name='SadiqabadTracking' component={SadiqabadTracking} />
            <myStack.Screen options={{ headerShown: false }} name='ZahirPeerTracking' component={ZahirPeerTracking} />
            <myStack.Screen options={{ headerShown: false }} name='Home4Driver' component={Home4Driver} />
            <myStack.Screen options={{ headerShown: false }} name='ChooseCities' component={ChooseCities} />
            <myStack.Screen options={{ headerShown: false }} name='UpdateTrackingRYK' component={UpdateTrackingRYK} />
            <myStack.Screen options={{ headerShown: false }} name='UpdateTrackingKPR' component={UpdateTrackingKPR} />
            <myStack.Screen options={{ headerShown: false }} name='UpdateTrackingSDQ' component={UpdateTrackingSDQ} />
            <myStack.Screen options={{ headerShown: false }} name='UpdateTrackingZP' component={UpdateTrackingZP} />
            <myStack.Screen options={{ headerShown: false }} name='Details' component={Details} />
            <myStack.Screen options={{ headerShown: false }} name='SdkDetails' component={SdkDetails} />
            <myStack.Screen options={{ headerShown: false }} name='StudentSdkDetails' component={StudentSdkDetails} />




            </myStack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation