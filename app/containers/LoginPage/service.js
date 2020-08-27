import axios from 'axios';
import { API_URL } from 'constants/API';

export const handleAuthentication = auth =>
  axios.post(`${API_URL}/auth/login`, auth).then(res => res);
