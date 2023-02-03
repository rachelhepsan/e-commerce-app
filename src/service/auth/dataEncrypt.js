import { AES } from 'crypto-js';

export default pass => {
  console.log(pass, 'line1');
  const Securitykey = import.meta.env.VITE_SECRET_KEY;
  console.log(Securitykey);
  const value = AES.encrypt(pass, Securitykey).toString();
  console.log(value, 'line2');
  return value;
};
