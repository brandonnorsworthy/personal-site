require('dotenv').config();
const weddingInviteGroups = require('./weddingInviteGroups.json');
const pool = require('./database.js');

async function fetchData() {
  try {
    const res = await pool.query('SELECT * FROM wedding_invites_group');
    console.log(res.rows); // Output the data
  } catch (err) {
    console.error(err);
  } finally {
    await pool.end(); // Closes the connection
  }
}

async function createGroups() {
  for (const object of weddingInviteGroups) {
    try {
      await pool.query(
        'INSERT INTO wedding_invites_group (id, name, address, hasscanned, created_at) VALUES ($1, $2, $3, false, $4)',
        [object.id, object.groupname, object.address, new Date()]
      );
      console.log(`Inserted: ${object.groupname}`);
    } catch (err) {
      console.error(err);
    }
  }

}

async function createPeople() {
  for (const object of weddingInviteGroups) {
    if (object.people) {
      const people = object.people.split(',').map(person => person.trim());

      for (const person of people) {
        const [firstname, lastname] = person.split(' ');

        try {
          await pool.query(
            'INSERT INTO wedding_invites_people (firstname, lastname, group_id, created_at) VALUES ($1, $2, $3, $4)',
            [firstname, lastname, object.id, new Date()]
          );
          console.log(`Inserted: ${firstname} ${lastname}`);
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
};

createGroups();
createPeople();