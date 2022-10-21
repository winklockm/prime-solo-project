
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
-- CREATE TABLE "user" (
--     "id" SERIAL PRIMARY KEY,
--     "username" VARCHAR (80) UNIQUE NOT NULL,
--     "password" VARCHAR (1000) NOT NULL
-- );


-- user table

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR(80) UNIQUE NOT NULL,
    "password" VARCHAR(1000) NOT NULL,
    "patient_name" VARCHAR(1000) NOT NULL,
    "patient_photo" VARCHAR(1000) NOT NULL,
    "patient_id" SERIAL
);

INSERT INTO "user" ("username", "password", "patient_id")
	VALUES ('Maggie', 123, 1),
	('Emily', 456, 2);


-- medprovider table

CREATE TABLE "medprovider" (
    "id" SERIAL PRIMARY KEY,
    "patient_id" INT REFERENCES "user",
    "name" VARCHAR(1000) NOT NULL,
    "specialty" VARCHAR(1000),
    "clinic" VARCHAR(1000),
    "phone" VARCHAR(1000),
    "portal" VARCHAR(1000),
    "next_appointment" TIMESTAMPTZ,
    "comments" VARCHAR(1000)
    );
    
INSERT INTO "medprovider" ("patient_id", "name", "specialty", "clinic", "phone", "portal", "next_appointment", "comments")
	VALUES (1, 'Dr. Winkle', 'Physical Therapy', 'Methodist', '555-555-5555', 'www.healthpartners.com', '2022-11-12', 'do exercises daily'),
	(1, 'Terry', 'Neuropsychology', 'Courage Kenny', '777-777-7777', 'www.couragekenny.com', '2023-1-3', 'recommended seeing geriatric psychologist'),
	(1, 'Dr. Smith', 'Primary care', 'Park Nicollet St. Louis Park', '999-999-9999', 'www.parknicollet.com', '7/1/2023', 'will be on leave soon - find new primary care doctor'),
	(2, 'Dr. Two', 'Neurosurgery', 'Allina', '999-999-9999', 'www.healthpartners.com', '7/15/2023', 'follow up 6 months'),
	(2, 'Dr. Bon', 'Cardiology', 'Mayo Clinic Rochester', '999-999-9999', 'www.mayoclinic.com', '7/19/2023', 'great doctor');
	
	
-- medication table	

CREATE TABLE "medication" (
    "id" SERIAL PRIMARY KEY,
    "patient_id" INT REFERENCES "user",
    "name" VARCHAR (1000) NOT NULL,
    "indication" VARCHAR (1000),
    "dose" VARCHAR (1000),
    "frequency" VARCHAR (1000),
    "route" VARCHAR (1000),
    "notes" VARCHAR (1000)
);

INSERT INTO "medication" ("patient_id", "name", "indication", "dose", "frequency", "route", "notes")
	VALUES (1, 'Dilantin', 'Seizure', '10mg', 'daily', 'oral', 'none'),
	(1, 'Advil', 'Pain', '10mg', 'As needed', 'oral', 'Only take once in a while'),
	(1, 'Tylenol', 'Pain', '10mg', 'daily', 'oral', 'Doing well on this'),
	(2, 'Kepra', 'Seizure', '10mg', 'weekly', 'patch', 'Causes memory issues?'),
	(2, 'Tylenol', 'Pain', '10mg', 'daily', 'oral', 'Doing well on this');

-- insurance table

CREATE TABLE "insurance" (
	"id" SERIAL PRIMARY KEY,
    "patient_id" INT REFERENCES "user",
    "provider" VARCHAR(1000) NOT NULL,
    "group" INTEGER NOT NULL,
    "id_number" INTEGER NOT NULL,
    "plan_name" VARCHAR(1000),
    "phone" VARCHAR(1000),
    "notes" VARCHAR(1000)
);

INSERT INTO "insurance" ("patient_id", "provider", "group", "id_number", "plan_name", "phone", "notes")
	VALUES (1, 'Medica', 55409, 5630111, 'Regular', '444-444-4444', '$20 copay'),
	(2, 'UnitedHealthCare', 543452, 2989777, 'Choice Plan', '999-999-9999', 'Need new card'),
	(2, 'Medica', 55409, 5630111, 'Care', '444-444-4444', '$20 copay');
