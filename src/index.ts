import { UserForm } from './views/UserForm';
import { User } from './models/User';

// const collection = User.buildUserCollection();
// collection.on('change', () => {
//   console.log(collection);
// });

// collection.fetch();
const user = User.buildUser({ name: 'John', age: 30 });
const root = document.getElementById('root');

if (root) {
  const userForm = new UserForm(root, user);
  userForm.render();
} else {
  throw new Error('Root element not found');
}
