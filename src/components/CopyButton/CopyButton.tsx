import { ICopyButtonProps } from '../../types/components/copyButton';

import './styles/copy-button.css';

const CopyButton = ({ extraClass = '', onClick }: ICopyButtonProps): JSX.Element => {
  return (
    <button
      className={ `copy-button ${ extraClass }` }
      onClick={ onClick }
    />
  );
}

export default CopyButton;
