import Loader from 'react-loader-spinner';

import css from './phonebook-CSS/Spinner.module.css';

export const LoaderSpinner = () => {
  return (
    <div className={css.wrap}>
      <Loader
        type="Circles"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000}
      />
    </div>
  );
};
