import Header from "./Header";
import React, {useEffect,useState,} from 'react';
import './User.css';
import {  Link, useParams, useNavigate } from 'react-router-dom';
import axios from "axios";
import verifiedImage from './check.png';
import online from './online.png';
import './Home.css';
import data, {  shortlistedId, rejectedId} from './data';


function User(){


        const [users, setUsers] = useState([]);
        const [rejected, setRejected] = useState(true);
        const [shortlist, setShortlisted] = useState(true);
        const navigate = useNavigate();

        const { id } = useParams();

        useEffect(() => {
            //console.log('called');
            axios.get('https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json')
                .then( results => setUsers(results.data) )
                .catch( err => console.log(err) )
            //console.log(shortlistedUsers,rejectedUsers)

            }, [id]);

            var user = false;
            //console.log(users,typeof id);
            users.map((userIdx)=>{
                if(userIdx.id === id){
                    user = userIdx;
                }
                return (<></>);
            })

        const checkVerified = (user)=>{
            if(user.id === '1003' || user.id === '1005' || user.id === '1007'){
                return <img src={verifiedImage} alt="verifiedImage" id="verified"/>;
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

        const handleReject = (e) =>{
            e.preventDefault();
            //console.log('rejected');
            setRejected(!rejected);
            data(user,false,true);
            setTimeout(
                function(){
                    navigate('/');
                }, 500);
            
        }

        const handleShortlist = (e) =>{
            e.preventDefault();
            //console.log('selected');
            setShortlisted(!shortlist);
            data(user,true,false);
            setTimeout(
                function(){
                    navigate('/');
                }, 500);
        }

        const bothButtons = () =>{
            return(
                <>
                    <p  ><button id="reject" onClick={handleReject}>Reject</button></p>
                    <p  ><button id="shortlist" onClick={handleShortlist}>Shortlist</button></p>
                </>
            )
        }

        const checkRejectButton = () =>{
            if(rejected && !rejectedId.includes(user.id)){
                return (
                    <p  ><button id="reject" onClick={handleReject}>Reject</button></p>
                );
            } else{
                return (
                    <p  ><button id="selected" >Rejected</button></p>
                )
            }
        }

        const checkShortlistButton = () =>{
            if(shortlist && !shortlistedId.includes(user.id)){
                return (
                    <p  ><button id="shortlist" onClick={handleShortlist}>Shortlist</button></p>
                );
            } else{
                return (
                    <p  ><button id="selected" >Shorlisted</button></p>
                )
            }
        }


        const checkForSelected = () =>{
            if(shortlist === false || shortlistedId.includes(user.id)){
                return checkShortlistButton();
            }else if(rejected === false || rejectedId.includes(user.id)){
                return checkRejectButton();
            }else{
                //console.log('both')
                return bothButtons();
            }
        }


        const checkId = () =>{
            if(user!==false){
                //console.log(true)
                return (

                    <div>
                    <div className="profile">
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
                            <div className="linksTo">
                                { checkForSelected() }
                            </div>
                        </div>
                    </div>
                </div>


                )
            } else{
                //console.log(false)
                return (
                    <div className="error">
                        <h1>404 Error<br/>Page Not Found!!!</h1>
                        <Link to="/"><button>Go Back</button></Link>
                    </div>
                );
            }
        }

        return(
            <>
            <Header/>
            <div className="userPage">
                { checkId() }
            </div>
            </>
        );
    

}

export default User;