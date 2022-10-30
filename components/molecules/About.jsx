import { PortableText } from "@portabletext/react";
import React from "react";
import { urlFor } from "../../lib/client";

export function About({ about }) {
  return (
    <>
      <div className="relative flex justify-center">
        {about.landingFoto && (
          <img
            src={urlFor(about.landingFoto)}
            alt={about.landingFoto.alt ? about.landingFoto.alt : "landing foto"}
            className="h-80 object-contain "
          />
        )}
        {about.title && (
          <h2 className="text-Phone/header2 font-merriweather-bold text-secondary text-center absolute bg-white bottom-0 py-4 mx-4 w-11/12">
            {about.title}
          </h2>
        )}
      </div>
      <div className="mx-4 bg-white pt-12">
        {about.heading && (
          <h3 className="text-Phone/header3 font-merriweather text-secondary border-b w-fit pb-2 ">
            {about.heading}
          </h3>
        )}
        {about.onsVerhaal1 && (
          <div className="py-4 prose text-Phone/Label text-secondary font-merriweather">
            <PortableText value={about.onsVerhaal1} />
          </div>
        )}
        {about.foto && <img src={urlFor(about.foto)} alt="foto" />}
        {about.onsVerhaal2 && (
          <div className="py-4 text-Phone/Label text-secondary font-merriweather">
            <PortableText value={about.onsVerhaal2} />
          </div>
        )}
        {about.wieZitErAchterHetProject && (
          <h3 className="text-Phone/header3 font-merriweather text-secondary border-b w-fit pb-2">
            {about.wieZitErAchterHetProject}
          </h3>
        )}
        {about.personImage && (
          <img
            src={urlFor(about.personImage)}
            alt="foto remmelt"
            className="h-32 w-32 rounded-full my-4"
          />
        )}
        {about.name && (
          <h3 className="font-merriweather text-Phone/header3 text-grey-60 pb-4">
            {about.name}
          </h3>
        )}
        {about.persoonAchterHetVerhaal && (
          <div className="prose text-Phone/Label font-merriweather">
            <PortableText value={about.persoonAchterHetVerhaal} />
          </div>
        )}
        {/* volgende stuk */}
        <div className="py-11">
          <h3 className="text-Phone/header3 font-merriweather text-secondary border-b border-grey-60 w-fit pb-2">
            {about.metDankAan}
          </h3>
          {about.brandImages.map((logo) => (
            <img src={urlFor(logo)} alt="brand logos" key={logo._key} />
          ))}
        </div>
        {about.wilJeJouwVerhaalDelen && (
          <h3 className="text-Phone/header3 font-merriweather text-secondary border-b border-grey-60 w-fit pb-2">
            {about.wilJeJouwVerhaalDelen}
          </h3>
        )}
        <div className="pb-8 pt-4">
          <PortableText value={about.contact} />
        </div>
      </div>
    </>
  );
}
