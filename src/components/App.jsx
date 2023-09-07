import { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";


export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  formSubmit = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.state.contacts.find(i => {
      return i.name.toLowerCase() === contact.name.toLowerCase() || i.number === contact.number ?
        alert(`${name} is already in contacts`) :
        this.setState((prev) => ({
          contacts: [contact, ...prev.contacts],
        }));
    })
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        {/* <Filter />
  <ContactList /> */}
      </div>
    );
  }
  
};
