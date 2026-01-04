import Footer from "@/components/sections/footer";
import { Item } from "@/components/sections/format_item";
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

      <section className="text-justify mt-8">
        <p>
          Currently at NUFER at UTFPR as a Undergraduate Research Assistant,
          working with the development of{" "}
          <b>computational geometry algorithms</b> on different processes in the
          context of <b>3D printing</b>, mainly focused on{" "}
          <b>support structures generation algorithms</b> (for model supporting
          process) and <b>tool paths generation algorithms</b> (for model
          filling process).
        </p>
      </section>

      <section className="w-full mt-8 text-justify">
        <h2 className="font-bold italic">Publications</h2>

        <ol className="list-disc">
          {publications.map((p) => (
            <Item key={p.slug} informations={p} className={"not-last:mb-6"} />
          ))}
        </ol>
      </section>

      <section className="w-full mt-8 text-justify">
        <h2 className="font-bold italic">Talk presentations</h2>

        <ol className="list-disc">
          {presentations.map((p) => (
            <Item key={p.slug} informations={p} className={"not-last:mb-6"} />
          ))}
        </ol>
      </section>

      <section className="w-full mt-8 text-justify">
        <h2 className="font-bold italic">Academic projects</h2>
        <p className="mb-4">
          List of some academic projects (as defined as &quot;any academic work
          done during the undergraduate/graduate degree&quot;) for interest
          and/or grade purposes.
        </p>

        <ol className="list-disc">
          {works.map((p) => (
            <Item key={p.slug} informations={p} className={"not-last:mb-6"} />
          ))}
        </ol>
      </section>

      <Footer />
    </>
  );
}
