const {Router} = require('express')

const Post = require('../models/Post')
const router = Router()

router.post('/generate', async (req, res) => {
    console.log('router.post')
    try {
        const {booked, date, text} = req.body
        const post = new Post ({
            booked, date, text
        })

        await post.save()

        res.status(201).json(post)

    } catch (e) {
        res.status(500).json({message: "Something went wrong, try again"})
    }
})


module.exports = router