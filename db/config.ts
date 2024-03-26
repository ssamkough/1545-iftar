import { column, defineDb, defineTable } from "astro:db";

const Person = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    nickname: column.text(),
    height: column.text(),
    favorite_foods: column.text(),
    item_bringing: column.text(),
    image_url: column.text(),
    a_thing_i_love: column.text({ default: "their smile" }),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: { Person },
});
