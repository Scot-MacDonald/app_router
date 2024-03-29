import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    main: {
      type: [String], // Define it as an array of strings
      required: false,
    },
    img: {
      type: String,
    },
    userId: {
      type: String,
      required: false,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const arbeitSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    // desc: {
    //   type: String,
    //   required: true,
    // },
    img: {
      type: String,
    },
    userId: {
      type: String,
      required: false,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const dateSchema = new mongoose.Schema(
  {
    year: {
      type: String,
      required: false,
    },
    week: {
      type: String,
      required: false,
    },
    userId: {
      type: String,
      required: false,
    },
    slug: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,

      unique: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
export const Arbeit =
  mongoose.models?.Arbeit || mongoose.model("Arbeit", arbeitSchema);
export const Date = mongoose.models?.Date || mongoose.model("Date", dateSchema);
