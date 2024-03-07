import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

//FETCH DATA WITH AN API
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if (!res.ok) {
//     throw new Error("something went wrong");
//   }
//   return res.json();
// };

const SinglePostPage = async ({ params }) => {
  const { slug } = params;
  //FETCH DATA FROM AN API
  // const post = await getData(slug);
  //FETCH DATA without AN API
  const post = await getPost(slug);
  console.log(post);
  return (
    <div className="flex pl-6 pr-36 gap-24">
      {post.img && (
        <div className={styles.imgContainer}>
          <Image src={post.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {/* {post && (
      <Suspense fallback={<div>Loading...</div>}>
        <PostUser userId={post.userId} />
      </Suspense>
    )} */}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>

            <span className={styles.detailValue}>01.10.1919</span>
          </div>
        </div>
        <div className={styles.content}>{post?.desc}</div>
        {post.main && (
          <div className={styles.main}>
            {post.main.map((item, index) => (
              <p key={index} className={styles.mainItem}>
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default SinglePostPage;
