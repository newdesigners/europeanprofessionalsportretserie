import React from "react";
import { urlFor } from "../../lib/client";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter, BsLinkedin } from "react-icons/bs";

export function Footer({ footer, page }) {
  return (
    <div className="bg-secondary text-white">
      <div className=" flex justify-evenly pt-4 ">
        <div>
          <ul className="flex flex-col">
            <Link href="/">
              <a className="text-Phone/buttonlarge">{page[1].title}</a>
            </Link>{" "}
            <Link href="/">
              <a className="text-Phone/buttonlarge">{page[0].title}</a>
            </Link>
          </ul>
          {/* contact us */}
          <p className="pt-8">{footer.contact}</p>
          <Link href="/">
            <a>
              <MdEmail className="h-6 w-6" />
            </a>
          </Link>
          {/* follow us */}
          <p className="pt-4">{footer.volgOns}</p>
          <div className="flex pt-2">
            <Link href="/">
              <a className="pr-8">
                <BsTwitter className="h-6 w-6" />
              </a>
            </Link>
            <Link href="/">
              <a className="pr-8">
                <BsLinkedin className="h-6 w-6" />
              </a>
            </Link>
            <Link href="/">
              <a className="pr-8">
                <FiInstagram className="h-6 w-6" />
              </a>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-end">
          {/* logo's */}
          {footer.logos.map((logo) => (
            <img key={logo._key} src={urlFor(logo)} alt="logo" />
          ))}
        </div>
      </div>
      <p className="pb-8 text-center pt-20">{footer.copyrightText}</p>
    </div>
  );
}
