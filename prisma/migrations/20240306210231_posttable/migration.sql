-- CreateTable
CREATE TABLE "post" (
    "id" SERIAL NOT NULL,
    "author_name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT,
    "publish" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "post_pkey" PRIMARY KEY ("id")
);
