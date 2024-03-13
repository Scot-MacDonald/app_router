import DateCard from "@/components/dateCard/dateCard";
import styles from "./date.module.css";
import { getDates } from "@/lib/data";

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

export default async function DatePage() {
  //FETCH DATA FROM AN API
  // const posts = await getData();
  //FETCH DATA without AN API
  const dates = await getDates();

  return (
    <div className={styles.container}>
      {dates.map((date) => (
        <div className={styles.post} key={date.id}>
          <DateCard date={date} />
        </div>
      ))}
    </div>
  );
}
