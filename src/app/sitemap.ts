// app/sitemap.ts

import { SitemapUrl } from "@/components/Api/apiurl";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {


  return [
    {
      url: `${SitemapUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${SitemapUrl}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${SitemapUrl}/products`,
      lastModified: new Date(),
    },
    {
      url: `${SitemapUrl}/certification`,
      lastModified: new Date(),
    },
    {
      url: `${SitemapUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${SitemapUrl}/singleProduct`,
      lastModified: new Date(),
    },
    {
      url: `${SitemapUrl}/quote`,
      lastModified: new Date(),
    },
    // Add more routes as needed
  ];
}
