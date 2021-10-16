import React, { Component } from "react";

export default class LocalStorage extends Component {
  state = {
    contacts: this.props,
    addContactInLocal: this.addContactInLocal.bind(this),
    updateLocal: this.UpdateLocal.bind(this),
  };

  addContactInLocal() {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }
  UpdateLocal() {
    localStorage.getItem("contacts");
  }
}
