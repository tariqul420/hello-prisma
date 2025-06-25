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
  const findAndError = await prisma.user.findUniqueOrThrow({
    where: {
      email: 'tariqul.dev7@gmail.com',
    },
  });

  console.log(findAndError, 'Find a user and throw error');
}

main();
