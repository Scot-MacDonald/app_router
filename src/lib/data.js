import { Post, User, Arbeit } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const getArbeits = async () => {
  try {
    connectToDb();
    const arbeits = await Arbeit.find();
    return arbeits;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Arbeits!");
  }
};

export const getArbeit = async (slug) => {
  try {
    connectToDb();
    const arbeit = await Arbeit.findOne({ slug });
    return arbeit;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Arbeit!");
  }
};
