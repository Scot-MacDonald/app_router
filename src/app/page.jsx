import styles from "./home.module.css";
import Image from "next/image";
import { getPosts } from "@/lib/data";
import { getArbeits } from "@/lib/data";
import { getDates } from "@/lib/data";

import PostCard from "@/components/postCard/postCard";
import ArbeitCard from "@/components/arbeitCard/arbeitCard";
import VideoPlayerWrapper from "@/components/VideoPlayerWrapper/videoPlayerWrapper";
import DateCard from "@/components/dateCard/dateCard";

export default async function Home() {
  const posts = await getPosts();
  const arbeits = await getArbeits();
  const dates = await getDates();
  return (
    <>
      <div className={styles.container}>
        <section className={styles.textContainer}>
          <div className={styles.backgroundImage}>
            <Image
              src="/hero.jpg"
              alt="Background Image"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className={styles.overlay}></div>
          </div>

          {/* <h1 className={styles.title}>International Allende</h1> */}

          <h2 className={styles.desc}>
            In the early 1970s, the left-wing alliance Unidad Popular ruled
            Chile for 1000 days. Together with the population, it worked on its
            very own democratic socialism. Supporters from all over the world
            were also involved. This website is dedicated to them.
          </h2>
        </section>

        <section className={styles.postContainer}>
          <div className={styles.details}>
            <h2 className={styles.postTitle}>Life journeys</h2>
            <h2 className={styles.desciption}>
              Here we tell the stories of people from all over the world who
              lived in Chile during Salvador Allende's reign. Discover
              well-known and never-before-heard stories.
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {posts.map((post) => (
              <div className="" key={post.id}>
                <PostCard post={post} />
              </div>
            ))}
          </div>
        </section>

        <section className={styles.arbeitContainer}>
          <div className={styles.details}>
            <h2 className={styles.postTitle}>How we worked.</h2>
            <h2 className={styles.desciption}>
              Was können wir vom Sozialismus hecho en Chile lernen?
              <br /> Unsere Artikelserie erkundet auf 10 wichtigen „Baustellen“
              der Unidad Popular den chilenischen Weg zum Sozialismus und zeigt,
              wie sich Internationalist*innen daran beteiligten.
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-10 ">
            {arbeits.map((arbeit) => (
              <div className="" key={arbeit.id}>
                <ArbeitCard arbeit={arbeit} />
              </div>
            ))}
          </div>
        </section>

        <section className={styles.eventsContainer}>
          <div className={styles.details}>
            <h2 className={styles.postTitle}>Events</h2>
            <h2 className={styles.desciption}>
              Here we tell the stories of people from all over the world who
              lived in Chile during Salvador Allende's reign. Discover
              well-known and never-before-heard stories.
            </h2>
          </div>
          <div className="flex justify-center">
            <table class="table-auto w-[100%] text-left ">
              <thead className="thead text-white">
                <tr>
                  <th className="">#</th>
                  <th>Event</th>
                  <th>Country</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.tableRow}>
                  <td>1</td>
                  <td>
                    Together for a new Chile." Launch event of Allendes
                    Internationale
                  </td>
                  <td>Berlin</td>
                  <td>06.09.2018</td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>2</td>
                  <td>Santiago 1970-2030. interventions from the future. </td>
                  <td>Santiago</td>
                  <td>26.04.2019</td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>3</td>
                  <td>
                    Let's make history! A debate on the internationalism of the
                    Unidad Popular
                  </td>
                  <td>Santiago</td>
                  <td>27.04.2019</td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>4</td>
                  <td>
                    Memories of resistance. Resistances of memory (in
                    cooperation with the Ibero-American Institute)
                  </td>
                  <td>Berlin</td>
                  <td>17.06.2019</td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>5</td>
                  <td>
                    1000 days | 6 views. Photographs from the Chile of the
                    Unidad Popular.
                  </td>
                  <td>Berlin</td>
                  <td>05.09.2019</td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>6</td>
                  <td>
                    "Every life is a world" A cinematic biography by Víctor Pey.
                  </td>
                  <td>Santiago</td>
                  <td>07.09.2019</td>
                </tr>
                <tr className={styles.tableRow}>
                  <td>7</td>
                  <td>
                    Politics in construction The eventful history of the
                    Gabriela Mistral Cultural Center
                  </td>
                  <td> Berlin</td>
                  <td>12.09.2019</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className={styles.arbeitContainer}>
          <div className={styles.details}>
            <h2 className={styles.postTitle}>How we worked.</h2>
            <h2 className={styles.desciption}>
              Was können wir vom Sozialismus hecho en Chile lernen?
              <br /> Unsere Artikelserie erkundet auf 10 wichtigen „Baustellen“
              der Unidad Popular den chilenischen Weg zum Sozialismus und zeigt,
              wie sich Internationalist*innen daran beteiligten.
            </h2>
          </div>
          <div className="flex-col">
            {dates.map((date) => (
              <div className="" key={date.id}>
                <DateCard date={date} />
              </div>
            ))}
          </div>
        </section>
        <section className={styles.videoContainer}>
          <VideoPlayerWrapper />
        </section>
      </div>
    </>
  );
}
