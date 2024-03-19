import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "person"]`;

export const POST_QUERY = groq`*[_type == "person" && slug.current == $slug][0]`;
