import React from "react";

const UserCard = (props) => {
  return (
    <>
      <div className="container">
        <div className="cards-grid">
          {props.user.map((user) => (
            <div key={user.id} className="cards">
              <div>
                <img src={user.avatar} alt="User" />
                <p>
                  Name : {user.first_name} {user.last_name}
                </p>
                <p>E mail : {user.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserCard;
