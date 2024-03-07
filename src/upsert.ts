// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// const main = async () => {
//   const updateOrCreate = await prisma.post.upsert({
//     where: { id: 1 },
//     update: { age: 20, author_name: "John doe" },
//     create: {
//       author_name: "John doe",
//       age: 20,
//     },
//   });
//   //   console.log(updateOrCreate);

//   const posts = await prisma.post.findMany({
//     select: {
//       author_name: true,
//       age: true,
//     },
//   });
//   console.log(posts);
// };
// main();
