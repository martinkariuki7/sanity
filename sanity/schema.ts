import { type SchemaTypeDefinition, defineField } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: "event",
      title: "Event",
      type: "document",
      fields: [
        defineField({
          name: "name",
          type: "string",
        }),
      ],
    },
    {
      name: "post",
      title: "Post",
      type: "document",
      fields: [
        defineField({
          name: "name",
          type: "string",
        }),
      ],
    },
    {
      name: "posts",
      title: "Posts",
      type: "document",
      fields: [
        defineField({
          name: "name",
          type: "string",
        }),
      ],
    },
    {
      name: "person",
      title: "Person",
      type: "document",
      fields: [
        {
          name: "fullName",
          title: "Full name",
          type: "string",
        },
        {
          name: "portrait",
          title: "Portrait",
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};
