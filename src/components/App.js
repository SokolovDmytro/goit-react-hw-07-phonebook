import React, { Component } from 'react';
import constansOperation from '../redux/contacts/constansOperation';
// import constansSelector from '../redux/contacts/constansSelector';
import ContactForm from './contactForm/ContactForm';
import ContactList from './contactList/ContactList';
import Filter from './filter/Filter';
import Alert from './alert/Alert';
import { CSSTransition } from 'react-transition-group';
import styles from './App.module.css';
import { connect } from 'react-redux';

class App extends Component {
  filterContacts = () => {
    return this.props.items.filter(contact =>
      contact.name.toLowerCase().includes(this.props.filter.toLowerCase()),
    );
  };

  render() {
    return (
      <>
        <Alert />
        <CSSTransition
          in={true}
          timeout={500}
          classNames={styles}
          appear={true}
          unmountOnExit
        >
          <p className={styles.title}>Phonebook</p>
        </CSSTransition>

        <ContactForm />
        <h2>Contacts</h2>
        {this.props.items.length > 1 && <Filter />}
        <ContactList contacts={this.filterContacts()} />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.contacts.items,
    alert: state.contacts.alert,
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = {
  onFetchContacts: constansOperation.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// class App extends Component {
//   componentDidMount() {
//     this.props.onFetchContacts();
//   }

//   filterContacts = () => {
//     return this.props.items.filter(contact =>
//       contact.name.toLowerCase().includes(this.props.filter.toLowerCase()),
//     );
//   };

//   render() {
//     // const { alert, loading } = this.props;
//     const { alert } = this.props;
//     return (
//       <>
//       {alert && (
//         <CSSTransition
//           in={true}
//           timeout={500}
//           classNames={styles}
//           appear={true}
//           unmountOnExit
//         >
//           <Alert alert={alert}/>
//           <p className={styles.title}>Phonebook</p>
//         </CSSTransition>)}

//         <ContactForm />
//         <h2>Contacts</h2>
//         {this.props.items.length > 1 && <Filter />}
//         <ContactList contacts={this.filterContacts()} />
//       </>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     alert: constansSelector.getAlert(state),
//     // loading: constansSelector.getLoading(state),
//   };
// };

// const mapDispatchToProps = {
//   onFetchContacts: constansOperation.fetchContacts,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

