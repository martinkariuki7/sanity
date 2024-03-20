import { SanityDocument } from "next-sanity";
import Link from "next/link";
import Image from "next/image";

export default function Posts({ person }: { person: SanityDocument[] }) {
  return (
    <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      {person?.length > 0 ? (
        person.map((post) => (
          <Link key={post._id} href="#">
            <h2 className="p-4 hover:bg-blue-50">{post.fullName}</h2>
            <Image
              src="https://cdn.sanity.io/images/b4zp8ctq/production/465e63f9113dec3405a38ca000cf432e3ca00383-960x960.webp"
              width={300}
              height={300}
              alt="Picture of the author"
              priority={true}
            ></Image>
          </Link>
        ))
      ) : (
        <div className="p-4 text-red-500">No profiles found</div>
      )}
    </main>
  );
}
