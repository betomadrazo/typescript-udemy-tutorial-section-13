import { User } from "./models/User";

const user = new User({ name: 'beto', age: 41});

console.log(user.get('name'), user.get('age'))