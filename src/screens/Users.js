import React from "react";
import {Button} from "react-bootstrap";
import "./Users.scss";
import UsersList from "../components/UsersList";
import Inputbox from "../components/Inputbox";


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

              <Button variant="light" className="btn__users__panel">Plus Membership</Button>
              <Button variant="light" className="btn__users__panel">Identity Documents</Button>
              <Button variant="light" className="btn__users__panel">Referrals</Button>

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
