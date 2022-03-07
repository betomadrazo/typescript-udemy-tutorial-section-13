import { User } from './models/User';

const user = new User({ name: 'Betito Rocker', age: 41 });

console.log(user.get('name'))

// Reminder of how 'this' works in javascript
 