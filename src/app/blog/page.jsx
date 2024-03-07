import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

//FETCH DATA FROM AN API
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("something went wrong");
//   }
//   return res.json();
// };

export default async function BlogPage() {
  //FETCH DATA FROM AN API
  // const posts = await getData();
  //FETCH DATA without AN API
  const posts = await getPosts();

  return (
    <div className="p-20 grid grid-cols-4 gap-4">
      {posts.map((post) => (
        <div className="" key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
