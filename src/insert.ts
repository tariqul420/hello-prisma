import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  // const createUser = await prisma.user.create({
  //   data: {
  //     name: 'Tariqul Islam',
  //     email: 'tariqul7.dev8@gmail.com',
  //     password: '123456',
  //   },
  // });
  // console.log(createUser, 'Create user response');
  // const createMovies = await prisma.movie.createMany({
  //   data: [
  //     {
  //       title: 'Inception',
  //       description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
  //       releaseDate: new Date('2010-07-16'),
  //       director: 'Christopher Nolan',
  //       genre: 'Sci-Fi',
  //     },
  //     {
  //       title: 'The Godfather',
  //       description: 'The aging patriarch of an organized crime dynasty transfers control to his reluctant son.',
  //       releaseDate: new Date('1972-03-24'),
  //       director: 'Francis Ford Coppola',
  //       genre: 'Crime',
  //     },
  //     {
  //       title: 'Spirited Away',
  //       releaseDate: new Date('2001-07-20'),
  //       director: 'Hayao Miyazaki',
  //       genre: 'Fantasy',
  //     },
  //     {
  //       title: 'Parasite',
  //       description: 'Greed and class discrimination threaten the newly formed symbiotic relationship.',
  //       releaseDate: new Date('2019-05-30'),
  //       director: 'Bong Joon-ho',
  //       genre: 'Thriller',
  //     },
  //     {
  //       title: 'Interstellar',
  //       description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  //       releaseDate: new Date('2014-11-07'),
  //       director: 'Christopher Nolan',
  //       genre: 'Sci-Fi',
  //     },
  //   ],
  // });
  // console.log(createMovies, 'Create user response');
  const newUser = await prisma.user.create({
    data: {
      name: 'Shakib',
      email: 'shakib@example.com',
      password: '123456',
      watchlist: {
        connect: [{ id: '01JYM1SC6Q7YRXJ7AFFAGWV2GS' }],
      },
    },
    include: {
      watchlist: true,
    },
  });
  console.log(newUser);
}

main();
