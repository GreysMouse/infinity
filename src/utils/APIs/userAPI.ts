import API from './API';

import { BASE_URL } from '../../config';

class UserAPI extends API {
  getUser() {
    return fetch(this._baseURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(this._checkResponse);
  }
}

const userAPI = new UserAPI({
  baseURL: BASE_URL
});

export default userAPI;
