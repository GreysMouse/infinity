import { IEditButtonProps } from '../../types/components/editButton';

import './styles/edit-button.css';

const EditButton = ({ extraClass = '', onClick }: IEditButtonProps): JSX.Element => {
  return (
    <button
      className={ `edit-button ${ extraClass }` }
      onClick={ onClick }
    />
  );
}

export default EditButton;
