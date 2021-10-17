import { ContactListItem } from './ContactListItem';
import css from './phonebook-CSS/ContactList.module.css';

export default function ContactList({ contacts }) {
  contacts.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, phone }) => (
        <ContactListItem key={id} name={name} phone={phone} />
      ))}
    </ul>
  );
}
