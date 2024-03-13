import styles from "./scrollers.module.css";
import DateCard from "@/components/dateCard/dateCard";

import { getDates } from "@/lib/data";

export default async function Scrollers() {
  const dates = await getDates();
  return (
    <>
      <div className="flex h-full">
        <div className={styles.scrollableColumn}>
          {dates.map((date) => (
            <div className="" key={date.id}>
              <DateCard date={date} />
            </div>
          ))}
        </div>
        <div className={styles.stickyColumn}></div>
      </div>
    </>
  );
}
