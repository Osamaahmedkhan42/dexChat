import React from 'react'
import { connect } from 'react-redux';
import { adding_Dummy, get_user } from '../store/action'
import firebase from '../config/firebase'

class Chat extends React.Component {

    constructor() {
        super()
        this.state = {
            chat_user: {},
            chat: [],
            message: []
        }
    }

    chat = (user) => {
        this.setState({
            chat_user: user
        })

        let cu_user= this.props.current_user
        let chat_user = this.state.chat_user

        let merged_uid = this.uid_merge(cu_user.uid,user.uid);
        console.log('hammad',user.uid)
        console.log('osama',cu_user.uid)
        console.log('uid___WARS',cu_user.uid)
        console.log('merged_uid>>>',merged_uid)

        this.get_messages(merged_uid)

    }

    uid_merge =(id1,id2)=>{
        if (id1<id2) {
            return id1+id2
        }
        else 
         return id2+id1
    }

    send_message=()=>{
       

        let user= this.props.current_user
        let chat_user = this.state.chat_user

        let merged_uid = this.uid_merge(user.uid,chat_user.uid);
        
        firebase.database().ref('/').child(`chat/${merged_uid}`).push({
            message :this.state.message,
            name :user.name,
            uid:user.uid
        })



        // this.state.chat.push({
        //     message : this.state.message
        // })

        // this.setState({
        //     chats: this.state.chats,
        //     message : ''
        // })

    }

    get_messages=(uid)=>{
        firebase.database().ref('/').child(`chat/${uid}`).on('child_added',(message)=>{
            this.state.chat.push(message.val())
            this.setState({
                chat:this.state.chat,
                message : ''
            })
        })
    }

    componentDidMount() {

        this.props.get_user()
        this.props.get_user()

    }

    render() {


        console.log('propsChat=>', this.props.users)
        let user = this.props.current_user

        console.log('thistaet==>s', this.state)
        console.log('asdCU',this.props.current_user)

        return (
            <div>
               

                <h1>WELCOME ! {user.name}</h1>
                <img src={user.profile} alt='img' />
                <h2>Email: {user.email}</h2>
                <button onClick={() => this.props.dum_data()}>adding dummy</button>
                <button onClick={() => console.log(this.props)}>PRops</button>
                <button onClick={() => this.props.get_user()}>get user</button>
                {/* <button onClick={(e)=>console.log(e.target.value)}>button</button> */}

                <div style={{ display: "flex" }}>
                    <div style={{ backgroundColor: "red" }}>
                        <h4>Chat users</h4>
                        <ul>
                            {this.props.users.map((v, i) => {
                                return v.uid !== user.uid && <li  key={i}>{v.name} <button onClick={() => this.chat(v)} >CHAT</button></li>
                            })}
                        </ul>
                    </div>

                    <div style={{ width: 400, backgroundColor: "yellow" }}>
                        <h4>CHAT</h4>
                        {Object.keys(this.state.chat_user).length ?
                            <div>

                                
                                <h4>{this.state.chat_user.name}</h4>
                                <ul>
                                {this.state.chat.map((v,i)=>{
                                    return <li  style={{color : v.uid === user.uid ? 'red' :'green'}}key={i}>{v.message}</li>
                                })}

                                <input value={this.state.message} onChange={(e)=>{this.setState({message:e.target.value})}}  type="text" placeholder="Enter here" />
                                <button onClick={()=>this.send_message()}>Send </button>
                                </ul>
                            </div>
                            :
                            <div>
                                NO USER
                        </div>}



                    </div>
                </div>

            </div>
        )
    }


}

const mapStateToProps = (state) => ({

    current_user: state.current_user,
    users: state.users


})
const mapDispatchToProps = (dispatch) => ({
    dum_data: () => dispatch(adding_Dummy()),
    get_user: () => dispatch(get_user()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Chat);