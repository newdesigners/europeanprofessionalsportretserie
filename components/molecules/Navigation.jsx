import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { urlFor } from "../../lib/client";
import { MdMenu, MdClose } from "react-icons/md";
import { clsx } from "clsx";

export function Navigation({
  navigation,
  page,
  secondaryNav = false,
  secondaryLink = false,
  secondaryBorder = false,
  mainOpen = true,
  menuColor = false,
  menuColorMain = true,
}) {
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (e) => {
    // replace the slug with the current locale
    const newLocale = e.target.value;
    const newPathWithChangedSlugLanguage = router.asPath.endsWith(locale)
      ? router.asPath.replace(locale, newLocale)
      : router.asPath;
    const newRoute = router.push(
      newPathWithChangedSlugLanguage,
      newPathWithChangedSlugLanguage,
      { locale: newLocale }
    );
    return newRoute;
  };

  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setOpen(!open);
  };

  const styles = {
    base: "lg:flex lg:justify-between z-10 w-full pt-6 px-4 lg:pb-6 lg:px-8",
    secondaryNav:
      "absolute lg:px-0 lg:border-0 lg:mx-8 lg:pt-0 border-0 lg:w-11/12",
    secondaryLink: "lg:text-white",
    mainOpen: "border-b-primary flex justify-between border-b-4",
    secondaryBorder: "flex justify-between border-0",
    menuColor: "h-12 w-12 text-white",
    menuColorMain: "h-12 w-12 text-primary",
  };

  return (
    <nav>
      <div
        className={clsx(
          [styles.base, secondaryNav && styles.secondaryNav],
          open
            ? "bg-white lg:bg-opacity-0"
            : [
                mainOpen && styles.mainOpen,
                secondaryBorder && styles.secondaryBorder,
              ]
        )}
      >
        {!open && (
          <Link href="/">
            <a>
              <img
                src={urlFor(navigation[0].logo)}
                alt={
                  navigation[0].logo.alt ? navigation[0].logo.alt : "brand logo"
                }
              />
            </a>
          </Link>
        )}
        <button onClick={handleToggle} className="lg:hidden">
          {!open ? (
            <MdMenu
              className={clsx([
                menuColor && styles.menuColor,
                menuColorMain && styles.menuColorMain,
              ])}
            />
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
                [
                  router.pathname === "/"
                    ? "border-primary border-b-2"
                    : "border-secondary border-b-2 ",
                  secondaryLink && styles.secondaryLink,
                ],
                "hidden lg:block font-poppins text-Phone/buttonlarge py-4 px-2 text-secondary lg:hover:text-primary lg:hover:border-b-primary mt-16 lg:m-0 lg:p-0 lg:mx-4 lg:px-3 lg:text-Desktop/nav active:border-b-primary"
              )}
            >
              {page[1].title}
            </a>
          </Link>

          <Link href="/about">
            <a
              className={clsx(
                router.pathname === "/about"
                  ? "border-primary border-b-2"
                  : "border-secondary border-b-2",
                [
                  secondaryLink && styles.secondaryLink,
                  router.pathname === "/about"
                    ? "border-primary border-b-2"
                    : "border-white border-b-2",
                ],
                "hidden lg:block font-poppins text-Phone/buttonlarge py-4 px-2 text-secondary lg:hover:text-primary lg:hover:border-b-primary active:border-b-primary mt-16 lg:m-0 lg:p-0 lg:px-3 lg:text-Desktop/nav"
              )}
            >
              {page[0].title}
            </a>
          </Link>
          {/* mobile nav with function to close the menu */}
          <Link href="/#stories">
            <a
              onClick={handleToggle}
              className={clsx(
                router.pathname === "/"
                  ? "border-primary border-b-2"
                  : "border-secondary border-b-2",
                [secondaryLink && styles.secondaryLink],
                "lg:hidden font-poppins text-Phone/buttonlarge py-4 px-2 text-secondary lg:hover:text-primary lg:hover:border-b-primary active:border-b-primary mt-16 lg:m-0 lg:p-0 lg:mx-4 lg:px-3 lg:text-Desktop/nav"
              )}
            >
              {page[1].title}
            </a>
          </Link>
          <Link href="/about">
            <a
              onClick={handleToggle}
              className={clsx(
                router.pathname === "/about"
                  ? "border-primary border-b-2"
                  : "border-secondary border-b-2",
                [secondaryLink && styles.secondaryLink],
                "lg:hidden font-poppins text-Phone/buttonlarge py-4 px-2 text-secondary lg:hover:text-primary lg:hover:border-b-primary active:border-b-primary mt-16 lg:m-0 lg:p-0 lg:px-3 lg:text-Desktop/nav"
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
