const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: { type: Schema.Types.String, required: true },
  email: { type: Schema.Types.String, required: true },
  password: { type: Schema.Types.String, required: true },
  phoneNo: { type: Schema.Types.String, required: true },
  address: { type: Schema.Types.String, required: true },
});

module.exports = model("User", userSchema);
