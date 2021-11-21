import Header from "./Header";
import React from 'react';
import './Rejected.css';
import {Link} from 'react-router-dom';
import { rejectedUsers } from './data';
import verifiedImage from './check.png';
import online from './online.png';

function Rejected(){

    
    const checkVerified = (user)=>{
        if(user.id === '1003' || user.id === '1005' || user.id === '1007'){
            return <img src={verifiedImage} alt="verifiedImage"  id="verified"/>;
        }else{
            return "";
        }
    }

    const checkOnline = (user)=>{
        if( user.id === '1001' || user.id === '1003' || user.id === '1005' || user.id === '1008' || user.id === '1007'){
            return  <img src={ online } alt="online" id="online" />

        }else{
            return "";
        }
    }

    const showRejected = () =>{

        if(rejectedUsers.length){
            return (
                <>
                    {
                        rejectedUsers.map((user) =>{
                            return(
                                <div className="profile" key={user.id}>
                        <img src={ user.Image } alt="userImage"/>
                        <div className="info">
                            <div className="dp">
                                <div className="dpOnline">
                                    <img src={ user.Image } alt="userImage" id="mainDp"/>
                                    { checkOnline(user) }
                                </div>
                                <div className="infoProfile">
                                    <div className="nameVerified">
                                        <Link to={ "/" + user.id } className="names"><p>{ user.name }</p></Link>
                                        { checkVerified(user) }
                                        
                                    </div>
                                    <p className="descp descp1">Short desption</p>
                                    <p className="descp descp2">Short desption</p>
                                    <p className="descp descp3">Short desption</p>
                                </div>
                            </div>
                        </div>
                    </div>
                            )
                        })
                    }
                </>
            )
        } else{
            return (
                <div className="error">
                    <h1>You haven't rejected anyone yet!!!</h1>
                    <Link to="/"><button>Go Back</button></Link>
                </div>
            )
        }
    }

    return(
        <>
        <Header/>
        <div className="hero">
                <h3>Rejected Users</h3>
            </div>
        <div className="rejected">
        { showRejected() }
        </div>
        
        </>
    );
}

export default Rejected;