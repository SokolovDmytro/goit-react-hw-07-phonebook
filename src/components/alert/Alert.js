import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import styles from './Alert.module.css';

const Alert = ({ alert }) => {
  return (
    <CSSTransition in={alert} classNames={styles} timeout={250} unmountOnExit>
      <p className={styles.alert}>The name is alredy exsist</p>
    </CSSTransition>
  );
};

const mapStateToProps = state => {
  return {
    alert: state.alert,
  };
};

export default connect(mapStateToProps)(Alert);

// import React from "react";
// import styles from "./Alert.module.css";

// const Alert = ({ alertSwitch }) => {
//   return (
//     <div className={styles.alertWrapper}>
//       <p>Contact already exist !</p>
//       <button onClick={alertSwitch} className={styles.btn}>
//         Ok
//       </button>
//     </div>
//   );
// };

// export default Alert;
