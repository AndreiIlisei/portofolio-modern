import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: 'oyn2udc6',
  apiVersion: "2021-10-21",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = createClient(config);

// const builder = new ImageUrlBuilder(sanityClient);

export const urlFor = (source: any) =>
  createImageUrlBuilder(config).image(source);
