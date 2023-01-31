import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ModifiedList from "./src/component/ModifiedList";
import ItemDetails from "./src/pages/CustomerDetails";
import InventoryDetails from "./src/pages/InventoryDetails";
import PRICINGDiscountOffer from "./src/pages/PRICINGDiscountOffer";
import PRICINGReason from "./src/pages/PRICINGReason";
import SignIn from "./src/pages/SignIn";
import Test from "./src/pages/Test";
const navigator = createStackNavigator({
  SignIn:SignIn,
  ItemDetails:ItemDetails,
  ModifiedList:ModifiedList,
  PRICINGDiscountOffer:PRICINGDiscountOffer,
  PRICINGReason:PRICINGReason,
  Test:Test,
  InventoryDetails:InventoryDetails
},{
  initialRouteName:"PRICINGDiscountOffer",
  defaultNavigationOptions:{
    headerShown: false,
  },
  
});
export default createAppContainer(navigator)
