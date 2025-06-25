import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  // update user name
  const updateUser = await prisma.user.update({
    where: {
      email: 'tariqul8.dev8@gmail.com',
    },
    data: {
      name: 'Tariqul Islam (Developer)',
      age: 17,
    },
  });
  console.log(updateUser, 'Update user name');

  // add movie for a User
  const updateMovie = await prisma.user.update({
    where: {
      email: 'tariqul8.dev8@gmail.com',
    },
    data: {
      watchlist: {
        connect: [{ id: '01JYM1SC6Q8W0FMY6TPHY0DQPZ' }],
      },
    },
  });
  console.log(updateMovie, 'Add a new movie for a user');
}

main();
