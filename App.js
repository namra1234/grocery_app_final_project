import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LogInScreen from "./src/screens/LogInScreen"
import SignupScreen from "./src/screens/SignupScreen"
import HomeScreen from "./src/screens/HomeScreen"
import displayDataScreen from "./src/screens/displayDataScreen"
import FavouriteProduct from "./src/screens/FavouriteProduct"
import WeeklyOffers from "./src/screens/WeeklyOffers"
import AllProduct from "./src/screens/AllProduct"
import DetailScreen from "./src/screens/detailScreen"
import cartScreen from "./src/screens/cartScreen";
import welcome from "./src/screens/admin/welcome";
import manageRates from "./src/screens/admin/manageRates";
import deliveryType from "./src/screens/admin/deliveryType";
import modifyGroceryItems from "./src/screens/admin/modifyGroceryItems";

const navigator = createStackNavigator(
  {
    LogInScreen: LogInScreen,
    SignupScreen: SignupScreen,
    HomeScreen: HomeScreen,
    displayDataScreen:displayDataScreen,
    WeeklyOffers:WeeklyOffers,
    FavouriteProduct:FavouriteProduct,
    AllProduct:AllProduct,
    Cart : cartScreen,
    DetailScreen : DetailScreen,
    welcome: welcome,
    managerates: manageRates,
    delivery:deliveryType, 
    modify:modifyGroceryItems,
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
