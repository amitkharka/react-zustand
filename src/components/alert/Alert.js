import React from 'react';
import { useAlertStore } from '../../store';
import './Alert.css';

const Alert = () => {
  const alertState = useAlertStore(state => state.alert);
  const hideAlert = useAlertStore(state => state.hideAlert);

  return (
    alertState.show ? (
      <div className={`alert alert--${alertState.type}`}>
        <div className="alert-message">
          {alertState.message}
          <button className="alert-close-btn" onClick={hideAlert}> &#10006;</button>
        </div>
      </div>
    ) : null
  );
};

export default Alert;