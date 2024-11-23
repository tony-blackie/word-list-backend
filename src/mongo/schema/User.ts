import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    // validate: {
    //   validator: (name) => name.length > 2,
    //   message: 'Name must be longer than 2 characters.',
    // },
    // required: [true, 'Name is required.'],
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

// UserSchema.virtual('postCount').get(function () {
//   return this.posts.length;
// });

const User = mongoose.model('users', UserSchema);

export default User;
