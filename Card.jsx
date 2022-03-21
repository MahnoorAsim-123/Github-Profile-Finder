import React from "react";
import "../App.css"


const Card = ({ avatar_url, name, followers, following, public_repos ,login }) => {
  return (
    <>
       <div className="card zoomIn">

<div className="avatorImg">
    <img src={avatar_url} alt="avator" width="100%" height="100%"/>
</div>

<div className="detail">

    <div className="userName">
    <br />
        <h1 className="user userName1">{login}</h1>
        <br />
        <h1 className="user userName2">{name}</h1>
        
    </div>

    <div className="userDetail">

        <div className="userDetail1">
            {/* <h1>Type</h1> */}
            <h1>Followers</h1>
            <h1>Following</h1>
            <h1>Repo</h1>
            {/* <h1>Location</h1> */}
        </div>

        <div className="userDetail2">
            {/* <h1>User</h1> */}
            <h1>{followers}</h1>
            <h1>{following}</h1>
            <h1>{public_repos}</h1>
            {/* <h1>Pakistan</h1> */}
        </div>

    </div>

</div>



</div>
    </>
  );
};

export default Card;