import { useState, useRef } from 'react';
import { useCreateContactMutation } from '../redux/contacts/contactSlice';
import shortid from 'shortid';
import { LoaderSpinner } from './Spinner';
import { toast } from 'react-hot-toast';
import css from './phonebook-CSS/ContactForm.module.css';

export default function ContactForm({ contacts }) {
  // const dispatch = useDispatch();
  // const contacts = useSelector(contactsSelectors.getContacts);
  // const isLoading = useSelector(contactsSelectors.getLoading);

  const [createContact, { isLoading }] = useCreateContactMutation();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const nameId = useRef(shortid.generate());
  const phoneId = useRef(shortid.generate());

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;

      case 'phone':
        setPhone(e.target.value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const toastStyle = {
      style: {
        borderRadius: '10px',
        background: '#e8f2f2',
        color: '#000',
      },
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      toast(`'${name}' is already in contacts`, toastStyle);
      return;
    }

    if (contacts.find(contact => contact.phone === phone)) {
      toast(`'${phone}' is already in contacts`, toastStyle);
      return;
    }

    createContact({ name, phone });
    toast.success(`New contact '${name}' is added`);

    setName('');
    setPhone('');
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label} htmlFor={nameId.current}>
          Name
          <input
            className={css.inputName}
            type="text"
            name="name"
            value={name}
            id={nameId.current}
            onChange={handleChange}
            placeholder=" John Smith"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
          />
        </label>
        <label className={css.label} htmlFor={phoneId.current}>
          Phone
          <input
            className={css.inputNumber}
            type="tel"
            name="phone"
            value={phone}
            onChange={handleChange}
            placeholder=" 111-11-11"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            required
          />
        </label>
        {!isLoading && (
          <button className={css.button} type="submit">
            {isLoading ? <LoaderSpinner /> : 'Add contact'}
          </button>
        )}
      </form>
    </>
  );
}
