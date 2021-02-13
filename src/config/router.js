import React from 'react';
import Home from '../containers/Home'
import Chat from '../containers/Chat'
import {
  BrowserRouter as Router,
  
  Route,
  
} from "react-router-dom";

class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path='/' component={Home} />
                <Route exact path='/chat' component={Chat} />
            </Router>
        )
    }
    
    

}
export default AppRouter;