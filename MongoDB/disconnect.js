const mongoose = require("mongoose");
const { Schema, connect, model } = mongoose;
let con = null;

//IIFE async await 함수를 쓰려고!
(async () => {
  // 연결
  try {
    con = await connect(
      "mongodb://localhost/real",
      {
        useNewUrlParser: true
      }
    );

    // CREATE
    const userSchema = new Schema({
      name: String,
      email: { type: String, required: true, unique: true },
      nickname: String
    });
    const User = model("User", userSchema);
    const user1 = new User({
      name: "choongho",
      email: "pchyo92@gmail.com",
      nickname: "징크스 신"
    });
    const user2 = new User({
      name: "jaegyu",
      email: "gyu92@gmail.com",
      nickname: "몰가 충"
    });
    const res1 = await user1.save();
    const res2 = await user2.save();
    console.log(`저장결과: ${res1}, ${res2}`);

    // READ
    let users = await User.find();

    // UPDATE
    const updated = await User.updateOne(
      { _id: users[0]._id },
      { nickname: "징크스 충" }
    );
    console.log(`업데이트 결과: ${updated}`);

    // DELETE
    const deleted = await User.deleteOne({ _id: users[1]._id });

    users = await User.find();
    console.log(`최종결과: ${users}`);
  } catch (error) {
    console.error(error);
  } finally {
    // 연결과 CRUD가 성공적으로 끝났든 에러가 발생했든 상관없이
    //  마지막에는 disconnect 합니다.
    if (con) con.disconnect();
  }
})();
