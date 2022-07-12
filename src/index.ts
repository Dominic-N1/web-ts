import { User } from './models/User';

const user = new User({ name: 'Doly', age: 30 });

user.on('change', () => {
  console.log('User was changed, we probably need to update some HTML');
});

console.log(user.get('name'));

user.set({ name: 'Dolly' });

console.log(user.get('name'));
