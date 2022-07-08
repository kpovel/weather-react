import "./App.css";
import {SearchForm} from "./components/searchForm";
import {MainDisplay} from "./components/mainDisplay";

function App() {
    return (
        <div>
            <main className="main">
                <div className="container">
                    <SearchForm/>
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
