var shortlistedUsers = [];
var rejectedUsers = [];
var shortlistedId = [];
var rejectedId = [];

function Data(user,shortlisted,rejected){
    if(shortlisted){
        shortlistedUsers.push(user);
        shortlistedId.push(user.id);
    }else{
        rejectedUsers.push(user);
        rejectedId.push(user.id);
    }

}

export default Data;
export {shortlistedUsers};
export {rejectedUsers};
export {shortlistedId};
export {rejectedId};
