import { SanityDocument } from "next-sanity";
import Link from "next/link";

export default function Posts({ person }: { person: SanityDocument[] }) {
  return (
    <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      {person?.length > 0 ? (
        person.map((post) => (
          <Link key={post._id} href={post.slug.current}>
            <h2 className="p-4 hover:bg-blue-50">{post.title}</h2>
          </Link>
        ))
      ) : (
        <div className="p-4 text-red-500">No posts were found</div>
      )}
    </main>
  );
}
