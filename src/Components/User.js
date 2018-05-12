import React, {Component} from 'react'
import './User.css'

class User extends Component{
    
    constructor(){
        super();
        this.state={
            classNameForUser: "UnactiveUser",
        }
    }
     
    makeDivActive(event){
        
        this.setState({
            classNameForUser: "ActiveUser",
        })
        this.props.giveIdOfActiveDiv(event.currentTarget.id);
    }
    
    makeDivUnactive(event){
        
        this.setState({
            classNameForUser: "UnactiveUser",
        })
    }
    
    goToNextUser(){
        let activeDiv = this.props.user.idOfActiveDiv;
        if(activeDiv<this.props.user.UsersSize&&activeDiv!=null){
            this.props.user.direction == "up" ? console.log("up") : console.log("down")
        }
    }
    
    render(){
               
        return(   
            <div className = {this.state.classNameForUser} id={this.props.user.count} onMouseOver = {this.makeDivActive.bind(this)} onMouseLeave = {this.makeDivUnactive.bind(this)}>
                <a href={this.props.user.html_url} target="blank">
                <img className = "avatar" src={this.props.user.avatar_url}/>
                {this.props.user.login}
                </a>
            </div>
        )
    }
}

export default User;