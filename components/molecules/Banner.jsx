import { urlFor } from "../../lib/client";
import { IoIosArrowDropdown } from "react-icons/io";

export function Banner({ banner }) {
  return (
    <div className="relative">
      <img
        src={urlFor(banner[0].bannerImage)}
        alt="banner image"
        className="h-[42rem] w-auto object-center object-cover relative"
      />
      <div className="absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-center flex flex-col items-center">
        <span className="font-merriweather text-Phone/Header1 text-white">
          {banner[0].text}
        </span>
        <span className="font-merriweather text-Phone/Header1 text-primary italic ">
          {banner[0].italicText}
        </span>
        <IoIosArrowDropdown className="text-white h-12 w-12 mt-12" />
      </div>
    </div>
  );
}
