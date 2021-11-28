import { componentWithExtraClass } from '../abstractComponents/componentWithExtraClass';

interface ICommonButtonProps extends componentWithExtraClass {
  text: string;
  onClick(): void;
}

export type { ICommonButtonProps };
