import { Navbar } from "@/components/Navbar/Navbar";
import { Locale } from "@/config/i18n.configs";
import { getDictionaryUseServerOnly } from "@/dictionaries/default-dictionary-use-server-only";

export default function Home({ params }: { params: { lang: Locale } }) {
  const dict = getDictionaryUseServerOnly(params.lang);
  return (
    <>
      {/* <nav>
      <h1>{dict.site.name}</h1>
      <p>{dict.site.description}</p>
    </nav> */}
      <Navbar />
    </>
  );
}
