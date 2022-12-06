import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { urlFor } from "../../lib/client";
import { MdMenu, MdClose } from "react-icons/md";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
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

  const [dropdown, setDropdown] = useState(false);

  const changeLanguage = (e) => {
    // replace the slug with the current locale
    const newLocale = e;
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
    base: "lg:flex lg:justify-between z-10 w-full pt-6 px-4 lg:pb-6 lg:px-8 pb-4",
    secondaryNav: "absolute lg:px-0 lg:border-0 lg:pt-0 border-0 lg:pl-8",
    secondaryLink: "lg:text-white border-b-2 border-white",
    mainOpen: "border-b-primary flex justify-between border-b-4",
    secondaryBorder: "flex justify-between border-0",
    menuColor: "h-12 w-12 text-white",
    menuColorMain: "h-12 w-12 text-primary",
  };

  useEffect(() => {
    document.body.className = open ? "overflow-hidden" : "overflow-auto";
  }, [open]);

  return (
    <nav>
      <div
        className={clsx(
          [styles.base, secondaryNav && styles.secondaryNav],
          open
            ? "bg-white fixedImportant lg:bg-opacity-0"
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
                "hidden lg:block font-poppins text-Phone/buttonlarge py-4 px-2 text-secondary lg:hover:text-primary lg:hover:border-b-primary mt-8 lg:m-0 lg:py-0 lg:text-Desktop/nav active:border-b-primary"
              )}
            >
              {page[1].title}
            </a>
          </Link>

          <Link href="/about">
            <a
              className={clsx(
                router.pathname === "/"
                  ? "border-white border-b-2"
                  : router.pathname === "/about"
                  ? "border-primary border-b-2"
                  : "border-secondary border-b-2",
                [secondaryLink && styles.secondaryLink],
                "hidden lg:block font-poppins text-Phone/buttonlarge lg:mx-14 py-4 px-2 text-secondary lg:hover:text-primary lg:hover:border-b-primary active:border-b-primary mt-8 lg:m-0 lg:py-0 lg:text-Desktop/nav"
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
          {/* language switcher */}
          <li className="mt-16 lg:mt-0 flex">
            <button
              defaultValue={locale}
              onClick={() => setDropdown(!dropdown)}
            >
              <div
                className={clsx(
                  "lg:absolute lg:pr-2",
                  secondaryLink
                    ? "lg:top-5 lg:right-28"
                    : "lg:top-10 lg:right-36"
                )}
              >
                {(dropdown || locale == "nl-nl") && (
                  <div onClick={(e) => changeLanguage("nl-nl")} value="nl-nl">
                    <p className={clsx(dropdown && "")}>
                      <svg
                        width={30}
                        height={21}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#prefix__clip0_179_1182)">
                          <path d="M0 0h30v21H0V0z" fill="#fff" />
                          <path d="M0 0h30v7H0V0z" fill="#CD1F2A" />
                          <path d="M0 13.908h30v7H0v-7z" fill="#1D4185" />
                        </g>
                        <defs>
                          <clipPath id="prefix__clip0_179_1182">
                            <path fill="#fff" d="M0 0h30v21H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </p>
                  </div>
                )}
                {(dropdown || locale == "en-uk") && (
                  <div onClick={(e) => changeLanguage("en-uk")} value="en-uk">
                    <p className={clsx(dropdown && "pt-2 lg:mt-2 lg:pt-0")}>
                      <svg
                        width={30}
                        height={21}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#prefix__clip0_179_1163)">
                          <path d="M0 0h30v21H0V0z" fill="#fff" />
                          <path
                            d="M16.875 0h-3.75v8.53H0v3.938h13.125V21h3.75v-8.532H30V8.531H16.875V0z"
                            fill="#D80027"
                          />
                          <path
                            d="M23.073 14.152L30 18.192v-4.04h-6.927zm-4.812 0L30 21v-1.937l-8.42-4.911h-3.32zM26.873 21l-8.612-5.024V21h8.612z"
                            fill="#0052B4"
                          />
                          <path
                            d="M18.26 14.152L30 21v-1.937l-8.42-4.911h-3.32z"
                            fill="#fff"
                          />
                          <path
                            d="M18.26 14.152L30 21v-1.937l-8.42-4.911h-3.32z"
                            fill="#D80027"
                          />
                          <path
                            d="M5.293 14.152L0 17.24v-3.088h5.293zm6.446.87V21H1.494l10.245-5.977z"
                            fill="#0052B4"
                          />
                          <path
                            d="M8.42 14.152L0 19.063V21l11.74-6.848H8.42z"
                            fill="#D80027"
                          />
                          <path
                            d="M6.927 6.848L0 2.807v4.04h6.927zm4.812 0L0 0v1.936l8.42 4.912h3.32zM3.127 0l8.612 5.024V0H3.127z"
                            fill="#0052B4"
                          />
                          <path
                            d="M11.74 6.848L0 0v1.936l8.42 4.912h3.32z"
                            fill="#fff"
                          />
                          <path
                            d="M11.74 6.848L0 0v1.936l8.42 4.912h3.32z"
                            fill="#D80027"
                          />
                          <path
                            d="M24.707 6.848L30 3.76v3.088h-5.293zm-6.446-.871V0h10.245L18.261 5.977z"
                            fill="#0052B4"
                          />
                          <path
                            d="M21.58 6.848L30 1.936V0L18.26 6.848h3.32z"
                            fill="#D80027"
                          />
                        </g>
                        <defs>
                          <clipPath id="prefix__clip0_179_1163">
                            <path fill="#fff" d="M0 0h30v21H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                    </p>
                  </div>
                )}
              </div>
            </button>
            {/* arrow button */}
            <button
              defaultValue={locale}
              onClick={() => setDropdown(!dropdown)}
              className="lg:pr-24 lg:ml-9"
            >
              {dropdown ? (
                <FaCaretUp className={clsx(secondaryLink && "lg:text-white")} />
              ) : (
                <FaCaretDown
                  className={clsx(secondaryLink && "lg:text-white")}
                />
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
