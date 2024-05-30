"use client";
import Link from "next/link";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import { Translate } from "@phosphor-icons/react";

import USAFlag from "@/assets/language-toggle/usa-flag.svg";
import BrazilFlag from "@/assets/language-toggle/brazil-flag.svg";

import { defaultDictionary } from "@/dictionaries/default-dictionaries";
import { Locale } from "@/config/i18n.configs";

export const Lang = () => {
  const { lang } = useParams();

  const dictionary = defaultDictionary[lang as Locale];
  const t = dictionary.navbar
  const f = defaultDictionary[lang as Locale].navbar;

  return (
    <>
      <div className="group flex items-center">
        <button>
          {" "}
          <Translate size={32} />{" "}
        </button>
        <ul className="absolute gap-3 hidden group-hover:flex flex-col top-16">
          <li className="flex gap-3">
            <Link href="/en-US" className="flex gap-2">
              {" "}
              <Image
                src={USAFlag}
                alt="usa-flag"
                style={{ width: "20px", height: "auto" }}
              />
              {t.lang.op2}
            </Link>
          </li>
          <li className="flex gap-3">
            <Link href="/pt-BR" className="flex gap-2">
              <Image
                src={BrazilFlag}
                alt="br-flag"
                style={{ width: "20px", height: "auto" }}
              />
              {t.lang.op1}
            </Link>
          </li>
        </ul>


{/* ====================== TESTAR DEPOIS ======================*/}

        {/* <ul className="absolute gap-3 hidden group-hover:flex flex-col top-16">
        {locales.map((lng) => {
          if (lng.code === lang) return null;
          return (
            <li key={lng.code}>
              <Link href={getPathname(lng.code)}>{lng.ico}</Link>
            </li>
          );
        })} 
      </ul> */}

      {/* ====================== TESTAR DEPOIS ======================*/}



      </div>
    </>
  );
};
