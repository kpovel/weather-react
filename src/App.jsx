import "./App.css";
import {SearchForm} from "./components/searchForm";
import {MainDisplay} from "./components/mainDisplay";
import {useState} from "react";

function App() {
    const [location, setLocation] = useState("");
    
    function saveLocationName(e) {
        setLocation(e);
    }
    
    function handleSubmit() {
    //    todo: weather request from the server
    }
    
    return (
        <div>
            <main className="main">
                <div className="container">
                    <SearchForm onHandleChange={saveLocationName}
                                value={location}
                                onHandleSubmit={handleSubmit}/>
                    <MainDisplay/>
                </div>
            </main>
            
            <template id="city-item">
                <li className="city-list__item">
                    <div className="city"></div>
                    <button className="city-list__close-btn"/>
                </li>
            </template>
        </div>
    );
}

export default App;
