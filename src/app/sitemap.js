import { getSiteUrl } from "@/config/site";

export default function sitemap() {
  return [{ url: `${getSiteUrl()}/`, lastModified: new Date() }];
}
