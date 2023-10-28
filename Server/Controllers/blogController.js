// controllers/blogController.js
const db = require("../Models/db");




exports.getBlog = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM blogs_table');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

exports.getBlogDetails = async (req, res) => {
    const id = req.params.id;
    try {
        const query = "select * from blogs_table where id = $1";
        const blog = await db.query(query, [id]);
        if (blog.rows.length === 0) {
            res.status(404).send("Blog not found");
        } else {
            res.json(blog.rows);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Wrong server Id");
    }
};


exports.postBlog = async (req, res) => {
    const { title, city, details, authorname, image } = req.body;
    // console.log(image);
    try {
        const query = `insert into blogs_table (title, city, details,authorname)
          values ($1, $2, $3, $4)
          returning id`;

        const values = [title, city, details, authorname,];
        const blog = await db.query(query, values);
        res.status(200).json({
            message: "Blog Added Successfully",
            id: blog.rows.id
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Failed to add blog");
    }
};



