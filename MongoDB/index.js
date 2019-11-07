const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/playground", {
    // playground는 DB라는 개념
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => console.log("DB에 연결되었습니다!"))
  .catch(error => console.error(error));

const authorSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true, lowercase: true }
});

const courseSchema = new mongoose.Schema({
  name: String,
  author: authorSchema,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: { type: Number, default: 10, max: 50 }
});

const Author = mongoose.model("Author", authorSchema);
const Course = mongoose.model("Course", courseSchema);
// RDB => Table, Collection

// Dpcument 추가하기 CREATE
async function create() {
  const author = new Author({
    name: "Park",
    email: "pchyo92@gmail.com"
  });
  const course = new Course({
    name: "Express API",
    author: author,
    tags: ["nodeJS", "express", "mongo"],
    isPublished: true,
    price: 30
  });

  const authorSaveResult = await author.save();
  console.log(authorSaveResult);
  const courseSaveResult = await course.save();
  console.log(courseSaveResult);
}
// create();
async function read() {
  try {
    const autors = await Author.find();
    console.log(autors);
    const courses = await Course.find({ isPublished: true })
      .limit(3)
      .sort({ name: -1 })
      .select({ name: 1, tags: 1 });
    console.log(courses);
    const courses2 = await Course.find(
      {
        price: { $gt: 15 },
        tags: { $in: ["nodejs", "express"] }
      },
      {
        name: 1,
        tags: 1,
        price: 1
      }
    );
    const courses3 = await Course.find()
      .where("isPublished")
      .equals(true)
      .where("tags")
      .in(["nodejs", "express"])
      .where("price")
      .gt(15)
      .sort("-name")
      .select("name tags price");
    console.log(courses2);
    console.log(courses3);
  } catch (error) {
    console.lof(error);
  }
}
// read();

// UPDATE
// 1. 데이터를 조회해서 수정한 후 저장
// 2. 바로 수정하는 방법
async function update() {
  // 첫 번째 방법
  const course = await Course.findById("5dc25975993e6b15a0bf01c9");
  course.name = "JSON Array";
  await course.save();
}
// update();
async function anotherUpdate() {
  const updated = await Course.updateMany({ isPublished: true }, { price: 15 });
  console.log(updated);
}
// anotherUpdate();

async function remove() {
  const deleted = await Course.deleteOne({ _id: "5dc36964c8a55d22c8849322" });
  console.log(deleted);
}
remove();
