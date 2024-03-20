import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "person"]{
    _id,
    fullName,
    "imageUrl": portrait.asset->url
}`;

/* export const POST_QUERY = groq`*[_type == "person" && slug.current == $slug][0]`; */
