import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../store/actions/getProfile";
import Card from "./Card";
import UserNotFound from "./UserNotFound";

const UserCard = ({ input }) => {
  const { userData, userDataLoading, userDataError } = useSelector(
    (state) => state.getProfileReducer
  );
// console.log(userData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile(input));
  }, [input]);


  return (
    <div>
      {userDataLoading ? (
        <h1 style={{textAlign:"center" , color:"white" , marginTop:"60px"}}>loading......</h1>
      ) : userDataError ? (
        <UserNotFound />
      ) : (
        <Card
          avatar_url={userData.avatar_url}
          name={userData.name}
          followers={userData.followers}
          following={userData.following}
          public_repos={userData.public_repos}
          login={userData.login}

        />
      )}
    </div>
  );
};

export default UserCard;