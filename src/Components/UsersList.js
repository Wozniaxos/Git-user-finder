import React, {Component} from 'react';
import User from './User.js'
import axios from 'axios'
import './UsersList.css'

const myApi = axios.create({
baseURL: 'https://api.github.com/search',                   
});

export default class UsersList extends Component {
    
    getIdOfActiveDiv(id){
        this.setState({
            activeUser: id
        })
    }     
    
    
    switchUser(event){
        
           
    for(var i = 1 ; i <= this.state.Users.length ; i++){
        var currentUser = document.getElementById(i);
        currentUser.className="UnactiveUser"
    }
        
     if(event.keyCode==40){
       document.getElementById(this.state.activeUser+1).className = "ActiveUser"
         
         
     }
     else if(event.keyCode==38){
         console.log("saddas");
         
     }
     
 }
    
    
    componentDidMount(){
        let updateUsers;
        console.log(this.props.keyboardCode)
    }
    

    
    componentDidUpdate(nextProps){
     
        console.log(this.props.keyboardCode)

        if(this.props.filter!=nextProps.filter){
            
            if(this.props.filter==""){
                this.setState({
                    Users: [],
                })
                return;
            }
            
            
            clearTimeout(this.updateUsers);
            
            this.updateUsers = setTimeout(()=>{
                  
                        
                         let filter = "users?q="+this.props.filter+"in:login";
                         let counter = 0;
                         myApi.get(filter)
                            .then(res => this.setState({
                            Users: res.data.items.slice(0, 5).map((user)=>{
                                                                counter++;
                                                                user.count = counter;
                                                                return user;
                                                                })
                        }))
                        .catch(err => console.log(err))}, 500
            )
            
        }
    }
    
    constructor(props){
        
        super(props);
        
        this.state={
            Users: [],
            filter: this.props.filter,
            UsersSize: 0,
            activeUser: ""
        }
    }
    
    
    render(){
        return(
            <div className="UsersList">
                {this.state.Users.map((user)=>
                    {return <User ref="user" user={user} key={user.id} UsersSize={this.state.Users.length} giveIdOfActiveDiv={this.getIdOfActiveDiv.bind(this)} />
                    })
                }
            </div>       
        )
    }
    
}