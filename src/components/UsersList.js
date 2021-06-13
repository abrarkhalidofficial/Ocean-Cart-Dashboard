import React from 'react';
import UserListPic from "../assets/UI-Containers-User.png";

export default function UsersList() {
    return (
        <div>
            <div className="users__list__main__container">
                <div className="users__list__container">
                    <img src={UserListPic}  />
                    <div className="user__list">User Name</div>
                </div>
                <div className="users__list">johndoe@gmail.com</div>
                <div className="users__list">+922342424242424</div>
                <div className="users__list">3118  Drainer Avenue, Blountstown</div>
            </div>
        </div>
    )
}
