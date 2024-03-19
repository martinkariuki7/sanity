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
  ],
};
