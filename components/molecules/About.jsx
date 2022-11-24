import { PortableText } from "@portabletext/react";
import React from "react";
import { urlFor } from "../../lib/client";

export function About({ about }) {
  return (
    <div className="lg:grid lg:grid-cols-8 lg:gap-8 ">
      <div className="relative flex justify-center col-span-8">
        {about.landingFoto && (
          <img
            src={urlFor(about.landingFoto)}
            alt={about.landingFoto.alt ? about.landingFoto.alt : "landing foto"}
            className="h-80 object-cover lg:h-96 lg:w-screen lg:mx-8"
          />
        )}
        {about.title && (
          <h2 className="text-Phone/header2 font-merriweather-bold text-secondary text-center absolute bg-white bottom-0 py-4 mx-4 w-11/12 lg:text-Desktop/Header2 lg:py-8">
            {about.title}
          </h2>
        )}
      </div>
      <div className="mx-4 bg-white pt-12 lg:col-start-2 lg:col-end-8">
        {about.heading && (
          <h3 className="text-Phone/header3 font-merriweather text-secondary border-b w-fit pb-2 m-auto lg:text-Desktop/Header3">
            {about.heading}
          </h3>
        )}
        <div className="lg:flex lg:items-start">
          {about.onsVerhaal1 && (
            <div className="py-4 prose text-Phone/Label text-secondary font-merriweather lg:col-start-2 lg:col-end-4 lg:py-16 prose-a:text-primary md:m-auto lg:max-w-none">
              <PortableText value={about.onsVerhaal1} />
            </div>
          )}
          {about.foto && (
            <img
              src={urlFor(about.foto)}
              alt={about.foto.alt ? about.foto.alt : "foto"}
              className="lg:col-start-5 lg:col-end-8 md:m-auto"
            />
          )}
        </div>
        {about.onsVerhaal2 && (
          <div className="py-4 text-Phone/Label text-secondary font-merriweather prose-a:text-primary md:m-auto lg:m-0 prose lg:col-start-2 lg:col-end-8">
            <PortableText value={about.onsVerhaal2} />
          </div>
        )}
        {about.wieZitErAchterHetProject && (
          <h3 className="text-Phone/header3 font-merriweather text-secondary border-b w-fit pb-2 pt-10 m-auto lg:text-Desktop/Header3 lg:pb-4 lg:mb-12 lg:mt-20">
            {about.wieZitErAchterHetProject}
          </h3>
        )}
        <div className="lg:flex lg:items-center">
          {about.personImage && (
            <img
              src={urlFor(about.personImage)}
              alt={
                about.personImage.alt ? about.personImage.alt : "photo Remelt"
              }
              className="h-32 w-32 rounded-full my-4 mx-auto lg:h-60 lg:w-60 lg:p-4 2xl:p-0"
            />
          )}
          <div className="lg:flex lg:flex-col lg:items-start">
            {about.name && (
              <h3 className="font-merriweather text-Phone/header3 text-grey-60 pb-4 text-center lg:text-Desktop/Header3">
                {about.name}
              </h3>
            )}

            {about.persoonAchterHetVerhaal && (
              <div className="prose text-Phone/Label font-merriweather prose-a:text-primary md:m-auto">
                <PortableText value={about.persoonAchterHetVerhaal} />
              </div>
            )}
          </div>
        </div>

        <div className="py-11">
          <h3 className="text-Phone/header3 font-merriweather text-secondary border-b border-grey-60 w-fit pb-2 m-auto lg:text-Desktop/Header3 lg:pb-4">
            {about.metDankAan}
          </h3>
          <div className="grid gap-4 grid-cols-2 items-center justify-items-center mt-2 lg:flex lg:flex-wrap lg:justify-center lg:mt-8">
            {about.brandImages.map((logo) => (
              <img
                src={urlFor(logo)}
                alt={
                  about.brandImages?.alt
                    ? about.brandImages?.alt
                    : "brand images"
                }
                key={logo._key}
                className="max-h-20 w-auto px-8"
              />
            ))}
          </div>
        </div>
        {about.wilJeJouwVerhaalDelen && (
          <h3 className="text-Phone/header3 font-merriweather text-secondary border-b border-grey-60 w-fit pb-2 m-auto lg:text-Desktop/Header3 lg:mb-8 lg:mt-20">
            {about.wilJeJouwVerhaalDelen}
          </h3>
        )}
        <div className="pb-8 pt-4 text-center font-poppins lg:text-Desktop/Label lg:mb-16 prose-a:text-primary">
          <PortableText value={about.contact} />
        </div>
      </div>
    </div>
  );
}
