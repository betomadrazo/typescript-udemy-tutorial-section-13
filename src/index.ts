import { User } from './models/User';

const user = new User({ name: 'Betito Rocker', age: 41 });

user.events.on('change', () => {
  console.log('change!');
});

user.events.trigger('change');
