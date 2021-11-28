interface IUserBody {
  nickname: string;
  joinedBy: string;
  status: string;
  email: string;
  telegram: string;
  wallet: string;
}

interface IUser extends IUserBody {
  id: string;
}

export type { IUserBody, IUser };
