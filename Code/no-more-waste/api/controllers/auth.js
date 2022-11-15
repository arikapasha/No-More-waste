import db from "../db.js"
import bcrypt from "bcryptjs"
import jwt from"jsonwebtoken"

export const signup = (req,res)=>{
    const q = "select * from user where email = ?"
    db.query(q, [req.body.email], (err,data)=>{
        if(err){
            return res.json(err)
        }
        if(data.length) return res.status(409).json("user already exists")

        //hash the password and create the user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)

        const q = "inser into user('businessname','address','username','phone_number','email','password','role') values (?)"
        const values = [
            req.body.businessname,
            req.body.address,
            req.body.usename,
            req.body.phone_number,
            req.body.email,
            hash,         
            req.body.role,
        ]

        db.query(q, [values], (err,data)=>{
            if(err){
                return res.json(err)
            }
            return res.status(200).json("User has been successfully created!")
        });
    });
};

export const login = (req,res)=>{
    // check user

    const q = "select * from user where email = ?";
    db.query(q,[req.body.email],(err,data)=>{
        if(err) return res.json(err);
        if(data.length === 0)return res.status(404).json("User not found")
        //check password
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);
        if(!isPasswordCorrect) return res.status(400).json("Wrong password or user does not exist.");

        const token = jwt.sign({user_id.data[0].user_id});
    });
};

export const logout = (req,res)=>{
    
}