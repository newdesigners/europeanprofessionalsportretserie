import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { urlFor } from "../../lib/client";
import { MdMenu, MdClose } from "react-icons/md";

export function Navigation({ navigation, page }) {
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

  return (
    <nav>
      <div className="flex justify-between z-10 w-full pt-6 px-4">
        {!open && <img src={urlFor(navigation[0].logo)} alt="Logo" />}
        <button onClick={handleToggle}>
          {!open ? (
            <MdMenu className="h-12 w-12 text-primary" />
          ) : (
            <MdClose className="h-12 w-12" />
          )}
        </button>
      </div>
      {open && (
        <ul className="flex flex-col items-center h-screen">
          <Link href="/">
            <a>
              <img
                src={urlFor(navigation[0].logo)}
                alt="Logo"
                className="py-20"
              />
            </a>
          </Link>
          <Link href="/about">
            <a className="text-Phone/buttonlarge py-4 px-2 border-b-secondary black border-b-2 active:border-b-primary">
              {page[0].title}
            </a>
          </Link>
          <Link href="/#stories">
            <a className="text-Phone/buttonlarge py-4 px-2 border-b-secondary black border-b-2 active:border-b-primary mt-16">
              {page[1].title}
            </a>
          </Link>
          <select
            onChange={changeLanguage}
            defaultValue={locale}
            className="mt-20"
          >
            <option value="nl-nl">🇳🇱 </option>
            <option value="en-uk">🇬🇧</option>
          </select>
        </ul>
      )}
    </nav>
  );
}
