const prisma = require('../db.js')

const getAllPosts = async (req, res) => {
    const posts = await prisma.user.findMany()
    res.json({ data: posts })
}

module.exports={getAllPosts}