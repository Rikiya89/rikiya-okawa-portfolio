import { headers } from "next/headers";
import { redirect } from "next/navigation";

const DEFAULT_PATH = "/en";
const JAPANESE_PATH = "/jp";

function resolveLocalePath(acceptLanguage: string | null) {
  if (!acceptLanguage) return DEFAULT_PATH;
  const languages = acceptLanguage
    .split(",")
    .map((part) => part.trim().split(";")[0]?.toLowerCase())
    .filter(Boolean);

  if (languages.some((lang) => lang === "ja" || lang.startsWith("ja-"))) {
    return JAPANESE_PATH;
  }
  return DEFAULT_PATH;
}

export default async function RootPage() {
  const headerList = await headers();
  const acceptLanguage = headerList.get("accept-language");
  redirect(resolveLocalePath(acceptLanguage));
}
