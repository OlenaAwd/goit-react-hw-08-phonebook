import css from './phonebook-CSS/FilterForm.module.css';

export default function Filter({ value, onChange }) {
  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter contact's name"
      />
    </label>
  );
}
