// const ADD_CONTACT = '@contacts/addContact';
// const REMOVE_CONTACT = '@contacts/removeContact';
// const FILTER_CONTACT = '@contacts/filterContact';
// const EXIST_CONTACT = '@contacts/existContact';
// export default { ADD_CONTACT, REMOVE_CONTACT, FILTER_CONTACT, EXIST_CONTACT };

const ADD = 'contacts/add';
const DEL = 'contacts/del';
const FILTER = 'contacts/filter';
const DUPLICATE = 'contacts/duplicate';

const ADD_CONTACT_REQUEST = 'contacts/addContactRequest';
const ADD_CONTACT_SUCCESS = 'contacts/addContactSuccess';
const ADD_CONTACT_ERROR = 'contacts/addContactError';

const DEL_CONTACT_REQUEST = 'contact/removeContactRequest';
const DEL_CONTACT_SUCCESS = 'contact/removeContactSuccess';
const DEL_CONTACT_ERROR = 'contact/removeContactError';

const FETCH_CONTACT_REQUEST = 'contacts/fetchContactsRequest';
const FETCH_CONTACT_SUCCESS = 'contacts/fetchContactsSuccess';
const FETCH_CONTACT_ERROR = 'contacts/fetchContactsError';

export default {
  ADD,
  DEL,
  FILTER,
  DUPLICATE,

  ADD_CONTACT_REQUEST,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_ERROR,

  DEL_CONTACT_REQUEST,
  DEL_CONTACT_SUCCESS,
  DEL_CONTACT_ERROR,

  FETCH_CONTACT_REQUEST,
  FETCH_CONTACT_SUCCESS,
  FETCH_CONTACT_ERROR,
};
