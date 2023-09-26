import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';


import Navbar from "./components/navbar/Navbar";
import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Online from "./components/pages/online/Online";
import Offline from "./components/pages/offline/Offline";
import Contact from "./components/pages/contact/Contact";
function App() {
    return (
        <div>
            <Router basename="/">

                {/* Add Menu Component */}
                <Navbar />

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/About" component={About}/>
                    <Route path="/Online" component={Online}/>
                    <Route path="/Offline" component={Offline}/>
                    <Route path="/Contact" component={Contact}/>


                </Switch>
            </Router>

        </div>
    );
}

export default App;
