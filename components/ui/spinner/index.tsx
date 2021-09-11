import { Fragment } from 'react';

const Spinner: React.FC = () => {
  return (
    <Fragment>
      <div className="spinner" />
      <style jsx>
        {`
          .spinner {
            display: flex;
            justify-content: center;
            margin: 0 auto;
          }

          .spinner::after {
            content: '';
            width: 5rem;
            height: 5rem;
            border: 10px solid #999;
            border-top-color: var(--acc-dark);
            border-radius: 50%;
            animation: spin 1s ease infinite;
          }

          @keyframes spin {
            to {
              transform: rotate(1turn);
            }
          }
        `}
      </style>
    </Fragment>
  );
};
export default Spinner;
