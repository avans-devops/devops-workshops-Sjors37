const username = process.env.USERNAME || '';
const password = process.env.PASSWORD || '';
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || '27017';
const database = process.env.DB || 'Connections';
const params = process.env.PARAMS || '';
const secret = process.env.SECRET || 'MyLittleSecret';

let uri = 'mongodb://';
if (username && password) {
  uri += `${username}:${password}@`;
}

uri += `${host}:${port}/${database}${params}`;

module.exports = {
  mongodb: { uri },
  secret,
};
