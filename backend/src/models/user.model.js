import mongoose from "mongoose";
import bcrypt from 'bcrypt'
const schema = mongoose.Schema;

const userSchema = new schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
userSchema.pre('save', function(next) {
  const user = this;

  if (!user.isModified('password')) return next();

  bcrypt.hash(user.password, 8, (err, hash) => {
    if (err) return next(err);

    user.password = hash;
    next();
  });
});

const userModel = mongoose.model('user', userSchema);

export default userModel;