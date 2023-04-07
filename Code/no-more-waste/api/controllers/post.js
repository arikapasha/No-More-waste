import jwt from "jsonwebtoken";
import { db } from "../db.js";
import twilio from "twilio";
import dotenv from "dotenv";
dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const client = twilio(accountSid, authToken);

export const getPosts = (req, res) => {
  const q =
    "SELECT post.*, shelter.businessname shelterName, shelter.address shelterAddress, shelter.phone_number shelterPhoneNumber, restaurant.businessname restaurantName, restaurant.address restaurantAddress, restaurant.phone_number restaurantPhoneNumber FROM defaultdb.post post LEFT JOIN defaultdb.user shelter ON post.shelter_id = shelter.user_id LEFT JOIN defaultdb.user restaurant ON post.rest_id = restaurant.user_id WHERE post.shelter_id IS NULL OR post.shelter_id = shelter.user_id order by post_id desc";

  db.query(q, (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};

export const getPost = (req, res) => {};

export const getRestPosts = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("token is not valid.");
    const user_id = userInfo.user_id;

    const q =
      "SELECT post.*, shelter.businessname shelterName, shelter.address shelterAddress, shelter.phone_number shelterPhoneNumber, restaurant.businessname restaurantName, restaurant.address restaurantAddress, restaurant.phone_number restaurantPhoneNumber, driver.username driverUsername, driver.phone_number driverPhoneNumber FROM defaultdb.post post LEFT JOIN defaultdb.user shelter ON post.shelter_id = shelter.user_id LEFT JOIN defaultdb.user restaurant ON post.rest_id = restaurant.user_id LEFT JOIN defaultdb.user driver ON post.driver_id = driver.user_id WHERE (post.shelter_id IS NULL OR post.shelter_id = shelter.user_id) and (post.driver_id IS NULL OR post.driver_id = driver.user_id) and post.rest_id = (?) order by post_id desc";

    db.query(q, user_id, (err, data) => {
      if (err) return res.status(500).json.err;

      return res.json(data);
    });
  });
};

export const getShelterPosts = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("token is not valid.");
    const user_id = userInfo.user_id;

    const q =
      "SELECT post.*, shelter.businessname shelterName, shelter.address shelterAddress, shelter.phone_number shelterPhoneNumber, restaurant.businessname restaurantName, restaurant.address restaurantAddress, restaurant.phone_number restaurantPhoneNumber, driver.username driverUsername, driver.phone_number driverPhoneNumber FROM defaultdb.post post LEFT JOIN defaultdb.user shelter ON post.shelter_id = shelter.user_id LEFT JOIN defaultdb.user restaurant ON post.rest_id = restaurant.user_id LEFT JOIN defaultdb.user driver ON post.driver_id = driver.user_id WHERE (post.shelter_id = shelter.user_id) and (post.driver_id IS NULL OR post.driver_id = driver.user_id) and post.shelter_id = (?) order by post_id desc";

    db.query(q, user_id, (err, data) => {
      if (err) return res.status(500).json.err;

      return res.json(data);
    });
  });
};

export const getVolunteerPosts = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("token is not valid.");
    const user_id = userInfo.user_id;

    const q =
      "SELECT post.*, shelter.businessname shelterName, shelter.address shelterAddress, shelter.phone_number shelterPhoneNumber, restaurant.businessname restaurantName, restaurant.address restaurantAddress, restaurant.phone_number restaurantPhoneNumber, driver.username driverUsername, driver.phone_number driverPhoneNumber FROM defaultdb.post post LEFT JOIN defaultdb.user shelter ON post.shelter_id = shelter.user_id LEFT JOIN defaultdb.user restaurant ON post.rest_id = restaurant.user_id LEFT JOIN defaultdb.user driver ON post.driver_id = driver.user_id WHERE post.driver_id = driver.user_id and post.driver_id = (?) order by post_id desc";
    db.query(q, user_id, (err, data) => {
      if (err) return res.status(500).json.err;

      return res.json(data);
    });
  });
};

export const addPost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("token is not valid.");

    const q =
      "insert into post(item_name, description, photo_link, pickup_time, rest_id) values (?)";

    const values = [
      req.body.item_name,
      req.body.description,
      req.body.photo_link,
      req.body.pickup_time,
      userInfo.user_id,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json.err;

      return res.json("Post has been created.");
    });
  });
};

export const deletePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");

  jwt.verify(token, "jwtkey", (err) => {
    if (err) return res.status(403).json("token is not valid.");

    const post_id = req.body.post_id;

    const q = "delete from post where post_id = " + post_id;

    db.query(q, (err, data) => {
      if (err) return res.status(500).json.err;

      return res.json("Post has been deleted.");
    });
  });
};

export const updatePost = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("token is not valid.");

    const shelter_id = userInfo.user_id;
    const post_id = req.body.post_id;

    const q =
      "update post set shelter_id = " +
      shelter_id +
      ", requested = " +
      1 +
      " where post_id = (?)";

    db.query(q, post_id, (err, data) => {
      if (err) return res.status(500).json.err;

      return res.json("Shelter info has been added.");
    });
  });
};

export const updateVolunteer = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");

  //console.log("ive reached")

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("token is not valid.");

    const driver_id = userInfo.user_id;
    const post_id = req.body.post_id;

    const q =
      "update post set driver_id = " +
      driver_id +
      ", accepted = " +
      1 +
      " where post_id = (?)";

    db.query(q, post_id, (err, data) => {
      if (err) return res.status(500).json.err;

      return res.json("Volunteer info has been added.");
    });
  });
};

export const updatePickedUp = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("token is not valid.");

    const post_id = req.body.post_id;

    const q = "update post set pickedUp = " + 1 + " where post_id = (?)";

    db.query(q, post_id, (err, data) => {
      if (err) return res.status(500).json.err;

      return res.json("Volunteer has picked up the food.");
    });
  });
};

export const updateDelivered = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");

  //console.log("ive reached")

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("token is not valid.");

    const driver_id = userInfo.user_id;
    const post_id = req.body.post_id;

    const q = "update post set completed = " + 1 + " where post_id = (?)";

    db.query(q, post_id, (err, data) => {
      if (err) return res.status(500).json.err;

      return res.json("The delivery has been completed.");
    });
  });
};

export const sendtextMessage = (toPhoneNumber, message) => {
  client.messages
    .create({
      body: message,
      from: twilioPhoneNumber,
      to: toPhoneNumber,
    })
    .then((message) => console.log(message.sid))
    .catch((error) => console.error(error));
};

export const sendTexts = (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  const message = req.body.message;
  sendtextMessage(phoneNumber, message);
  res.send("Text message sent!");
};
