
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
-- CREATE TABLE "user" (
--     "id" SERIAL PRIMARY KEY,
--     "username" VARCHAR (80) UNIQUE NOT NULL,
--     "password" VARCHAR (1000) NOT NULL
-- );


CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(80) UNIQUE NOT NULL,
    "password" VARCHAR(1000) NOT NULL,
    "patient_name" VARCHAR(1000) NOT NULL,
    "patient_photo" VARCHAR(1000) NOT NULL,
    "patient_id" SERIAL
);

CREATE TABLE "medprovider" (
    "id" SERIAL PRIMARY KEY,
    "patient_id" INT REFERENCES "user",
    "name" VARCHAR(1000) NOT NULL,
    "specialty" VARCHAR(1000) NOT NULL,
    "clinic" VARCHAR(1000) NOT NULL,
    "phone" VARCHAR(1000) NOT NULL,
    "portal" VARCHAR(1000) NOT NULL,
    "next_appointment" DATE NOT NULL,
    "comments" VARCHAR(1000)
    );