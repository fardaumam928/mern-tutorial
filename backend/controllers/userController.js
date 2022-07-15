const { _id, name,email } = await User.findById(req.user.id)
res.status(200).json({
    id: _id,
    name,
    email,
})
})