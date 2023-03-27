import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { Div, FirstTitle, Title } from 'components/App.styled';
import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(preprops, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (name, number) => {
    const duplicateName = this.state.contacts.find(
      contact =>
        [...contact.name]
          .sort((a, b) => a.localeCompare(b))
          .join('')
          .toLowerCase() ===
        [...name]
          .sort((a, b) => a.localeCompare(b))
          .join('')
          .toLowerCase()
    );
    if (duplicateName) {
      return alert(`${name} is already in contacts`);
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => {
      return {
        contacts: [newContact, ...contacts],
      };
    });
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  filterContacs = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filterElements = this.filterContacs();
    return (
      <Div>
        <FirstTitle>Phonebook</FirstTitle>
        <ContactForm onAddContact={this.addContact} />
        <Title>Contacts</Title>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          onDeleteContact={this.deleteContact}
          onFilterContacs={filterElements}
        />
      </Div>
    );
  }
}
