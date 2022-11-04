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
    <>
      <section className="pt-8 mx-4 lg:grid lg:grid-cols-8 lg:gap-x-8 lg:auto-cols-fr lg:my-16 lg:pt-0">
        <div className="lg:col-start-2 lg:col-end-5">
          {interview?.name && (
            <h2 className="text-Phone/header2 font-merriweather-bold text-secondary text-center lg:text-Desktop/Header2 lg:text-left">
              {interview.name}
            </h2>
          )}
          {interview?.role && (
            <h3 className="text-Phone/header3 text-grey-60 font-merriweather pt-2 text-center lg:text-Desktop/Header3 lg:text-left">
              {interview.role}
            </h3>
          )}
          <hr className="text-grey-60 pb-4 hidden lg:block" />
        </div>

        <div className="lg:col-start-2 lg:col-end-5 hidden lg:block">
          <span className="font-merriweather text-Phone/Label text-grey-80 prose">
            <PortableText value={interview?.interviewText} />
          </span>
          <hr className="py-4 lg:hidden" />
        </div>

        <div className="lg:col-start-5 lg:col-end-8">
          <div className="flex justify-center">
            <div className="relative py-4">
              <div className="bg-secondary h-60 w-48 absolute lg:w-[400px] lg:h-[33.438rem]"></div>
              {interview?.image && (
                <img
                  className="relative m-4 h-[240px] w-[192px] object-cover lg:h-[33.438rem] lg:w-[400px] lg:m-8"
                  src={urlFor(interview.image)}
                  alt={
                    interview.image.alt ? interview.image.alt : "portret image"
                  }
                />
              )}
            </div>
          </div>
          {interview?.quote && (
            <p className="text-Phone/Quote text-grey-80 font-merriweather text-center pb-6 lg:text-Desktop/Quote">
              {interview?.quote}
            </p>
          )}
          <hr className="text-grey-60 pb-4 lg:hidden" />
        </div>

        <div className="lg:col-start-2 lg:col-end-5 lg:hidden">
          <span className="font-merriweather text-Phone/Label text-grey-80 prose">
            <PortableText value={interview?.interviewText} />
          </span>
        </div>

        <hr className="py-4 lg:hidden" />
        <hr className="hidden lg:block lg:col-start-2 lg:col-end-8 lg:py-4" />
        <div className="lg:col-start-2 lg:col-end-8 lg:flex lg:flex-row lg:justify-around lg:items-center">
          <div>
            {interview?.mail && (
              <div className="flex items-center">
                <MdEmail className="h-6 w-6 mr-2 text-secondary" />
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
          </div>
          <div className="flex pb-12 lg:pb-0">
            {interview?.linkedin && (
              <Link target="_blank" href={interview?.linkedin}>
                <a>
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
      {interview.meerVerhalen && (
        <h2 className="text-Phone/header2 lg:text-Desktop/Header2 font-merriweather text-center mt-12 lg:mt-16">
          {interview.meerVerhalen}
        </h2>
      )}
    </>
  );
}
