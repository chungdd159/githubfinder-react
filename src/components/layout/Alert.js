import React from 'react';
import { Consumer } from '../../context';

export default function Alert() {
  return (
    <Consumer>
      {(value) => {
        const { mes, clname } = value;

        if (mes !== '' && clname !== '') {
          return (
            <div className={`alert alert-${clname}`}>
              <i className="fas fa-info-circle"></i> {mes}
            </div>
            
          );
        }
      }}
    </Consumer>
  );
}
