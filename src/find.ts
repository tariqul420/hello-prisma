import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  // find all
  const findMovies = await prisma.movie.findMany();
  console.log(findMovies, 'Find all movies.');

  // find unique
  const findUser = await prisma.user.findUnique({
    where: {
      email: 'tariqul.dev7@gmail.com',
    },
    include: { watchlist: true },
  });

  console.log(findUser, 'Find a user.');

  // find first
  const findFirst = await prisma.user.findFirst({
    where: {
      password: '123456',
    },
  });

  console.log(findFirst, 'Find First.');

  // find a throw error
  // const findAndError = await prisma.user.findUniqueOrThrow({
  //   where: {
  //     email: 'shakil@example.com',
  //   },
  //   select: {
  //     name: true,
  //     email: true,
  //     watchlist: {
  //       select: {
  //         title: true,
  //         genre: true,
  //       },
  //     },
  //   },
  // });

  // console.log(findAndError, 'Find a user and throw error');

  // find whose age is less then 18
  const findByAge = await prisma.user.findMany({
    where: {
      age: {
        lt: 18,
      },
    },
  });

  console.log(findByAge, 'find whose age is less then 18');
}

main();
