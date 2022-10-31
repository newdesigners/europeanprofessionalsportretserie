import React from "react";
import { urlFor } from "../../lib/client";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter, BsLinkedin } from "react-icons/bs";

export function Footer({ footer, page }) {
  return (
    <footer className="bg-secondary text-white ">
      <div className=" flex justify-between pt-4 px-4 lg:px-8 lg:pt-8">
        <div>
          <ul className="flex flex-col">
            <Link href="/#stories">
              <a className="text-Phone/buttonlarge border-b w-fit mb-4 lg:mb-8 lg:text-Desktop/Label">
                {page[1].title}
              </a>
            </Link>
            <Link href="/about">
              <a className="text-Phone/buttonlarge border-b w-fit lg:text-Desktop/Label">
                {page[0].title}
              </a>
            </Link>
          </ul>
          {/* contact us */}
          <p className="pt-8 text-Phone/Label lg:text-Desktop/Label">
            {footer.contact}
          </p>
          <Link href="/">
            <a>
              <MdEmail className="h-6 w-6 lg:h-8 lg:w-8 lg:text-Desktop/Label" />
            </a>
          </Link>
          {/* follow us */}
          <p className="pt-4 text-Phone/Label lg:text-Desktop/Label lg:pt-8">
            {footer.volgOns}
          </p>
          <div className="flex pt-2">
            <Link href="/">
              <a className="pr-8">
                <BsTwitter className="h-6 w-6 lg:h-8 lg:w-8" />
              </a>
            </Link>
            <Link href="/">
              <a className="pr-8">
                <BsLinkedin className="h-6 w-6 lg:h-8 lg:w-8" />
              </a>
            </Link>
            <Link href="/">
              <a className="pr-8">
                <FiInstagram className="h-6 w-6 lg:h-8 lg:w-8" />
              </a>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-end">
          {/* logo's */}
          {footer.logos.map((logo) => (
            <img
              key={logo._key}
              src={urlFor(logo)}
              alt="logo"
              className="pb-8 last:pb-0"
            />
          ))}
        </div>
      </div>
      <p className="pb-8 text-center pt-20 text-Phone/Labelsmall lg:text-Desktop/Label lg:pt-0">
        {footer.copyrightText}
      </p>
    </footer>
  );
}
