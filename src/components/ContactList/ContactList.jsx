import React from 'react';
import {ContactItem, ContactName, ContactNumber, DeleteBtn} from './ContactList.styled'

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  console.log(contacts);
  console.log(filter);
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
  
    <ul>
      {filteredContacts.map(({id, name, number}) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={onDeleteContact}
        />
      ))}
    </ul>

)}

const ContactListItem = ({ id, name, number, deleteContact}) => (
  
    <ContactItem>
      <ContactName>{name}</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <DeleteBtn onClick={() => deleteContact(id)}>Delete</DeleteBtn>
    </ContactItem>
  
)
 export default ContactList