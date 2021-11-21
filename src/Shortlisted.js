import Header from "./Header";
import React from 'react';
import './Shortlisted.css';
import {Link} from 'react-router-dom';
import verifiedImage from './check.png';
import online from './online.png';
import { shortlistedUsers } from './data';

function Shortlisted(){

    const showShortlisted = () =>{

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

        if(shortlistedUsers.length){
            return (
                <>
                {
                    shortlistedUsers.map((user) =>{
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
                    <h1>You haven't shortlisted anyone yet!!!</h1>
                    <Link to="/"><button>Go Back</button></Link>
                </div>
            )
        }
    }

    return(
        <>
        <Header/>
        <div className="hero">
                <h3>Shortlisted Users</h3>
            </div>
        <div className="shortlisted">
        { showShortlisted() }
        </div>
        
        </>
    );
}

export default Shortlisted;