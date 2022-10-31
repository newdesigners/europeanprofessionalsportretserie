import React from "react";
import { urlFor } from "../../lib/client";

import { ButtonSmall } from "../atoms/ButtonSmall";

export function InterviewPreview({ interview, page }) {
  return (
    <>
      <div
        className="flex flex-col w-36 h-96 lg:w-auto lg:h-[672px] items-center justify-between"
        key={interview.id}
      >
        <div>
          {interview.image && (
            <img
              src={urlFor(interview.image)}
              alt={interview.image.alt ? interview.image.alt : "portret image"}
              className=" h-44 object-contain lg:h-[432px] lg:object-cover"
            />
          )}

          {interview.quote && (
            <p className="text-Phone/Quote text-ellipsis overflow-hidden font-merriweather mt-2 pb-2 text-grey-80 text-center lg:text-Desktop/Quote ">
              {interview.quote}
            </p>
          )}
        </div>

        <ButtonSmall
          text={page[1].buttonReadStory}
          url={`/stories/${interview.slug?.current}`}
        />
      </div>
    </>
  );
}
