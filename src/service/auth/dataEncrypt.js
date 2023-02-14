import { AES } from 'crypto-js';

export default pass => {
  const Securitykey = import.meta.env.VITE_SECRET_KEY;
  const value = AES.encrypt(pass, Securitykey).toString();
  return value;
};
