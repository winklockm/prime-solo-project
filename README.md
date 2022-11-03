# TakeCare Mobile App for Caregivers
Becoming a caregiver for someone with complicated medical needs can be stressful, and with so many medical specialists across different healthcare networks, multiple medications, and insurance details to keep track of it's easy to feel overwhelmed. The TakeCare mobile app makes caregiving easier and more efficient by providing a centralized location for caregivers to store important medical-related information pertaining to the patient.

### Screen Shots
![overview](/documentation/images/overview.png)
![date/time picker](/documentation/images/addmedicalproviderappointment.png)
![medication list](/documentation/images/medicationlist.png)
![edit insurance](/documentation/images/insuranceedit.png)

## Installation
- Fork and clone this repository to your local computer
- Open the project folder using a code editor
- In terminal:
  ```
  npm install
  ```
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
- In terminal: 
  ```
  npm run server
  ```
- Open a second terminal and run: 
  ```
  npm run client
  ```
- In a browser navigate to `localhost:3000`

### Prerequisites
What things you need to install the software and how to install them

- Node.js
- PostrgeSQL
- Nodemon

### Built With
- React
- Redux
- Saga
- Javascript
- Material UI - for styling
- HTML
- CSS
- Node.js
- Sql
- PostgreSql
- Cloudinary - for patient photo uploads
- PG
- Dayjs - for timestamp conversions


### Authors
Maggie Whitlock - connect with me on LinkedIn: https://www.linkedin.com/in/maggieawhitlock/

### Acknowledgement
Many thanks to the following:
- My mom, who inspired this project and who continues to make an amazing recovery
- My sister, who took on the most
- My husband, for too many things to list
- Prime Academy and especially the L'Engle cohort for the support and the laughs

### Support
Issues? Suggestions? Feedback? I'm all ears! Please email me at maggie.whitlock@gmail.com

## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm start`
- Navigate to `localhost:5000`


## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy