CREATE TABLE "koalas" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR (80) NOT NULL,
"age" INTEGER,
"favColor" VARCHAR (80) NOT NULL,
"isReady" BOOLEAN DEFAULT FALSE,
"notes" VARCHAR (250) NOT NULL
);

INSERT INTO "koalas"
	("name", "age", "favColor", "notes")
VALUES
	('Bella', '12', 'yellow', 'Nap time is 2pm'),
	('Faye', '3', 'blue', 'Check up appointment on Monday'),
	('Bo', '12', 'blue', 'Please give medication with meals');
	