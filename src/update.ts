import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  // update user name
  const updateUser = await prisma.user.update({
    where: {
      email: 'tariqul.dev8@gmail.com',
    },
    data: {
      name: 'Tariqul Islam (Developer)',
    },
  });
  console.log(updateUser, 'Update user name');

  // add movie for a User
  const updateMovie = await prisma.user.update({
    where: {
      email: 'tariqul.dev8@gmail.com',
    },
    data: {
      watchlist: {
        connect: [{ id: '01JYE7NJQ4GXGDH2MQSQ7CZZ6T' }],
      },
    },
  });
  console.log(updateMovie, 'Add a new movie for a user');
}

main();
