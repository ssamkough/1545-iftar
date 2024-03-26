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
      a_thing_i_love: "poop",
    },
    {
      id: 2,
      name: "omar",
      nickname: "o-meazu",
      height: "5'6",
      favorite_foods: "soup",
      item_bringing: "big soup",
      image_url: "/attire.png",
      a_thing_i_love: "their butt",
    },
  ]);
}
