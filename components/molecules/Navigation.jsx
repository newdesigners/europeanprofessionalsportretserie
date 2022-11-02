import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { urlFor } from "../../lib/client";
import { MdMenu, MdClose } from "react-icons/md";
import nlFlag from "/public/assets/flag/NL.svg";
import gbFlag from "/public/assets/flag/GB.svg";
import { clsx } from "clsx";

const navType = {
  homeContainer: "lg:absolute lg:mx-4 lg:px-0 lg:border-0",
  homeLinks: "text-white lg:border-b lg:border-b-white",
};

export function Navigation({
  navigation,
  page,
  secondaryNav = false,
  secondaryLink = false,
}) {
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const styles = {
    base: "lg:flex lg:justify-between z-10 w-full pt-6 px-4",
    secondaryNav: "lg:absolute lg:mx-4 lg:px-0 lg:border-0",
    secondaryLink: "lg:text-white lg:border-b lg:border-b-white",
  };

  return (
    <nav>
      {/* <div
        className={clsx(
          `lg:flex lg:justify-between z-10 w-full pt-6 px-4 ${
            open ? "" : "border-b-4 border-b-primary flex justify-between"
          }`
        )}
      > */}
      <div
        className={clsx(
          [styles.base, secondaryNav && styles.secondaryNav],
          open ? "" : "border-b-4 border-b-primary flex justify-between"
        )}
      >
        {!open && (
          <Link href="/">
            <a>
              <img src={urlFor(navigation[0].logo)} alt="Logo" />
            </a>
          </Link>
        )}
        <button onClick={handleToggle} className="lg:hidden">
          {!open ? (
            <MdMenu className="h-12 w-12 text-primary" />
          ) : (
            <MdClose className="h-12 w-12 absolute right-0 mr-4" />
          )}
        </button>

        <ul
          className={`${
            open
              ? "flex flex-col items-center h-screen"
              : "hidden lg:flex lg:items-center"
          }`}
        >
          {/* logo in nav */}
          {open && (
            <Link href="/">
              <a>
                <img
                  src={urlFor(navigation[0].logo)}
                  alt={
                    navigation[0].logo.alt
                      ? navigation[0].logo.alt
                      : "logo European proffesional"
                  }
                  className="py-20 lg:hidden"
                />
              </a>
            </Link>
          )}
          {/* links in nav */}
          <Link href="/#stories">
            <a
              className={clsx(
                [secondaryLink && styles.secondaryLink],
                "font-poppins text-Phone/buttonlarge py-4 px-2 text-secondary border-b-secondary black border-b-2 lg:hover:text-primary lg:hover:border-b-primary active:border-b-primary mt-16 lg:m-0 lg:p-0 lg:mx-4 lg:px-3 lg:text-Desktop/nav"
              )}
            >
              {page[1].title}
            </a>
          </Link>
          <Link href="/about">
            <a
              className={clsx(
                [secondaryLink && styles.secondaryLink],
                "font-poppins text-Phone/buttonlarge py-4 px-2 text-secondary border-b-secondary black border-b-2 lg:hover:text-primary lg:hover:border-b-primary active:border-b-primary mt-16 lg:m-0 lg:p-0 lg:mx-4 lg:px-3 lg:text-Desktop/nav"
              )}
            >
              {page[0].title}
            </a>
          </Link>
          <select
            onChange={changeLanguage}
            defaultValue={locale}
            className="mt-20 lg:mt-0 lg:p-0 lg:mx-8"
          >
            <option value="nl-nl">
              {/* <img src={nlFlag} alt="nl icon" /> */}
              🇳🇱
            </option>
            <option value="en-uk">
              {/* <img src={gbFlag} alt="gb icon" /> */}
              🇬🇧
            </option>
          </select>
        </ul>
      </div>
    </nav>
  );
}
