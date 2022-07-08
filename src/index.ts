import { User } from './models/User';

const user = new User({ name: 'Hi', age: 1 });

user.save();
