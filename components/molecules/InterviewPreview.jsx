import React from "react";
import { urlFor } from "../../lib/client";
import { PortableText } from "@portabletext/react";
import { ButtonSmall } from "../atoms/ButtonSmall";
import Link from "next/link";

export function InterviewPreview({ interview, page }) {
  return (
    <>
      <div
        className="flex flex-col w-36 h-96 lg:w-auto lg:h-[672px] items-center lg:justify-between justify-evenly"
        key={interview.id}
      >
        <div className="lg:flex lg:justify-center lg:flex-col">
          <Link href={`/stories/${interview.slug?.current}`}>
            {interview.image && (
              <img
                src={urlFor(interview.image)}
                alt={
                  interview.image.alt ? interview.image.alt : "portret image"
                }
                className=" h-44 object-cover lg:h-[432px] m-auto xl:w-[448px]"
              />
            )}
          </Link>

          {interview.quote && (
            <p className="text-Phone/Quote line-clamp-3 font-merriweather mt-2 mb-2 text-grey-80 text-center lg:text-Desktop/Quote lg:mt-8 max-h-32 lg:max-h-20">
              {interview.quote}
            </p>
          )}
        </div>

        {interview.name && (
          <p className="hidden lg:inline-block text-Desktop/Label lg:font-merriweather lg:text-grey-60">
            {interview.name}
          </p>
        )}

        <ButtonSmall
          text={page[1].buttonReadStory}
          url={`/stories/${interview.slug?.current}`}
        />
      </div>
    </>
  );
}
