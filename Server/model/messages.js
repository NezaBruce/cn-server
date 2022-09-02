const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "chat" },
    readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "user" }],
  },
  { timestamps: true, versionKey: false }
);

const Message = mongoose.model("message", messageSchema);
module.exports = Message;

// npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string