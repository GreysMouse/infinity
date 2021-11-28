import { ICommonButtonProps } from '../../types/components/commonButton';

import './styles/common-button.css';

const CommonButton = ({ extraClass = '', text, onClick }: ICommonButtonProps): JSX.Element => {
  return (
    <button
      className={ `common-button ${ extraClass }` }
      onClick={ onClick }
    >
      { text }
    </button>
  );
}

export default CommonButton;
