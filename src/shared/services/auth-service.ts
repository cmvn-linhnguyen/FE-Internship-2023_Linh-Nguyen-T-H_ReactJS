import { UserProps } from '../models/interface';

export const login = (user: UserProps) => {
  return new Promise<UserProps>((resolve, reject) => {
    try {
      setTimeout(async () => {
        const response = await fetch('accounts.json');
        const data: UserProps[] = await response.json();
        const userItem = data.find(
          (item) => item.email === user.email && item.password === user.password
        );
        if (userItem) {
          resolve(user);
        } else {
          reject('Email or password is incorrect.');
        }
      }, 2000);
    } catch (error) {
      reject('Something went wrong.');
    }
  });
};
