import react from 'react'
import { connect } from 'react-redux';
import {set_data,fb_login,hardCode} from '../store/action'


class Home extends react.Component{
    render(){
        console.log('propsHome=>>',this.props)
       let user = {name:'hamza',ph:'786'}
        
        return(
            <div>
                <h1>HOME123</h1>
                <button onClick={()=>this.props.set_data(user)}>check Function</button>
                <button onClick={()=>this.props.fb_login(this.props.history)}>FB login</button>
                <button onClick={()=>console.log(this.props)}>check props home c</button>
                <button onClick={()=>this.props.hd_login(this.props.history)}>Hardcoded login</button>

            </div>
        )
    }
    

}
const mapStateToProps = (state) => ({ 
  
   
  
})
const mapDispatchToProps = (dispatch) => ({
    set_data : (data) =>  dispatch(set_data(data)),
    fb_login : (history)=> dispatch(fb_login(history)),
    hd_login : (history)=> dispatch(hardCode(history)),
})
export default connect(mapStateToProps,mapDispatchToProps) (Home);