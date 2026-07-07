import Image from "next/image";
import { urlFor } from "../sanity/image";

export default function ServiceImage({
  image,
  alt,
  className = "object-cover",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
}) {
  if (!image?.asset) {
    return <div className="h-full w-full bg-sage-soft" aria-hidden="true" />;
  }

  // без рязане — само ограничаваме максималната широчина за бързина
  const src = urlFor(image).width(1000).auto("format").url();

  return (
    <Image
      src={src}
      alt={alt || ""}
      fill
      sizes={sizes}
      className={className}
    />
  );
}