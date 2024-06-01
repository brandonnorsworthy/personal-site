require('dotenv').config();
const weddingInviteGroups = require('./weddingInviteGroups.json');
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

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
  for (const group of weddingInviteGroups) {
    try {
      await pool.query(
        'INSERT INTO wedding_invites_group (id, name, address, hasscanned, created_at) VALUES ($1, $2, $3, false, $4)',
        [group.id, group.groupname, group.address, new Date()]
      );
      console.log(`Inserted: ${group.groupname}`);
    } catch (err) {
      console.error(err);
    }
  }
}

async function createPeople() {
  for (const group of weddingInviteGroups) {
    if (group.people) {
      const people = group.people.split(',').map(person => person.trim());

      for (const person of people) {
        const [firstname, lastname] = person.split(' ');

        try {
          await pool.query(
            'INSERT INTO wedding_invites_people (firstname, lastname, group_id, created_at) VALUES ($1, $2, $3, $4)',
            [firstname, lastname, group.id, new Date()]
          );
          console.log(`Inserted: ${firstname} ${lastname}`);
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
};

pool.query(
  'INSERT INTO wedding_invites_people (firstname, lastname, group_id, created_at) VALUES ($1, $2, $3, $4)',
  ['John', 'Doe', 1, new Date()], (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Inserted: John Doe');
    }
  });

createGroups();
createPeople();