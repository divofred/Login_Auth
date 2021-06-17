const mongoose = require("mongoose");

const user = "user";
const DATABASE = `mongodb+srv://user:${user}@cluster0.fn4fc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// const DB = process.env.DATABASE.replace(
//   "<PASSWORD>",
//   process.env.DATABASE_PASSWORD
// );
const localDB = `mongodb://localhost:27017/node_auth`;

const connectDB = async () => {
  await mongoose.connect(DATABASE || process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });

  console.log("MongoDB Connected");
};

module.exports = connectDB;
