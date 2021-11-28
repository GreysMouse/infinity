import React from 'react';

import USER_AVATAR_DEFAULT_PATH from '../../images/default-user-avatar.svg';

import {
  PROFILE_SECTION_NAME,
  PROFILE_PROPS,
  PROFILE_NOTICE_HEADING,
  PROFILE_CHECKBOX_LABELS,
  PROFILE_EDIT_BUTTON_TEXT,
  LINK_COPY_TIMEOUT,
  LINK_COPY_MESSAGE
} from '../../config';

import CommonButton from '../CommonButton/CommonButton';
import CheckboxButton from '../CheckboxButton/CheckboxButton';
import EditButton from '../EditButton/EditButton';
import CopyButton from '../CopyButton/CopyButton';

import { IProfileProps } from '../../types/components/profile';

import './styles/profile.css';
import './styles/profile__title.css';

import './styles/profile__avatar-container.css';
import './styles/profile__avatar-img.css';
import './styles/profile__avatar-edit-button.css';

import './styles/profile__props-list.css';
import './styles/profile__props-list_first.css';
import './styles/profile__props-list_second.css';

import './styles/profile__props-heading.css';
import './styles/profile__props-info.css';
import './styles/profile__props-info_accented.css';

import './styles/profile__copy-button-message.css';

import './styles/profile__copy-button.css';
import './styles/profile__edit-button.css';

import './styles/profile__notice-heading.css';
import './styles/profile__checkbox-container.css';

import './styles/profile__props-container.css';

const Profile = ({ userData }: IProfileProps): JSX.Element => {

  const [ copyTimerId, setCopyTimerId ] = React.useState<number | null>(null);

  const handleCopyButtonClick = (): void => {
    if (copyTimerId) return;

    const timerId = window.setTimeout(() => setCopyTimerId(null), LINK_COPY_TIMEOUT);
    setCopyTimerId(timerId);
  }

  // ------------------------ for testing ------------------------ //

  const [ isCheckboxOneChecked, setIsCheckboxOneChecked ] = React.useState<boolean>(false);
  const [ isCheckboxTwoChecked, setIsCheckboxTwoChecked ] = React.useState<boolean>(false);

  const handleCheckboxOneToggle = (): void => {
    setIsCheckboxOneChecked(!isCheckboxOneChecked);
  }

  const handleCheckboxTwoToggle = (): void => {
    setIsCheckboxTwoChecked(!isCheckboxTwoChecked);
  }

  // --------------------------------------------------------------//
  
  return (
    <section className='profile'>
      <h2 className='profile__title'>{ PROFILE_SECTION_NAME }</h2>
      <div className='profile__avatar-container'>
        <img className='profile__avatar-img' src={ USER_AVATAR_DEFAULT_PATH } alt='user avatar' />
        <EditButton
          extraClass='profile__avatar-edit-button'
          onClick={ () => {} }
        />
      </div>
      <ul className='profile__props-list profile__props-list_first'>
        <li>
          <p className='profile__props-heading'>{ PROFILE_PROPS.NICKNAME }</p>
          <p className='profile__props-info'>{ userData?.nickname }</p>
        </li>
        <li>
          <p className='profile__props-heading'>{ PROFILE_PROPS.STATUS }</p>
          <p className='profile__props-info'>{ userData?.status }</p>
        </li>
        <li>
          <p className='profile__props-heading'>{ PROFILE_PROPS.NEXT_STATUS }</p>
          <p className='profile__props-info'>{ userData?.status }</p>
        </li>
        <li>
          <p className='profile__props-heading'>{ PROFILE_PROPS.EMAIL }</p>
          <p className='profile__props-info'>{ userData?.email }</p>
        </li>
        <li>
          <p className='profile__props-heading'>{ PROFILE_PROPS.TELEGRAM }</p>
          <p className='profile__props-info'>{ userData?.telegram }</p>
        </li>
      </ul>
      <ul className='profile__props-list profile__props-list_second'>
        <li>
          <p className='profile__props-heading'>{ PROFILE_PROPS.WALLET_ADDRESS }</p>
          <p className='profile__props-info profile__props-info_accented'>{ userData?.wallet }</p>
        </li>
        <li>
          <span className='profile__props-container'>
            <p className='profile__props-heading'>{ PROFILE_PROPS.INVITATION_LINK }</p>
            <CopyButton extraClass='profile__copy-button' onClick={ handleCopyButtonClick } />
            {
              copyTimerId && <p className='profile__copy-button-message'>{ LINK_COPY_MESSAGE }</p>
            }
          </span>
          <p className='profile__props-info profile__props-info_accented'>
            { `https://infinity.network.io/j/${ userData?.joinedBy }` }
          </p>
        </li>
      </ul>
      <p className='profile__notice-heading'>{ PROFILE_NOTICE_HEADING }</p>
      <div className='profile__checkbox-container'>
        <CheckboxButton
          labelText={ PROFILE_CHECKBOX_LABELS.LABEL_ONE }
          isChecked={ isCheckboxOneChecked }
          onCheck={ handleCheckboxOneToggle }
        />
        <CheckboxButton
          labelText={ PROFILE_CHECKBOX_LABELS.LABEL_TWO }
          isChecked={ isCheckboxTwoChecked }
          onCheck={ handleCheckboxTwoToggle }
        />
      </div>
      <CommonButton
        extraClass='profile__edit-button'
        text={ PROFILE_EDIT_BUTTON_TEXT }
        onClick={ () => {} }
      />
    </section>
  );
}

export default Profile;
