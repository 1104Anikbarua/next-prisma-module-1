import { PrismaClient } from "@prisma/client";
import { skip } from "node:test";

const prisma = new PrismaClient();

// const main = async () => {
//   const posts = await prisma.post.create({
//     data: {
//       author_name: "John doe",
//       age: 22,
//       gender: "Male",
//     },
//   });
//   console.log(posts);
// };

// const main = async () => {
//   const deletePosts = await prisma.post.deleteMany();
//   console.log(deletePosts);
// };
// main();

const main = async () => {
  const posts = await prisma.post.findMany({
    take: 10,
    skip: 10,
  });
  console.log(posts);
};
main();

// Array.from({ length: 99 }, (_, i) => main());
