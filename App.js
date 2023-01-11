import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CustomerDetails from "./src/pages/CustomerDetails";
import SignIn from "./src/pages/SignIn";
const navigator = createStackNavigator({
  SignIn:SignIn,
  customerDetails:CustomerDetails
},{
  initialRouteName:"customerDetails",
  defaultNavigationOptions:{
    headerShown: false,
  },
  
});
export default createAppContainer(navigator)
