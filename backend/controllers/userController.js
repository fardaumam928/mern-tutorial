password: hashedPassword,
throw new Error('Invalid user data')
}
})
// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async(req, res) => {
// @access  Private

// Generate JWT

expiresIn: '30d',