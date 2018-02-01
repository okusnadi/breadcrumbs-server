const db = require('../server/db');
const { User, Trail } = require('../server/db/models');

const users = [
  {
    name: 'Hansel Gretel',
    email: 'hansel@hansel.com',
    password: 'hansel',
    isAdmin: false,
    userId: 1
  },
  {
    name: 'Panda Manda',
    email: 'panda@panda.com',
    password: 'panda',
    isAdmin: false,
    userId: 2
  },
  {
    name: 'a a',
    email: 'a@a.com',
    password: 'a',
    isAdmin: false,
    userId: 3
  },
  {
    name: 'Jesse Moskowitz',
    email: 'jesse@jesse.com',
    photoUrl: 'https://avatars2.githubusercontent.com/u/12431338?s=460&v=4',
    password: 'jesse',
    isAdmin: true,
    userId: 4
  },
  {
    name: 'Kevin Ho',
    email: 'kevin@kevin.com',
    photoUrl: 'https://avatars1.githubusercontent.com/u/15680221?s=460&v=4',
    password: 'kevin',
    isAdmin: true,
    userId: 5
  },
  {
    name: 'Shannen Ye',
    email: 'shannen@shannen.com',
    photoUrl: 'https://avatars1.githubusercontent.com/u/30578065?s=460&v=4',
    password: 'shannen',
    isAdmin: true,
    userId: 6
  },
  {
    name: 'Vanessa Jimenez',
    email: 'vanessa@vanessa.com',
    photoUrl: 'https://avatars2.githubusercontent.com/u/16891417?s=460&v=4',
    password: 'vanessa',
    isAdmin: true,
    userId: 7
  }
];

const trails = [
  {
    origin: "Kevin's seat facing front of room",
    destination: "Omri's seat",
    breadcrumbs: [
         {
           "x": 0,
           "y": 0,
           "z": 0,
         },
         {
           "x": 0.00045998164637406217,
           "y": 0.05394339303353542,
           "z": -0.0464993622851026,
         },
         {
           "x": 1.5723265051949307,
           "y": 0.1546692372969397,
           "z": -0.3793032640736101,
         },
         {
           "x": 3.04024696345025,
           "y": 0.1652479707888437,
           "z": -1.578439183203696,
         },
         {
           "x": 3.523158424540035,
           "y": 0.1863570642250761,
           "z": -3.792648354035474,
         },
         {
           "x": 3.0610343754591587,
           "y": 0.1828051321523292,
           "z": -5.660594407252982,
         }
       ],
    userId: 5
  },
  {
    origin: "Kevin's seat facing front of room",
    destination: "3D TEST TRAIL on x-y-z planes",
    breadcrumbs: [
     {"x": 0, "y": 0, "z": 0},
     {"x": 0, "y": 0, "z": -0.5},
     {"x": 0, "y": 0, "z": -1},
     {"x": 0.5, "y": 0, "z": -1},
     {"x": 1, "y": 0, "z": -1},
     {"x": 1, "y": 0.5, "z": -1},
     {"x": 1, "y": 1, "z": -1}
    ],
    userId: 1
  },
  {
   origin: "Exit elevator facing front",
   destination: "the Oasis",
   breadcrumbs: [
    {
      "x": 0,
      "y": 0,
      "z": 0
    },
    {
      "x": -0.028744495520432966,
      "y": -0.001334338015224887,
      "z": 0.01872791792909024,
    },
    {
      "x": -1.082216585065809,
      "y": -0.00825811504405612,
      "z": 0.1337792295580574,
    },
    {
      "x": -2.5921588562070093,
      "y": 0.02375962228495844,
      "z": 0.493280709924981,
    },
    {
      "x": -4.163966129607078,
      "y": 0.02787538001511171,
      "z":  0.8578244954088405,
    },
    {
      "x": -5.638693852777696,
      "y": 0.02248854097620895,
      "z": 1.7341676516644575,
    },
    {
      "x": -6.6564508770684325,
      "y": 0.03299129367249536,
      "z": 3.223996794138185,
    },
    {
      "x": -7.181995507770474,
      "y": 0.06391480381771258,
      "z": 4.938603180684403,
    },
    {
      "x": -7.065461239655596,
      "y": 0.042080098863893335,
      "z": 6.748925693766355,
    },
    {
      "x": -6.831431719979897,
      "y": 0.0777103679035566,
      "z": 8.559301024473863,
    },
    {
      "x": -5.7463194847934655,
      "y": 0.062219889373499204,
      "z": 9.661045824366933,
    },
    {
      "x": -4.48246463764414,
      "y": 0.06882481253823167,
      "z": 10.471890639123458,
    },
    {
      "x": -4.25633443346268,
      "y": 0.08206554835099177,
      "z":  11.990470874332168,
    },
    {
      "x": -3.723271173350615,
      "y": 0.0547273498766444,
      "z": 13.212426979054372,
    },
    {
      "x": -3.355476022284256,
      "y": -0.035765867858298474,
      "z": 13.82602726444538,
    },
   ],
   userId: 6
  },
  {
    origin: "Main kitchen facing the elevators",
    destination: "Haskell",
    breadcrumbs: [
     {
       "x": 0,
       "y": 0,
       "z": 0
     },
     {
      "x": -0.00399622227641198,
      "y": 0.0018361808307639017,
      "z": -0.12844742084624902,
    },
    {
      "x": -0.5273035017065015,
      "y": 0.0019259833470288562,
      "z": -1.416380113972244,
    },
    {
      "x": -2.001626746083625,
      "y": -0.05021566966946417,
      "z": -1.753358833646387,
    },
    {
      "x": -3.707700058360505,
      "y": -0.06280107736156093,
      "z": -1.7698477258947547,
    },
    {
      "x": -5.558218318148832,
      "y": -0.08007546915008136,
      "z": -1.9263272454465064,
    },
    {
      "x": -7.308670732016862,
      "y": -0.11160554986619087,
      "z": -2.1785500410507543,
    },
    {
      "x": -9.036927899252605,
      "y": -0.1738839065308515,
      "z": -2.2781814289141797,
    },
    {
      "x": -10.92997644479669,
      "y": -0.2243668166199627,
      "z": -2.4871487327817134,
    },
    {
      "x":  -12.791664344261477,
      "y": -0.25368301972772833,
      "z": -2.6040844597799166,
    },
    {
      "x": -14.679702914886164,
      "y": -0.2892671857292082,
      "z": -2.656636139031046,
    },
    {
      "x": -16.6905906813607,
      "y": -0.3096054802749681,
      "z": -2.757615287218285,
    },
    {
      "x": -18.662925302460962,
      "y": -0.32506660910721347,
      "z": -3.084417112502553,
    },
    {
      "x": -19.823445590770106,
      "y": -0.4273629557651881,
      "z": -4.167337246011555,
    }
    ],
    userId: 2
   },
];

const seed = () =>
  Promise.all(users.map(user =>
    User.create(user))
  )
  .then(() =>
  Promise.all(trails.map(trail =>
    Trail.create(trail))
  )
);

const main = () => {
  console.log('Syncing db...');
  db.sync({force: true})
  .then(() => {
    console.log('Seeding database...');
    return seed();
  })
  .catch(err => {
    console.log('Error while seeding');
    console.log(err.stack);
  })
  .then(() => {
    db.close();
    return null;
  });
};

main();

