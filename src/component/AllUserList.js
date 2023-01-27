import React from "react";
import UserDetails from "./UserDetails";

const AllUserList = () => {
  let Allusers = [
    {
      name: "vaibhav",
      email: "vaibhavkhandelwal2002@gmail.com",
      phone: "7073817488",
    },
    {
      name: "kartik",
      email: "kartik@.com",
    },
  ];

  //   Or we can do
  //   let array = [
  //     <UserDetails user={Allusers[0]}></UserDetails>,
  //     <UserDetails user={Allusers[1]}></UserDetails>,
  //   ];
  return (
    <div>
      {/* <UserDetails user={Allusers[0]}></UserDetails>
      <UserDetails user={Allusers[1]}></UserDetails> */}

      {/* {array} */}

      {/* .map funtion() */}

      {Allusers.map((user, index) => (
        <UserDetails key={index} user={user}></UserDetails>
      ))}
    </div>
  );
};
export default AllUserList;
