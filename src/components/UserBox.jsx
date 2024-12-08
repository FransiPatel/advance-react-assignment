import React from "react";

function UserBox({ user, onLikeClick, onRemoveClick, onEditClick }) {
  return (
    <div className="user-box">
      <div className="avatar">
        <img
          src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${user.username}`}
          alt={`${user.username}'s avatar`}
        />
      </div>
      <div className="details">
        <h3 className="name">{user.name}</h3>
        <p>
          <i className="fas fa-envelope"></i> {user.email}
        </p>
        <p>
        <i class="fas fa-phone-flip"></i> {user.phone}
        </p>
        <p>
          <i className="fas fa-globe"></i> {user.website}
        </p>
      </div>
      <div className="actions">
        <button className="like-btn" onClick={() => onLikeClick(user.id)}>
          {/* <i className="far fa-heart"></i> */}
          <i
            className={`fa-heart ${user.liked ? "fas" : "far"}`}
            
          ></i>
        </button>
        <button className="edit-btn" onClick={() => onEditClick(user)}>
          <i className="fas fa-edit"></i>
        </button>
        <button className="delete-btn" onClick={() => onRemoveClick(user.id)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default UserBox;
