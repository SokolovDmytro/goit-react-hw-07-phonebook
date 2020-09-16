import React from 'react';
import styles from './ContactsList.module.css';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import contactsActions from '../../../redux/contacts/contactsActions';

const ContactListItem = ({ id, name, number, onRemove }) => {
  return (
    <li className={styles.item}>
      <span className={styles.span}>{name} </span>
      <span className={styles.span}>{number} </span>
      <button
        className={styles.button}
        type="button"
        id={id}
        onClick={onRemove}
      >
        X
      </button>
    </li>
  );
};

// ContactListItem.propTypes = {
//   contact: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   }),
// };

// const mapDispatchToProps = (dispatch, ownProps) => ({
//   removeContact: () => dispatch(contactsActions.removeContact(ownProps.id)),
// });

// export default connect(null, mapDispatchToProps)(ContactListItem);
export default ContactListItem;