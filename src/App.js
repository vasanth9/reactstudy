import Header from './components/Header';
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg"
import ModelS from "./assets/Desktop-ModelS.jpeg"
import Model3 from "./assets/Desktop-Model3.jpeg"
import ModelX from "./assets/Desktop-ModelX.jpeg"
import ModelY from "./assets/Desktop-ModelY.jpeg"
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg"
import Accessories from "./assets/Desktop-Accessories.jpg"
import Item from "./components/Item"
import './App.css'
function App()
{
    return(
        <div className="App">
            <Header/>
            <div className="app_itemContainer">
                <Item 
                  title="Lowest Cost Solar Panels in America"
                  desc="Money-bacck guarantee"
                  descLink=""
                  backgroundImg={SolarPanels}
                  leftBtnTxt="ORDER NOW"
                  leftBtnLink=""
                  rightBtnTxt="LEARN MORE"
                  rightBtnLink=""
                  twoButtons="true"
                  first

                />
                <Item 
                  title="Model S"
                  desc="$669,420"
                  descLink=""
                  backgroundImg={ModelS}
                  leftBtnTxt="CUSTOM ORDER"
                  leftBtnLink=""
                  rightBtnTxt="LEARN MORE"
                  rightBtnLink=""
                  twoButtons="true"
                />
                <Item 
                  title="Model 3"
                  desc="Money-back guarantee"
                  descLink=""
                  backgroundImg={Model3}
                  leftBtnTxt="CUSTOM ORDER"
                  leftBtnLink=""
                  rightBtnTxt="LEARN MORE"
                  rightBtnLink=""
                  twoButtons="true"
                />
                <Item 
                  title="Model X"
                  desc="Money-back guarantee"
                  descLink=""
                  backgroundImg={ModelX}
                  leftBtnTxt="CUSTOM ORDER"
                  leftBtnLink=""
                  rightBtnTxt="LEARN MORE"
                  rightBtnLink=""
                  twoButtons="true"
                />
                <Item 
                  title="Model Y"
                  desc="Money-back guarantee"
                  descLink=""
                  backgroundImg={ModelY}
                  leftBtnTxt="CUSTOM ORDER"
                  leftBtnLink=""
                  rightBtnTxt="LEARN MORE"
                  rightBtnLink=""
                  twoButtons="true"
                />
                <Item 
                  title="Solar for New Roofs"
                  desc="Money-bacck guarantee"
                  descLink=""
                  backgroundImg={SolarRoof}
                  leftBtnTxt="CUSTOM ORDER"
                  leftBtnLink=""
                  rightBtnTxt="LEARN MORE"
                  rightBtnLink=""
                  twoButtons="true"
                />
                <Item 
                  title="Accessories"
                  desc="Money-bacck guarantee"
                  descLink=""
                  backgroundImg={Accessories}
                  leftBtnTxt="SHOP NOW"
                  leftBtnLink=""
                  rightBtnTxt="LEARN MORE"
                  rightBtnLink=""
                  twoButtons="true"
                />
            </div>
        </div>
    )
}
export default App;