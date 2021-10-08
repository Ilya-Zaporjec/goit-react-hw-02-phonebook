import React, { Component } from "react";
import Section from "./Components/Section";
import Form from "./Components/Form";
import ContactsList from "./Components/Contacts/ContactsList";
import ContactFilter from "./Components/Contacts/ContactsFilter";

const shortid = require("shortid");

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  changeFilter = (event) => {
    this.setState({ filter: event.target.value });
  };

  renderSearch = () => {
    const { filter, contacts } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  createObjectContact = ({ text, number }) => {
    const { contacts } = this.state;
    const filterName = contacts.map((contact) => contact.name);

    if (filterName.includes(text)) {
      alert(text + " is already in Contacts");
    } else {
      const newObj = {
        id: shortid(),
        name: text,
        number: number,
      };

      this.setState((prevState) => {
        return {
          contacts: [...prevState.contacts, newObj],
        };
      });
    }
  };

  onRemoveItem = (itemId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(
          (contact) => contact.id.indexOf(itemId) === -1
        ),
      };
    });
  };
  render() {
    const { filter } = this.state;
    const drawSearch = this.renderSearch();
    return (
      <>
        <Section title="Phonebook">
          <Form onAddText={this.createObjectContact} />
        </Section>

        <Section title="Contacts">
          <ContactFilter onChangeFilter={this.changeFilter} value={filter} />

          <ContactsList contacts={drawSearch} onDelete={this.onRemoveItem} />
        </Section>
      </>
    );
  }
}
