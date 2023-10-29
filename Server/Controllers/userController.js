const db = require("../Models/db");
const jwt = require("jsonwebtoken");
require('dotenv').config();


exports.registerUser = async (req, res) => {
    const { first_name, last_name, username, email, phone_number, password } = req.body;
    try {
        const checkEmailQuery = "SELECT user_id FROM user_table WHERE email = $1";
        const emailCheck = await db.query(checkEmailQuery, [email]);

        if (emailCheck.rows.length > 0) {
            res.status(400).json({ error: "Email already exists" });
        }
        else {
            const query = `insert into user_table (first_name, last_name,username,email,phone_number,password)
          values ($1, $2, $3, $4 , $5, $6)
          returning user_id`
                ;
            const values = [first_name, last_name, username, email, phone_number, password];
            const user = await db.query(query, values);
            res.status(200).json({
                message: "Added Successfully",
                user_id: user.rows.user_id
            })
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Failed to add");
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const checkUser = `SELECT * FROM user_table WHERE email = $1 AND password = $2`;

        const checked = await db.query(checkUser, [email, password]);

        if (!checked.rows.length) {
            res.status(400).send({ message: "Email or password is invalid" });
        }

        const payload = {
            name: checked.rows[0].username,
            user_id: checked.rows[0].user_id,
            email: checked.rows[0].email
        }
        // console.log(checked);
        // console.log(payload);

        
        const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "7d" });

        res.json({ "token": token });

    } catch (err) {
        console.error(err);
        res.status(500).send("Failed to Authenticate");
    }
};

exports.getUserData = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM user_table');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

