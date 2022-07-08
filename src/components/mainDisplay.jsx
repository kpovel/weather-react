import MainTab from "./pages/mainTab";
import DetailsTab from "./pages/detailsTab";
import ForecastTab from "./pages/forecastTab";
import Navbar from "./navbar";
import {AddedLocation} from "./addedLocation";
import {Route, Routes} from "react-router-dom";


export {MainDisplay};

function MainDisplay() {
   
    return (
        <div className="main-box">
            <div className="main-box__left">
                <div className="main-tabs__body">
                    <Routes>
                        <Route path="/main" element={<MainTab/>}/>
                        <Route path="/details" element={<DetailsTab/>}/>
                        <Route path="/forecast" element={<ForecastTab/>}/>
                    </Routes>
                    
                    {/*{activeTab}*/}
                </div>
                <Navbar />
            </div>
            <div className="main-box__right">
                <AddedLocation/>
            </div>
        </div>
    );
}
