const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/exercise-basic", {
    // playground는 DB라는 개념
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("DB에 연결되었습니다!"))
  .catch(error => console.error(error));

const courseSchema = new mongoose.Schema();

const Course = mongoose.model("Course", courseSchema);

Course.find(
  { isPublished: true, tags: { $in: ["backend"] } },
  { name: 1, author: 1 }
)
  .sort({ name: 1 })
  .then(result => console.log(result))
  .catch(error => console.log(error));

Course.find(
  { isPublished: true, tags: { $in: ["backend", "frotend"] } },
  { name: 1, price: 1 }
)
  .sort({ price: -1 })
  .then(result => console.log(result))
  .catch(error => console.log(error));

Course.find({ price: { $gte: 15 }, name: { $regex: /js/i } })
  .then(result => console.log(result))
  .catch(error => console.log(error));
