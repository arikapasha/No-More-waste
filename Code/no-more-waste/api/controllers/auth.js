import { db } from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//import


export const signup = (req, res) => {
  const q = "select * from user where email = ?";
  db.query(q, [req.body.email], (err, data) => {
    if (err) {
      return res.json(err);
    }
    if (data.length) return res.status(409).json("user already exists");

    //hash the password and create the user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q =
      "insert into user(businessname,address,username,phone_number,email,password) values (?)";
    const values = [
      req.body.businessname,
      req.body.address,
      req.body.usename,
      req.body.phone_number,
      req.body.email,
      req.body.password,
    ];

    db.query(q, [values], (err, data) => {
      if (err) {
        return res.json(err);
      }
      return res.status(200).json("User has been successfully created!");
    });
  });
};

export const login = (req, res) => {
  // check user

  const q = "select * from user where email = ?";
  db.query(q, [req.body.email], (err, data) => {
    if (err) return res.json(err);
    if (data.length === 0) return res.status(404).json("User not found");
    //check password
    const isPasswordCorrect = bcrypt.compareSync(
      req.body.password,
      data[0].password
    );
    if (!isPasswordCorrect)
      return res.status(400).json("Wrong password.");

    const token = jwt.sign({ user_id: data[0].user_id }, "jwtkey");
    const { password, ...other } = data[0]; // not sending the passowrd but all other values are being sent.
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(other);
  });
};

export const logout = (req, res) => {
  res
    .clearCookie("access_token", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .json("User has been logged out.");
};
