import { PortableText } from "@portabletext/react";
import React from "react";
import { urlFor } from "../../lib/client";

export function About({ about }) {
  return (
    <>
      {about.landingFoto && <img src={urlFor(about.landingFoto)} alt="" />}
      <h2>{about.title}</h2>
      <h3>{about.heading}</h3>
      <PortableText value={about.onsVerhaal1} />
      {about.foto && <img src={urlFor(about.foto)} alt="foto" />}
      <PortableText value={about.onsVerhaal2} />

      {/* volgende stukje */}
      <h3>{about.wieZitErAchterHetProject}</h3>
      {/* line */}
      <img src={urlFor(about.personImage)} alt="foto remmelt" />
      <h3>{about.name}</h3>
      <PortableText value={about.persoonAchterHetVerhaal} />

      {/* volgende stuk */}
      <h3>{about.metDankAan}</h3>
      {about.brandImages.map((logo) => (
        <img src={urlFor(logo)} alt="brand logos" key={logo._key} />
      ))}

      <h3>{about.wilJeJouwVerhaalDelen}</h3>
      <PortableText value={about.contact} />
    </>
  );
}
