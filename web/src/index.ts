import axios from 'axios';
import { User } from './model/User';

const user = new User({ name: 'New Record', age: 3 });

user.save();
