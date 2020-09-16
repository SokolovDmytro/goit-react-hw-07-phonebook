// import { v4 as uuidv4 } from 'uuid';
import contactsConstans from './contactsConstans';

// const addContact = (contacts) => ({
//   type: contactsConstans.ADD,
//   payload: {
//     contacts,
//   },
// });

// const deleteContact = (id) => ({
//   type: contactsConstans.DEL,
//   payload: {
//     id,
//   },
// });

const filter = filter => {
  return {
    type: contactsConstans.FILTER,
    payload: {
      filter,
    },
  };
};

const duplicate = () => ({
  type: contactsConstans.DUPLICATE,
});

const addContactRequest = () => {
  return {
    type: contactsConstans.ADD_CONTACT_REQUEST,
  };
};

const addContactSuccess = contacts => {
  return {
    type: contactsConstans.ADD_CONTACT_SUCCESS,
    payload: {
      ...contacts,
    },
  };
};

const addContactError = error => {
  return {
    type: contactsConstans.ADD_CONTACT_ERROR,
    payload: { error },
  };
};

const fetchContactRequest = () => {
  return {
    type: contactsConstans.FETCH_CONTACT_REQUEST,
  };
};

const fetchContactSuccess = contacts => {
  return {
    type: contactsConstans.FETCH_CONTACT_SUCCESS,
    payload: contacts,
  };
};

const fetchContactError = error => {
  return {
    type: contactsConstans.FETCH_CONTACT_ERROR,
    payload: { error },
  };
};

const removeContactRequest = () => {
  return {
    type: contactsConstans.DEL_CONTACT_REQUEST,
  };
};

const removeContactSuccess = id => {
  return {
    type: contactsConstans.DEL_CONTACT_SUCCESS,
    payload: id,
  };
};

const removeContactError = error => {
  return {
    type: contactsConstans.DEL_CONTACT_ERROR,
    payload: { error },
  };
};

export default {
  // addContact,
  // deleteContact,
  filter,
  duplicate,

  addContactRequest,
  addContactSuccess,
  addContactError,

  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,

  removeContactError,
  removeContactSuccess,
  removeContactRequest,
};

// const addContact = contact => {
//   return {
//     type: contactsConstans.ADD_CONTACT,
//     payload: {
//       ...contact,
//       id: uuidv4(),
//     },
//   };
// };

// const removeContact = id => {
//   return {
//     type: contactsConstans.REMOVE_CONTACT,
//     payload: id,
//   };
// };

// const getFilterValue = filter => {
//   return {
//     type: contactsConstans.FILTER_CONTACT,
//     payload: filter,
//   };
// };

// const existContact = () => {
//   return {
//     type: contactsConstans.EXIST_CONTACT,
//   };
// };

// export default { addContact, removeContact, getFilterValue, existContact };
