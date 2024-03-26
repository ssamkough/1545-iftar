import { column, defineDb, defineTable } from "astro:db";

const Person = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    image_url: column.text(),
  },
});

const Food = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    personId: column.number({ references: () => Person.columns.id }),
    name: column.text(),
    image_url: column.text(),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Person, Food },
});
