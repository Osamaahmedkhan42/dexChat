import react from 'react'
//import Home from './containers/Home'
import AppRouter from './config/router'
import { connect } from 'react-redux';




class App extends react.Component{
    render(){
       // console.log('AppProp=>',this.props)
        return(
            <div>
                
                
                <AppRouter />
            </div>
        )
    }
    

}
const mapStateToProps = (state) => ({ 
    
   // f: state.users
   
 })
export default connect(mapStateToProps,null) (App);