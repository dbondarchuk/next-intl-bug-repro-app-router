import { useTranslations } from "next-intl";
import IntlMessageFormat from "intl-messageformat";
import Translations from "../../../messages/en.json";
import { ReactNode } from "react";

const chunks = {
  p: (c: any) => <p>{c}</p>,
  i: (c: any) => <em>{c}</em>,
  br: () => <br />,
};

export default function IndexPage() {
  const t = useTranslations("IndexPage");
  let intl1: ReactNode = "";
  let intl2: ReactNode = "";
  try {
    intl1 = new IntlMessageFormat(
      Translations.IndexPage.rich_escape,
      "en"
    ).format(chunks);
  } catch (e: any) {
    intl1 = e.toString();
  }

  try {
    intl2 = new IntlMessageFormat(
      Translations.IndexPage.rich_not_enclosed_escape,
      "en"
    ).format(chunks);
  } catch (e: any) {
    intl2 = e.toString();
  }

  return (
    <div>
      <h1>{t("title")}</h1>
      <h2>Next-intl</h2>
      <h3>{t.rich("rich_escape", chunks)}</h3>
      <h3>{t.rich("rich_not_enclosed_escape", chunks)}</h3>

      <h2>IntlMessageFormat</h2>
      <h3>{intl1}</h3>
      <h3>{intl2}</h3>
    </div>
  );
}
