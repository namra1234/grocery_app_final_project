import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LogInScreen from "./src/screens/LogInScreen"
import SignupScreen from "./src/screens/SignupScreen"
import HomeScreen from "./src/screens/HomeScreen"
import displayDataScreen from "./src/screens/displayDataScreen"

const navigator = createStackNavigator(
  {
    LogInScreen: LogInScreen,
    SignupScreen: SignupScreen,
    HomeScreen: HomeScreen,
    displayDataScreen:displayDataScreen,
  },
  {
    initialRouteName: "LogInScreen",
    defaultNavigationOptions: {
      // title: "Grocery Farm",
      headerShown:false,
      
    },
  }
);



export default createAppContainer(navigator);
