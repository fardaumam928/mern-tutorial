user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
},
@@ -11,4 +17,4 @@ const goalSchema = mongoose.Schema(
    module.exports = mongoose.model('Goal', goalSchema)
    @@ -11,4 +17,4 @@ const goalSchema = mongoose.Schema(
        
module.exports = mongoose.model('Goal', goalSchema)