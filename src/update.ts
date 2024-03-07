import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // single update
  // update id=7 and set new author_name john doe updated
  const updatePost = await prisma.post.update({
    where: {
      id: 7,
    },
    data: {
      author_name: "John doe updated",
    },
  });
  //   console.log(updatePost);

  //   update multiple row
  const updatePosts = await prisma.post.updateMany({
    where: {
      author_name: "Sarah smith blue",
    },
    data: {
      publish: true,
    },
  });
  console.log(updatePosts);
};

main();
