import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  // find all movies
  const findMovies = await prisma.movie.findMany();
  console.log(findMovies);
}

main();
