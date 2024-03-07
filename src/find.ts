import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const main = async () => {
  // retrive all the post from post table
  const getStoredPosts = await prisma.post.findMany();

  // if we give id then it give result based on id
  const storedData = await prisma.post.findFirst({
    where: {
      id: 1,
    },
  });
  // get the post that created last if we have 2 post we get the second post because it's created last
  const getPostByPublish = await prisma.post.findFirst({
    where: {
      publish: false,
    },
  });

  // if we "don't" find any result with any it gives us error
  // const isPostExists = await prisma.post.findFirstOrThrow({
  //   where: {
  //     id: 100,
  //   },
  // });
  // find the post by id if no post exists then we get null
  const isUniquePostExists = await prisma.post.findUnique({
    where: {
      id: 3,
    },
  });

  // without unique field findunique is not going to work even you can not write the query correctly
  // const withoutUniqueAttribute = await prisma.post.findUnique({
  //   where: {
  //     author_name: "Jane Smith",
  //   },
  // });

  // finduniquethrowerror throw an error if no result found
  const uniqueNullThrowError = await prisma.post.findUniqueOrThrow({
    where: {
      id: 100,
    },
  });
  // console.log(storedData);
  // console.log(getStoredPosts);
  // console.log(getPostByPublish);
  // console.log(isPostExists);
  // console.log(isUniquePostExists);
  console.log(uniqueNullThrowError);
};

main();
