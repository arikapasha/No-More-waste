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
