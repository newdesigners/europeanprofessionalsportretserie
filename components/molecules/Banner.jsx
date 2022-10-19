import { urlFor } from "../../lib/client";

export function Banner({ banner }) {
  return (
    <>
      <img src={urlFor(banner[0].bannerImage)} alt="banner image" />
      <span>{banner[0].text}</span>
    </>
  );
}
