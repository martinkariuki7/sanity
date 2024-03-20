import { SanityDocument } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

export default function Posts({ person }: { person: SanityDocument[] }) {
  return (
    <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      {person?.length > 0 ? (
        person.map((post) => (
          <Link key={post._id} href="#">
            <h2 className="p-4 hover:bg-blue-50">{post.fullName}</h2>
            <Image
              src={urlForImage(post.imageUrl)}
              width={300}
              height={300}
              alt={post.fullName}
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
