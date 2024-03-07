import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const createPosts = await prisma.post.createMany({
    data: [
      { author_name: "John doe black", age: 25, gender: "Male" },
      { author_name: "Sarah smith blue", age: 22, gender: "Female" },
      { author_name: "Jane toe red", age: 22, gender: "Male" },
    ],
  });

  console.log(createPosts);
};

// Array.from({ length: 100 }, (_, i) => main());
// main();
