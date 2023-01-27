import { getUsers } from '@/service/users';
import { useHomeStore } from './plpStore';

const store = useHomeStore();

export const getAllUsers = async () => {
  store.loading = true;
  const response = await getUsers();
  store.loading = false;
  if (response.success) {
    store.users = response.data.users;
  }
};
