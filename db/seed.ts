import { db, Person } from "astro:db";

export default async function () {
  await db.insert(Person).values([
    {
      id: 1,
      name: "sammy",
      nickname: "samsoom",
      height: "5'9",
      favorite_foods: "pizza!",
      item_bringing: "pIzzA",
      image_url: "/food.png",
    },
  ]);
}
