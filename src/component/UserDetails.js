import React from "react";

const UserDetails = (props) => {
  // let user = props.user;
  let { user } = props;
  return (
    <div>
      <h3>{user.name}</h3>
      <h5>
        Email: {user.email}
        <br></br>
        Phone: {user.phone}
      </h5>
    </div>
  );
};
export default UserDetails;
