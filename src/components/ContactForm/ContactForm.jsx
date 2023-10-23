import React, { useState } from 'react';
import {nanoid} from 'nanoid'
import { FormWrap, Form, Text, Input, Button} from './ContactForm.styled'

const ContactForm = ({onAddContact}) => {
  
const [dataForm, setDataForm] = useState({
    name: '',
    number: '',
  })
  const handleInputChange = evt => {
    
    setDataForm({
      ...dataForm,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
      evt.preventDefault();
      const { name, number} = dataForm;

      const newContact = {
        id: nanoid(),
        name: name,
        number: number,
    
      }

      onAddContact(newContact)

      setDataForm({
        name: '',
        number: '',
      });
  
  };

 
 
    return (
      <FormWrap>
        <Form onSubmit={handleSubmit}>
          <label>
            <Text>Name</Text>
            <Input
              onChange={handleInputChange}
              type="text"
              placeholder="Enter name"
  
              name="name"
              value={dataForm.name}
              required
            />
          </label>
          <label>
            <Text>Number</Text>
            <Input
              onChange={handleInputChange}
              type="tel"
              placeholder="Enter number"
              
              name="number"
              value={dataForm.number}
              required
            />
          </label>

          <Button type="submit">Add contact</Button>
        </Form>
      </FormWrap>
    );

}

export default ContactForm