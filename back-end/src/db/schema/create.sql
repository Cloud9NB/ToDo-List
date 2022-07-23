DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS todolists CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE todolists (
	id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
	todo VARCHAR(255) NOT NULL
);