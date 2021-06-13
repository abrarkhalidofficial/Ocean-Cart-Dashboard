import React from "react";
import "./Users.scss";
import UsersList from "../components/UsersList";
import Inputbox from "../components/Inputbox";
import Button from "../components/Button";

export default class Users extends React.Component {
  render() {
    return (
      <div>
          <div className="users__panel__container">
          <div className="users__panel__heading">Users</div>
          <div className="users__panel__top__input__boxes">
              <Inputbox placeholder="Mobile Number" type="text" ClassName="users__panel__input__boxes"/>
              <Inputbox placeholder="Email Address" type="text" ClassName="users__panel__input__boxes"/>
              <Inputbox placeholder="First Name / Last name" type="text" ClassName="users__panel__input__boxes"/>

              <Button placeholder="Plus Membership" variant="link" className="btn__cta" />
              <Button placeholder="Identity Documents" variant="link"  className="btn__cta" />
              <Button placeholder="Referrals" variant="link"   className="btn__cta" />
          </div>
          <div className="users__panel__top__users__headings">
              <div className="users__panel__top__heading">Users</div>
              <div className="users__panel__top__heading">Email Address</div>
              <div className="users__panel__top__heading">Phone</div>
              <div className="users__panel__top__heading">Address</div>
          </div>
          <UsersList />
          <UsersList />
          <UsersList />
          <UsersList />
          <UsersList />
          <UsersList />
          <UsersList />
          <UsersList />
          <UsersList />
          <UsersList />
          </div>
      </div>
    );
  }
}
