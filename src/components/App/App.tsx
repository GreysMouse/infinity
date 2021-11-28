import React from 'react';

import userAPI from '../../utils/APIs/userAPI';

import Profile from '../Profile/Profile';

import { IUser } from '../../types/user';

import './styles/app.css';
import './styles/app__container.css';

const App = (): JSX.Element => {

  const [ user, setUser ] = React.useState<IUser | null>(null);

  React.useEffect(() => {
    userAPI.getUser()
      .then((user) => {
        setUser(user);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className='app'>
      <div className='app__container'>
        <Profile userData={ user } />
      </div>
    </div>
  );
}

export default App;
