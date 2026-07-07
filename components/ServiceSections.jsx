import { PortableText } from "next-sanity";
import ServiceImage from "./ServiceImage";
import { urlFor } from "../sanity/image";

export default function ServiceSections({ sections }) {
  if (!sections?.length) return null;

  return (
    <div className="mt-20 space-y-6">
      {sections.map((s, i) => {
        const flip = i % 2 === 1;

const image = (
          <div className="overflow-hidden rounded-2xl shadow-soft">
            {s.image?.asset && (
              <img
                src={urlFor(s.image).width(900).auto("format").url()}
                alt={s.heading || ""}
                className="h-auto w-full"
              />
            )}
          </div>
        );

        const text = (
          <div>
            {s.heading && (
              <h2
                className={`font-serif text-2xl md:text-3xl ${
                  s.highlighted ? "text-white" : "text-deep"
                }`}
              >
                {s.heading}
              </h2>
            )}
            {s.text && (
              <div
                className={`mt-4 space-y-4 leading-relaxed ${
                  s.highlighted ? "text-porcelain/90" : "text-ink"
                }`}
              >
                <PortableText value={s.text} />
              </div>
            )}
          </div>
        );

        return (
          <section
            key={i}
            className={`rounded-3xl ${
              s.highlighted ? "bg-deep px-6 py-10 md:p-12" : "py-4"
            }`}
          >
            <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
              <div className={flip ? "md:order-2" : ""}>{image}</div>
              <div className={flip ? "md:order-1" : ""}>{text}</div>
            </div>
          </section>
        );
      })}
    </div>
  );
}