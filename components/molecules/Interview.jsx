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
      <h1>{interview.name}</h1>
      <p>{interview.role}</p>
      {interview.image && (
        <img src={urlFor(interview.image)} alt="portret image" />
      )}
      <p>{interview.quote}</p>
      {/* line hr */}

      <PortableText value={interview.interviewText} />
      {/* Line hr */}
      <div>
        {interview.mail && (
          <div className="flex items-center">
            <MdEmail />
            <Link href="/">
              <a>{interview.mail}</a>
            </Link>
          </div>
        )}
        {interview.phone && (
          <div className="flex items-center">
            <FaPhoneAlt />
            <Link href="/">
              <a>{interview.phone}</a>
            </Link>
          </div>
        )}
        <div className="flex">
          {interview.linkedin && (
            <Link target="_blank" href={interview.linkedin}>
              <a>
                <BsLinkedin />
              </a>
            </Link>
          )}
          {interview.twitter && (
            <Link target="_blank" href={interview.twitter}>
              <a>
                <BsTwitter />
              </a>
            </Link>
          )}
          {interview.instagram && (
            <Link target="_blank" href={interview.instagram}>
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
