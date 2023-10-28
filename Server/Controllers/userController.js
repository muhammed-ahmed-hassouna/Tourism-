const db = require("../Models/db");



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
        const checkemail = `select user_id from user_table where email = $1`;
        const checked = await db.query(checkemail, [email]);

        const checkpass = `select user_id from user_table where password = $1`;
        const checkedpass = await db.query(checkpass, [password]);
        console.log();

        if (checked.rows.length === 0 || checkedpass.rows.length === 0) {
            res.status(400).json({ error: "Invalid Email or Password" });
        } else {
            res.redirect("/");
        }
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

