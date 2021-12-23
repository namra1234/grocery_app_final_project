import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LogInScreen from "./src/screens/LogInScreen"
import SignupScreen from "./src/screens/SignupScreen"

const navigator = createStackNavigator(
  {
    LogInScreen: LogInScreen,
    SignupScreen:SignupScreen
  },
  {
    initialRouteName: "LogInScreen",
    defaultNavigationOptions: {
      // title: "Grocery Farm",
      header: null
    },
  }
);



export default createAppContainer(navigator);
