const mongoose = require("mongoose");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

const connectDB = async () => {
  await mongoose.connect(DB || process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  });

  console.log("MongoDB Connected");
};

module.exports = connectDB;
