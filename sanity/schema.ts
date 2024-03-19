import { type SchemaTypeDefinition, defineField } from "sanity";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
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
