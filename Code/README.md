# Installation Instructions to Run Locally
## Using localhost

### Pre-requisites:
1. Have git installed on your local machine.
2. Have npm/yarn installed on your local machine.


### Instructions
1. Type the following command in your terminal to clone the repository.
```
git clone https://github.com/bulbularora/No-More-waste.git
```
2. Go to your-path-name/Code/no-more-waste and create a .env file and copy the following contents into that file:
```
REACT_APP_BASE_URL = "http://localhost:8800/api"
```
3. Go to your-path-name/Code/no-more-waste/api and create a .env file and copy the following contents into that file:
```
TWILIO_ACCOUNT_SID=''
TWILIO_AUTH_TOKEN=''
TWILIO_PHONE_NUMBER=''
db_host = ""
db_user = ""
db_password = ""
db_database = ""
db_port = 
GCLOUD_STORAGE_BUCKET = ""
GOOGLE_APPLICATION_CREDENTIALS = ""
```
The actual credentials have not been released for security purposes. These environment variables are crucial to the app and the application will not
work without these credentials. 

4. Go back to the terminal and run the following command
```
cd Code/no-more-waste
```

5. Run the following command in this directory:
```
npm i
```

6. After the successful completion of the install, run the following command:
```
npm run build
```

7. After the build has been successfully created, run this command to go into the api folder:
```
cd api
```

8. Run the following command in this directory:
```
npm i
```
9. After the installation is complete, run the start command for the application:
```
npm start
```

10. Now you can successfully run the application at this URL: http://localhost:8800

### Other Information
1. If you would like to use your own database credentials, you would have to create two new tables. Copy the query below to create the new two tables:
```
CREATE TABLE "user" (
  "user_id" int NOT NULL AUTO_INCREMENT,
  "businessname" varchar(100) NOT NULL,
  "address" varchar(100) NOT NULL,
  "username" varchar(100) NOT NULL,
  "phone_number" varchar(10) NOT NULL,
  "role" varchar(1) NOT NULL,
  "email" varchar(100) NOT NULL,
  "password" varchar(100) NOT NULL,
  PRIMARY KEY ("user_id")
);


CREATE TABLE "post" (
  "post_id" int NOT NULL AUTO_INCREMENT,
  "item_name" varchar(100) DEFAULT NULL,
  "description" varchar(300) NOT NULL,
  "photo_link" varchar(300) DEFAULT NULL,
  "pickup_time" varchar(300) NOT NULL,
  "requested" tinyint(1) DEFAULT NULL,
  "accepted" tinyint(1) DEFAULT NULL,
  "shelter_id" int DEFAULT NULL,
  "rest_id" int DEFAULT NULL,
  "driver_id" int DEFAULT NULL,
  "completed" tinyint(1) DEFAULT NULL,
  "pickedUp" tinyint(1) DEFAULT NULL,
  PRIMARY KEY ("post_id"),
  KEY "shelter_id" ("shelter_id"),
  KEY "rest_id" ("rest_id"),
  KEY "driver_id" ("driver_id"),
  CONSTRAINT "post_ibfk_1" FOREIGN KEY ("shelter_id") REFERENCES "user" ("user_id"),
  CONSTRAINT "post_ibfk_2" FOREIGN KEY ("rest_id") REFERENCES "user" ("user_id"),
  CONSTRAINT "post_ibfk_3" FOREIGN KEY ("driver_id") REFERENCES "user" ("user_id")
);
```
Now, you can enter your database credentials into the .env file in the api folder and test the application out.

### Debugging information
1. At the time of running the build command, if you get an error about the chalk module, the easiest fix is to delete the node_modules folder in the no-more-waste directory and running 
```
npm i
``` 
in the no-more-waste directory again. 

2. There have been also been issues with the newest version of Node.js and sometimes the npm run build command will not work if you have a newer version of node installed. We found a fix:
    - In Code/no-more-waste/package.json change the first two lines of scripts from: 
    ```
    "start": "react-scripts start",
    "build": "react-scripts build",
    ```
    to this:
    ```
    "start": "react-scripts --openssl-legacy-provider start"
    "build": "react-scripts --openssl-legacy-provider build"
    ```

