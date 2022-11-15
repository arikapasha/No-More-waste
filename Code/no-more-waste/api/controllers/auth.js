import db from "../db.js"
import bcrypt from "bcryptjs"

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
        })
    })
}

export const login = (req,res)=>{

}

export const logout = (req,res)=>{
    
}