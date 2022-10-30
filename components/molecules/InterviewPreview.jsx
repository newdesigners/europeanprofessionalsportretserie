import React from "react";
import { urlFor } from "../../lib/client";

import { ButtonSmall } from "../atoms/ButtonSmall";

export function InterviewPreview({ interview, page }) {
  return (
    <>
      <div className="flex flex-col w-36 h-96 items-center" key={interview.id}>
        {interview.image && (
          <img
            src={urlFor(interview.image)}
            alt={interview.image.alt ? interview.image.alt : "portret image"}
            className=" h-44 object-contain"
          />
        )}

        {interview.quote && (
          <p className="text-Phone/Quote font-merriweather mt-2 pb-2 text-grey-80 text-center">
            {interview.quote}
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
