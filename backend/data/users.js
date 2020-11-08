import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Emrah Rizvić',
    email: 'emrah_rizvic@hotmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Tesla Smith',
    email: 'tesla.smith@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'John Smith',
    email: 'john.smith@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
