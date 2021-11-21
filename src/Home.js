import React from 'react';
import Header from "./Header";
import axios from 'axios';
import './Home.css';
import {Link} from 'react-router-dom';
import verifiedImage from './check.png';
import online from './online.png';

class Home extends React.Component{

    constructor() {
        super()
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        //console.log('Home called');
        axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json')
            .then((results) => {
                this.setState({ users: results.data })
             }
            )
            .catch(err => console.log(err))
    }

    render(){

    function checkVerified(user){
        if(user.id === '1003' || user.id === '1005' || user.id === '1007'){
            return <img src={verifiedImage} alt="verifiedImage" id="verified"/>;
        }else{
            return "";
        }
    }

    function checkOnline(user){
        if( user.id === '1001' || user.id === '1003' || user.id === '1005' || user.id === '1008' || user.id === '1007'){
            return  <img src={ online } alt="online" id="online" />

        }else{
            return "";
        }
    }

    const handleSearch = (e) =>{
        var input, filter, users, userNames, i, txtValue, profiles, noneDisplay = 0;
        input = document.getElementById("search");
        filter = input.value.toUpperCase();
        users = document.getElementById("users");
        userNames = users.getElementsByClassName("usernames");
        profiles = document.getElementsByClassName("profileDiv");
        
        for (i = 0; i < userNames.length; i++) {
          if (userNames[i]) {
            txtValue = userNames[i].textContent || userNames[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              profiles[i].style.display = "";
            } else {
              profiles[i].style.display = "none";
              noneDisplay += 1;
            }
          }       
        }

        const noSearchUser = document.getElementById("noSearchUser");

        if(noneDisplay === this.state.users.length){
            noSearchUser.style.display = "block";
        } else{
            noSearchUser.style.display = "none";
        }

      }

    //const usersPresent = !(this.state.users.length === 0);

    return(
        <React.Fragment>
            <Header/>
            <div className="hero">
                <h1>Welcome to Job Board</h1>
                <h2>Hire professional developers from around the world</h2>
            </div>

            <div className="searchBox">
                <input placeholder="search" onChange={handleSearch} id="search" />
            </div>
            <div className="users" id="users">

                {
                
                    this.state.users.map((user)=>{
                        return(
                                <div key={ user.id } className="profileDiv">
                                    <div className="profile">
                                        <img src={ user.Image } alt="userImage"/>
                                        <div className="info">
                                            <div className="dp">
                                                <div className="dpOnline">
                                                    <Link to={ "/" + user.id } className="names"><img src={ user.Image } alt="userImage" id="mainDp"/></Link>
                                                    { checkOnline(user) }
                                                </div>
                                                <div className="infoProfile">
                                                    <div className="nameVerified">
                                                        <Link to={ "/" + user.id } className="names"><p className="usernames">{ user.name }</p></Link>
                                                        { checkVerified(user) }
                                                        
                                                    </div>
                                                    <p className="descp descp1">Short desption</p>
                                                    <p className="descp descp2">Short desption</p>
                                                    <p className="descp descp3">Short desption</p>
                                                </div>
                                            </div>
                                            <Link to={ "/" + user.id } className="names"><button>View</button></Link>
                                        </div>
                                    </div>
                                </div>
                            
                            
                        )
                    })
                }
                <h4 id="noSearchUser">There are no users with this name</h4>
            </div>
            <div className="clearfix"></div>
        </React.Fragment>
    );
    }
}

export default Home;