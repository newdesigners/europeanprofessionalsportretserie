import React from "react";
import { urlFor } from "../../lib/client";
import { PortableText } from "@portabletext/react";
import { MdEmail } from "react-icons/md";
import { FiInstagram } from "react-icons/fi";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

export function Interview({ interview }) {
  return (
    <section className="pt-8 mx-4">
      {interview?.name && (
        <h2 className="text-Phone/header2 font-merriweather-bold text-secondary text-center">
          {interview.name}
        </h2>
      )}
      {interview?.role && (
        <h3 className="text-Phone/header3 text-grey-60 font-merriweather pt-2 text-center">
          {interview.role}
        </h3>
      )}

      <div className="relative py-4">
        <div className="bg-secondary h-60 w-48 absolute "></div>
        {interview?.image && (
          <img
            className="relative m-4 "
            src={urlFor(interview.image)}
            alt={interview.image.alt ? interview.image.alt : "portret image"}
            width={192}
            height={240}
          />
        )}
      </div>

      {interview?.quote && (
        <p className="text-Phone/Quote text-grey-80 font-merriweather text-center pb-6">
          {interview?.quote}
        </p>
      )}

      {/* line hr */}
      <hr className="text-grey-60 pb-4" />

      <span className="font-merriweather text-Phone/Label text-grey-80 prose">
        <PortableText value={interview?.interviewText} />
      </span>
      {/* Line hr */}
      <hr className="py-4" />
      <div>
        {interview?.mail && (
          <div className="flex items-center">
            <MdEmail className="h-6 w-6 mr-2" />
            <Link href="/">
              <a>{interview?.mail}</a>
            </Link>
          </div>
        )}
        {interview?.phone && (
          <div className="flex items-center py-2">
            <FaPhoneAlt className="h-6 w-6 mr-2" />
            <Link href="/">
              <a>{interview?.phone}</a>
            </Link>
          </div>
        )}
        <div className="flex pb-12">
          {interview?.linkedin && (
            <Link target="_blank" href={interview?.linkedin}>
              <a className="pr-4">
                <BsLinkedin className="h-6 w-6" />
              </a>
            </Link>
          )}
          {interview?.twitter && (
            <Link target="_blank" href={interview?.twitter}>
              <a className="px-4">
                <BsTwitter className="h-6 w-6" />
              </a>
            </Link>
          )}
          {interview?.instagram && (
            <Link target="_blank" href={interview?.instagram}>
              <a>
                <FiInstagram className="h-6 w-6" />
              </a>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
