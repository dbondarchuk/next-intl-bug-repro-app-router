import { useTranslations } from "next-intl";

export default function IndexPage() {
  const t = useTranslations("IndexPage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <h2>
        {t.rich("rich_escape", {
          p: (c) => <p>{c}</p>,
          i: (c) => <em>{c}</em>,
          br: (_) => <br />,
        })}
      </h2>
      <h2>
        {t.rich("rich_not_enclosed_escape", {
          p: (c) => <p>{c}</p>,
          i: (c) => <em>{c}</em>,
          br: (_) => <br />,
        })}
      </h2>
    </div>
  );
}
