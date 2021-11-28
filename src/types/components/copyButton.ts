import { componentWithExtraClass } from '../abstractComponents/componentWithExtraClass';

interface ICopyButtonProps extends componentWithExtraClass {
  onClick(): void;
}

export type { ICopyButtonProps };
