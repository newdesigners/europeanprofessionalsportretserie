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
    <section>
      {interview?.name && (
        <h2 className="text-Phone/header2 font-merriweather-bold text-secondary">
          {interview.name}
        </h2>
      )}
      {interview?.role && (
        <h3 className="text-Phone/header3 text-grey-60 font-merriweather">
          {interview.role}
        </h3>
      )}
      {interview?.image && (
        <img
          src={urlFor(interview.image)}
          alt={interview.image.alt ? interview.image.alt : "portret image"}
        />
      )}
      <p className="text-Phone/Quote text-grey-80 font-merriweather">
        {interview?.quote}
      </p>
      {/* line hr */}
      <hr />

      <span className="font-merriweather text-Phone/Label text-grey-80 prose">
        <PortableText value={interview?.interviewText} />
      </span>
      {/* Line hr */}
      <hr />
      <div>
        {interview?.mail && (
          <div className="flex items-center">
            <MdEmail />
            <Link href="/">
              <a>{interview?.mail}</a>
            </Link>
          </div>
        )}
        {interview?.phone && (
          <div className="flex items-center">
            <FaPhoneAlt />
            <Link href="/">
              <a>{interview?.phone}</a>
            </Link>
          </div>
        )}
        <div className="flex">
          {interview?.linkedin && (
            <Link target="_blank" href={interview?.linkedin}>
              <a>
                <BsLinkedin />
              </a>
            </Link>
          )}
          {interview?.twitter && (
            <Link target="_blank" href={interview?.twitter}>
              <a>
                <BsTwitter />
              </a>
            </Link>
          )}
          {interview?.instagram && (
            <Link target="_blank" href={interview?.instagram}>
              <a>
                <FiInstagram />
              </a>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
