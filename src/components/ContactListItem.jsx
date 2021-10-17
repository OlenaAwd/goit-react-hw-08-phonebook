import { useDeleteContactMutation } from '../redux/contacts/contactSlice';
import { LoaderSpinner } from './Spinner';
import toast from 'react-hot-toast';
import css from './phonebook-CSS/ContactListItem.module.css';

export function ContactListItem({ id, name, phone }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <li key={id} className={css.listItem}>
      <div>
        <span>{name}: </span>
        <span>{phone}</span>
      </div>
      <button
        className={css.buttonDel}
        onClick={() => {
          deleteContact(id);
          toast.success(`Contact '${name}' deleted`);
        }}
        disabled={isLoading}
      >
        {isLoading && <LoaderSpinner />}
        Delete
      </button>
    </li>
  );
}
