import axios from 'axios';
import { User } from './model/User';

const user = new User({ id: 2 });

user.on('change', () => {
  console.log(user);
});

user.fetch();
// user.sync.save({ name: 'save NewThing', age: 32 });
