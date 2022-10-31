import { urlFor } from "../../lib/client";
import { IoIosArrowDropdown } from "react-icons/io";

export function Banner({ banner }) {
  return (
    <div className="relative lg:mx-8">
      <img
        src={urlFor(banner[0].bannerImage)}
        alt={banner[0].bannerImage.alt}
        className="m-auto h-[42rem] w-auto object-center object-cover relative lg:h-[47.25rem] lg:w-full"
      />
      <div className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-center flex flex-col items-center">
        <div className="flex flex-wrap justify-center">
          <span className="font-merriweather text-Phone/Header1 text-white lg:text-Desktop/Header1">
            {banner[0].text}
            {/* {banner[0].text.replace(/ /g, "\u00A0")} */}
          </span>

          <span className="font-merriweather text-Phone/Header1 text-primary italic lg:text-Desktop/Header1">
            {banner[0].italicText}
          </span>
        </div>
        <IoIosArrowDropdown className="text-white h-12 w-12 mt-12 lg:h-14 lg:w-14" />
      </div>
    </div>
  );
}
