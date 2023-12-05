//To create, delete and update posts
const router = require("express").Router();
const Post = require("../models/Post")
const newComment = require("../models/Comments")

//Create new post
router.post("/", async (req, res) => {
    const newPost = await new Post(req.body);

    try {
        const savePost = await newPost.save();
        res.status(200).json(savePost);

    } catch (err) {
        res.status(500).json(err)
    }
})

//Get Post 

router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
        
        
    } catch (err) {
        res.status(500).json(err)
    }
})

//Get All Posts

router.get("/", async (req, res) => {
    try {
        const allPost = await Post.find()
        res.status(200).json(allPost)
    } catch (err) {
        res.status(500).json(err)
    }
})

//Post Comment
router.post("/:id/comments", async (req, res) => {
    try {
        const { text, userEmail } = req.body;

        const enteredComment = new newComment({
            text: text,
            email: userEmail
        });

        enteredComment.save((err, savedComment) => {
            if (err) {
                return res.status(500).json(err);
            }

            Post.findById(req.params.id, (err, post) => {
                if (err) {
                    return res.status(500).json(err);
                }

                post.comments.push(savedComment);
                post.save();

                res.status(201).json(savedComment);
            });
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//GEt Comment
router.get("/:id/comments", async (req, res) => {
    try {
        const result = await Post.findById(req.params.id).populate({
            path: "comments",
            populate: {
                path: "text",
                select: "email", // Only select the 'email' field from the user
            },
        }).exec();

        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


router.get('/user/:userId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const posts = await Post.find({ userId }); // Assuming userId is a field in your Post model
        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/user/email/:userEmail', async (req, res) => {
    try {
        const userEmail = req.params.userEmail;

        // Assuming userEmail is stored in the 'email' field of the Post model
        const posts = await Post.find({ email: userEmail });

        res.json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );

        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const postId = req.params.id;

        // Find the post by ID and remove it
        const deletedPost = await Post.findByIdAndRemove(postId);

        if (!deletedPost) {
            return res.status(404).json({ error: 'Post not found' });
        }

        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        console.error('Error deleting post:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports = router;