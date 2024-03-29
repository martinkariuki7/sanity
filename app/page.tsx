import { SanityDocument } from "next-sanity";

import Posts from "./_components/Posts";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY);

  return <Posts person={initial.data} />;
}
