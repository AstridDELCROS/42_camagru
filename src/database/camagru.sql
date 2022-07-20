CREATE TABLE IF NOT EXISTS  users (
    id          SERIAL          PRIMARY KEY,
);

CREATE TABLE IF NOT EXISTS	pictures (
	id				VARCHAR(255)	PRIMARY KEY,
	owner_id		INT				NOT NULL,

	CONSTRAINT
		fk_owner_id
	FOREIGN KEY (owner_id) REFERENCES users (id)
);