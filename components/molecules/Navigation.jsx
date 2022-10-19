import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { urlFor } from "../../lib/client";

export function Navigation({ navigation, page }) {
  const router = useRouter();
  const { locale } = router;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <nav className="flex items-center justify-between">
      <img src={urlFor(navigation[0].logo)} alt="Logo" />
      <ul className="flex">
        <li className="px-3">{page[0].title}</li>
        <li className="px-3">{page[1].title}</li>
      </ul>
      <select onChange={changeLanguage} defaultValue={locale}>
        <option value="nl-nl">NL</option>
        <option value="en-uk">EN</option>
      </select>
    </nav>
  );
}
