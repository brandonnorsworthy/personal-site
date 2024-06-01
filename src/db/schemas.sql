CREATE TABLE wedding_invites_group (
  id VARCHAR PRIMARY KEY,
  name VARCHAR,
  address VARCHAR,
  confirmed BOOLEAN,
  has_scanned BOOLEAN,
  created_at TIMESTAMP,
  number_of_people INT
);

CREATE TABLE wedding_invites_people (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR,
  lastname VARCHAR,
  group_id VARCHAR,
  status BOOLEAN,
  created_at TIMESTAMP,
  FOREIGN KEY (group_id) REFERENCES wedding_invites_group(id)
);
