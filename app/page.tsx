import Footer from "@/components/sections/footer";
import { Item, News } from "@/components/sections/format_item";
import { getContents } from "./view/utils";

export default function Page() {
  const contents = getContents();

  const publications = contents
    .filter((c) => c.metadata.type == "Publication")
    .sort(
      (a, b) =>
        b.metadata.publishedAt.getTime() - a.metadata.publishedAt.getTime()
    );
  const presentations = contents
    .filter((c) => c.metadata.type == "Presentation")
    .sort(
      (a, b) =>
        b.metadata.publishedAt.getTime() - a.metadata.publishedAt.getTime()
    );
  const works = contents
    .filter((c) => c.metadata.type == "Work")
    .sort(
      (a, b) =>
        b.metadata.publishedAt.getTime() - a.metadata.publishedAt.getTime()
    );

  const news = contents
    .filter((c) => c.metadata.type == "News")
    .sort(
      (a, b) =>
        b.metadata.publishedAt.getTime() - a.metadata.publishedAt.getTime()
    );

  return (
    <>
      <header className="flex flex-col items-center text-center mt-10 md:mt-40 w-full">
        <h1 className="font-bold text-3xl md:text-8xl tracking-widest uppercase">
          Portfolio
        </h1>

        <p className="text-2xl md:text-3xl uppercase mt-6">A semester review</p>

        <p className="uppercase my-4">of</p>

        <p className="uppercase text-2xl md:text-3xl">
          Academic publications and works
        </p>

        <hr aria-hidden className="separator my-2" />

        <p className="font-bold text-xl md:text-3xl uppercase">
          I. — A succinct overview
        </p>

        <p className="uppercase mt-4 text-xl">By Hirade K. Y.</p>
      </header>

      <section className="text-justify mt-8 flex flex-col gap-2">
        <p>
          Currently an Undergraduate Research Assistant at Additive Manufacturing and Tooling Group (NUFER) at the Department of Mechanical Engineering at the Federal University of Technology of Paraná (UTFPR) working with the development of{" "}
          <b>computational geometry algorithms</b> on the light of the generation of support structures and tool paths for additive manufacturing processes.
        </p>
        <p>
          Also, a volunteer at the Medical Computer Vision and Robotics Lab (MEDCVR) at the Department of Mathematical and Computational Sciences at the University of Toronto Mississauga (UTM) working with the development of <b>sim2real visual-based reinforcement learning</b> pipelines for autonomous robotic manipulation tasks.
        </p>
        <p>
          Finally, a volunteer at the Department of Informatics at the Federal University of Technology of Paraná (UTFPR) working with Prof. Dr. Gustavo A. Giménez-Lugo on the <b>studies of different theories of cybernetics from different cultures</b>.
        </p>
      </section>

      <p className="font-bold text-lg md:text-3xl uppercase text-center mt-10 w-full">
        II. — Publications & Talk presentations
      </p>

      <section className="w-full mt-8 text-justify">
        <h2 className="font-bold italic">Publications</h2>

        <ol className="list-disc">
          {publications.map((p) => (
            <Item key={p.metadata.publishedAt.getTime()} informations={p} className={"not-last:mb-6"} />
          ))}
        </ol>
      </section>

      <section className="w-full mt-8 text-justify">
        <h2 className="font-bold italic">Talk presentations</h2>

        <ol className="list-disc">
          {presentations.map((p) => (
            <Item key={p.metadata.publishedAt.getTime()} informations={p} className={"not-last:mb-6"} />
          ))}
        </ol>
      </section>

      <p className="font-bold text-lg md:text-3xl uppercase text-center mt-10 w-full">
        III. — News
      </p>

      <section className="w-full mt-8 text-justify">
        <ol className="list-none">
          {news.map((p) => (
            <News key={p.metadata.publishedAt.getTime()} informations={p} className={"not-last:mb-6"} />
          ))}
        </ol>
      </section>

      <p className="font-bold text-lg md:text-3xl uppercase text-center mt-10 w-full">
        IV. — Miscellaneous
      </p>

      <section className="w-full mt-8 text-justify">
        <h2 className="font-bold italic">Academic projects</h2>
        <p className="mb-4">
          List of some academic projects (as defined as &quot;any academic work
          done during the undergraduate/graduate degree&quot;) for interest
          and/or grade purposes.
        </p>

        <ol className="list-disc">
          {works.map((p) => (
            <Item key={p.metadata.publishedAt.getTime()} informations={p} className={"not-last:mb-6"} />
          ))}
        </ol>
      </section>

      <Footer />
    </>
  );
}
