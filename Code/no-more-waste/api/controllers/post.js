import jwt from "jsonwebtoken";
import { db } from "../db.js";
import twilio from "twilio"

const accountSid = 'AC74e1d8c3ae2d4d0fb289ead6ef97226b';
const authToken = '2778d7c4226a990071ddbc2e86e0f291';
const twilioPhoneNumber = '+14582175795';
const client =twilio(accountSid,authToken);

export const getPosts = (req, res) => {
  const q = "select * from post order by post_id desc";
  db.query(q, (err, data) => {
    if (err) return res.send(err);

    return res.status(200).json(data);
  });
};
export const getPost = (req, res) => {
  // const token = req.cookies.access_token;
  // if(!token) return res.status(401).json("Not authenticated");
  // jwt.verify(token, "jwtkey", (err, userInfo) => {
  //     if(err) return res.status(403).json("token is not valid.");
  //     const q = "insert into post(item_name, description, photo_link, pickup_time, rest_id) values (?)";
  //     const values = [
  //         req.body.item_name,
  //         req.body.description,
  //         req.body.photo_link,
  //         req.body.pickup_time,
  //         userInfo.user_id,
  //     ]
  //     db.query(q, [values], (err,data)=>{
  //         if(err) return res.status(500).json.err;
  //         return res.json("Post has been created.");
  //     });
  // });
};

export const getRestPosts = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("token is not valid.");
    const user_id = userInfo.user_id;

    const q = "select * from post where rest_id = (?) order by post_id desc";

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

    const q = "select * from post where shelter_id = " + user_id +" order by post_id desc";
    //const q1 = "select businessname, address from user where user join post on user.user_id = post.rest_id";

    db.query(q, (err, data) => {
      if (err) return res.status(500).json.err;

      return res.json(data);
    });
    // db.query(q1, (err, data) => {
    //   if (err) return res.status(500).json.err;

    //   return res.json(data);
    // });
  });
};

export const getVolunteerPosts = (req, res) => {
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("token is not valid.");
    const user_id = userInfo.user_id;

    const q = "select * from post where driver_id = (?) order by post_id desc";

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

  //console.log("ive reached")

  jwt.verify(token, "jwtkey", (err) => {
    if (err) return res.status(403).json("token is not valid.");

    //const shelter_id = userInfo.user_id;
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

  //console.log("ive reached")

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

  // findDriver(req.body.post_id);
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

export const sendtextMessage = (toPhoneNumber, message) =>{
  client.messages
    .create({
       body: message,
       from: twilioPhoneNumber,
       to: toPhoneNumber
    })
    .then(message => console.log(message.sid))
    .catch(error => console.error(error));
};

export const sendTexts = (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  const message = req.body.message;
  sendtextMessage(phoneNumber, message);
  res.send('Text message sent!');
};