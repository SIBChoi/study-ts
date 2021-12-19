import axios from 'axios';
import { User } from './models/User';

const user = User.buildUser({ id: 2 });

console.log(user.getAll);
// user.sync.save({ name: 'save NewThing', age: 32 });
