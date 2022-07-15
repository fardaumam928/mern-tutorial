
    const {email, password} = req.body
    // Check for user email
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email
        })

    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
