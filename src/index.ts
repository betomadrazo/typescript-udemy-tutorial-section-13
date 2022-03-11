import { User } from './models/User';

const user = User.build({ id: 1, name: 'Alberto', age: 41 });

user.on('change', () => {
  console.log('shingasumare')
  console.log(user);
})

user.fetch();
