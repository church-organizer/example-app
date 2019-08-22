import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Wiki from "./wiki/Wiki";
import Login from "./components/Login/Login";
import SideNav, {SideNavItem} from "./components/Nav/SideNav";
import SaveIcon from "@material-ui/core/SvgIcon/SvgIcon";


class App extends Component {
    state = {
        login: {isLoggedIn: true, username: 'Dieter'}
    };

    render() {
        return (
            <Router>
                <div className="App" style={{position: "fixed", width: "100%"}}>
                    <SideNav/>
                    {!this.state.login.isLoggedIn ? <Login onLogin={this}/> : (
                        <div className="content">
                            <Route path="/" component={Wiki}/>
                        </div>)
                    }
                </div>
            </Router>
        );
    }
}

export default App;
