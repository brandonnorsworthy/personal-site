// import { Pool } from 'pg';
// require('dotenv').config();
const weddingInviteGroups = require('./weddingInviteGroups.json');

// const pool = new Pool({
//   user: process.env.user,
//   host: process.env.host,
//   database: process.env.database,
//   password: process.env.password,
//   port: 5432,
// });

// async function fetchData() {
//   try {
//     const res = await pool.query('SELECT * FROM your_table');
//     console.log(res.rows); // Output the data
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await pool.end(); // Closes the connection
//   }
// }

// fetchData();

function trimObjectValues() {
  const newData = weddingInviteGroups.map((object) => {
    const trimmedObject = {};
    for (let key in object) {
      trimmedObject[key] = object[key].trim();
    }
    return trimmedObject;
  })

  console.log(newData)
};

function combinePeople() {
  const newData = weddingInviteGroups.map((object) => {
    const { firstPerson, people } = object;
    const newObject = { ...object, people: `${firstPerson}, ${people}` };
    delete newObject.firstPerson;
    return newObject;
  })

  console.log(newData)
};

combinePeople();