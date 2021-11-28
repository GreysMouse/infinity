import React from 'react';

import { ICheckboxButtonProps } from '../../types/components/checkboxButton';

import './styles/checkbox-button.css';
import './styles/checkbox-button__input.css';
import './styles/checkbox-button__label.css';
import './styles/checkbox-button__label_checked.css';

const CheckboxButton = ({ labelText, isChecked = false, onCheck }: ICheckboxButtonProps): JSX.Element => {
  return (
    <div className='checkbox-button'>   
      <label className={ 'checkbox-button__label ' + (isChecked ? 'checkbox-button__label_checked' : '') }>
        <input className='checkbox-button__input' type='checkbox' onChange={ onCheck } />
        { labelText }
      </label>
    </div>
  );
}

export default CheckboxButton;
