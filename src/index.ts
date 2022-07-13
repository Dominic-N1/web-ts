// import { User } from './models/User';

// const user = User.buildUser({ id: 1 });
// user.on('change', () => {
//   console.log(user);
// });

// user.fetch();

import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';

const collection = User.buildUserCollection();
collection.on('change', () => {
  console.log(collection);
});

collection.fetch();
