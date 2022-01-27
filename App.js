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
import checkoutScreen from "./src/screens/checkoutScreen";
import timerScreen from "./src/screens/timerScreen";
import welcome from "./src/screens/admin/welcome";
import manageRates from "./src/screens/admin/manageRates";
import deliveryType from "./src/screens/admin/deliveryType";
import modifyGroceryItems from "./src/screens/admin/modifyGroceryItems";
import adminDetailScreen from "./src/screens/admin/adminDetailScreen";
import deliveryScreen from "./src/screens/deliveryScreen";
import pickupScreen from "./src/screens/pickupScreen";
import profileScreen from "./src/screens/profileScreen";
import pickupTimerScreen from "./src/screens/pickupTimerScreen";
import allOrders from "./src/screens/admin/allOrders";

const navigator = createStackNavigator(
  {
    LogInScreen: LogInScreen,
    SignupScreen: SignupScreen,
    HomeScreen: HomeScreen,
    displayDataScreen:displayDataScreen,
    WeeklyOffers:WeeklyOffers,
    FavouriteProduct:FavouriteProduct,
    AllProduct:AllProduct,
    Timer : timerScreen,
    Checkout: checkoutScreen,
    Cart : cartScreen,
    DetailScreen : DetailScreen,
    welcome: welcome,
    adminDetailScreen:adminDetailScreen,
    Delivery: deliveryScreen,
    Pickup: pickupScreen,
    Profile: profileScreen,
    PickupTimer: pickupTimerScreen,
    allOrders: allOrders,
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
