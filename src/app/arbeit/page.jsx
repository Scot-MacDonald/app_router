import ArbeitCard from "@/components/arbeitCard/arbeitCard";
import styles from "./arbeit.module.css";
import { getArbeits } from "@/lib/data";

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

export default async function ArbeitPage() {
  //FETCH DATA FROM AN API
  // const posts = await getData();
  //FETCH DATA without AN API
  const arbeits = await getArbeits();

  return (
    <div className={styles.container}>
      {arbeits.map((arbeit) => (
        <div className={styles.post} key={arbeit.id}>
          <ArbeitCard arbeit={arbeit} />
        </div>
      ))}
    </div>
  );
}
