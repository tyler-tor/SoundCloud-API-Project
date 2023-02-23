// EVERY seeder file
'use strict';

// NEW: add this code to each migration file
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
// END of new code

module.exports = {
  async up (queryInterface, Sequelize) {

    options.tableName = 'Songs';
    await queryInterface.bulkInsert(options, [
      {
       title: 'My Way',
       description: "Sacred is the Los Lonely Boys' fourth album and their second studio set",
       url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Los+Lonely+Boys/Sacred/01+My+Way.m4a',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Sacred.jpg',
       albumId: 1,
       userId: 2
     },
      {
       title: 'Oracle',
       description: "Sacred is the Los Lonely Boys' fourth album and their second studio set",
       url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Los+Lonely+Boys/Sacred/02+%C3%93rale.m4a',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Sacred.jpg',
       albumId: 1,
       userId: 2
     },
      {
       title: 'Diamonds',
       description: "Sacred is the Los Lonely Boys' fourth album and their second studio set",
       url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Los+Lonely+Boys/Sacred/03+Diamonds.m4a',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Sacred.jpg',
       albumId: 1,
       userId: 2
     },
      {
       title: 'Oye Mamacita',
       description: "Sacred is the Los Lonely Boys' fourth album and their second studio set",
       url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Los+Lonely+Boys/Sacred/04+Oye+Mamacita.m4a',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Sacred.jpg',
       albumId: 1,
       userId: 2
     },
      {
       title: 'I Never Met A Woman',
       description: "Sacred is the Los Lonely Boys' fourth album and their second studio set",
       url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Los+Lonely+Boys/Sacred/05+I+Never+Met+A+Woman.m4a',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Sacred.jpg',
       albumId: 1,
       userId: 2
     },
      {
       title: 'Roses',
       description: "Sacred is the Los Lonely Boys' fourth album and their second studio set",
       url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Los+Lonely+Boys/Sacred/06+Roses.m4a',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Sacred.jpg',
       albumId: 1,
       userId: 2
     },
      {
       title: 'Texican Style',
       description: "Sacred is the Los Lonely Boys' fourth album and their second studio set",
       url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Los+Lonely+Boys/Sacred/07+Texican+Style.m4a',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Sacred.jpg',
       albumId: 1,
       userId: 2
     },
      {
       title: 'One More Day',
       description: "Sacred is the Los Lonely Boys' fourth album and their second studio set",
       url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Los+Lonely+Boys/Sacred/08+One+More+Day.m4a',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Sacred.jpg',
       albumId: 1,
       userId: 2
     },
      {
       title: 'Memories',
       description: "Sacred is the Los Lonely Boys' fourth album and their second studio set",
       url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Los+Lonely+Boys/Sacred/09+Memories.m4a',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Sacred.jpg',
       albumId: 1,
       userId: 2
     },
      {
       title: 'My Loneliness',
       description: "Sacred is the Los Lonely Boys' fourth album and their second studio set",
       url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Los+Lonely+Boys/Sacred/10+My+Loneliness.m4a',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Sacred.jpg',
       albumId: 1,
       userId: 2
     },
      {
       title: 'Outlaws',
       description: "Sacred is the Los Lonely Boys' fourth album and their second studio set",
       url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Los+Lonely+Boys/Sacred/11+Outlaws.m4a',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Sacred.jpg',
       albumId: 1,
       userId: 2
     },
      {
       title: 'Home',
       description: "Sacred is the Los Lonely Boys' fourth album and their second studio set",
       url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Los+Lonely+Boys/Sacred/12+Home.m4a',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Sacred.jpg',
       albumId: 1,
       userId: 2
     },
      {
       title: 'Living My Life',
       description: "Sacred is the Los Lonely Boys' fourth album and their second studio set",
       url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Los+Lonely+Boys/Sacred/13+Living+My+Life.m4a',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Sacred.jpg',
       albumId: 1,
       userId: 2
     },
      {
       title: 'Papercut',
       description: 'Hybrid Theory is the debut studio album by American rock band Linkin Park',
       url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin+Park/Hybrid+Theory/01+Papercut.m4a',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/HyrbridTheory.jpg',
       albumId: 2,
       userId: 1
     },
      {
       title: 'One Step Closer',
       description: 'Hybrid Theory is the debut studio album by American rock band Linkin Park',
       url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin+Park/Hybrid+Theory/02+One+Step+Closer.m4a',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/HyrbridTheory.jpg',
       albumId: 2,
       userId: 1
     },
      {
       title: 'With You',
       description: 'Hybrid Theory is the debut studio album by American rock band Linkin Park',
       url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin+Park/Hybrid+Theory/03+With+You.m4a',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/HyrbridTheory.jpg',
       albumId: 2,
       userId: 1
     },
      {
       title: 'Points of Authority',
       description: 'Hybrid Theory is the debut studio album by American rock band Linkin Park',
       url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin+Park/Hybrid+Theory/04+Points+Of+Authority.m4a',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/HyrbridTheory.jpg',
       albumId: 2,
       userId: 1
     },
      {
       title: 'Crawling',
       description: 'Hybrid Theory is the debut studio album by American rock band Linkin Park',
       url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin+Park/Hybrid+Theory/05+Crawling.m4a',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/HyrbridTheory.jpg',
       albumId: 2,
       userId: 1
     },
      {
       title: 'Runaway',
       description: 'Hybrid Theory is the debut studio album by American rock band Linkin Park',
       url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin+Park/Hybrid+Theory/06+Runaway.m4a',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/HyrbridTheory.jpg',
       albumId: 2,
       userId: 1
     },
      {
       title: 'By Myself',
       description: 'Hybrid Theory is the debut studio album by American rock band Linkin Park',
       url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin+Park/Hybrid+Theory/07+By+Myself.m4a',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/HyrbridTheory.jpg',
       albumId: 2,
       userId: 1
     },
      {
       title: 'In The End',
       description: 'Hybrid Theory is the debut studio album by American rock band Linkin Park',
       url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin+Park/Hybrid+Theory/08+In+The+End.m4a',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/HyrbridTheory.jpg',
       albumId: 2,
       userId: 1
     },
      {
       title: 'A Place for my Head',
       description: 'Hybrid Theory is the debut studio album by American rock band Linkin Park',
       url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin+Park/Hybrid+Theory/09+A+Place+For+My+Head.m4a',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/HyrbridTheory.jpg',
       albumId: 2,
       userId: 1
     },
      {
       title: 'Forgotten',
       description: 'Hybrid Theory is the debut studio album by American rock band Linkin Park',
       url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin+Park/Hybrid+Theory/10+Forgotten.m4a',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/HyrbridTheory.jpg',
       albumId: 2,
       userId: 1
     },
      {
       title: 'Cure For the Itch',
       description: 'Hybrid Theory is the debut studio album by American rock band Linkin Park',
       url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin+Park/Hybrid+Theory/11+Cure+For+The+Itch.m4a',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/HyrbridTheory.jpg',
       albumId: 2,
       userId: 1
     },
      {
       title: 'Pushing Me Away',
       description: 'Hybrid Theory is the debut studio album by American rock band Linkin Park',
       url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin+Park/Hybrid+Theory/12+Pushing+Me+Away.m4a',
       previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/HyrbridTheory.jpg',
       albumId: 2,
       userId: 1
     },
     {
      title: 'Foreword',
      description: 'Meteora is the second studio album by American rock band Linkin Park.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin+Park/Meteora/01+Foreword.m4a',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin_Park_Meteora_Album_Cover.jpg',
      albumId: 3,
      userId: 1
     },
     {
      title: 'Dont Stay',
      description: 'Meteora is the second studio album by American rock band Linkin Park.',
      url: "https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin+Park/Meteora/02+Don't+Stay.m4a",
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin_Park_Meteora_Album_Cover.jpg',
      albumId: 3,
      userId: 1
     },
     {
      title: 'Somewhere I Belong',
      description: 'Meteora is the second studio album by American rock band Linkin Park.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin+Park/Meteora/03+Somewhere+I+Belong.m4a',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin_Park_Meteora_Album_Cover.jpg',
      albumId: 3,
      userId: 1
     },
     {
      title: 'Lying From You',
      description: 'Meteora is the second studio album by American rock band Linkin Park.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin+Park/Meteora/04+Lying+From+You.m4a',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin_Park_Meteora_Album_Cover.jpg',
      albumId: 3,
      userId: 1
     },
     {
      title: 'Hit the Floor',
      description: 'Meteora is the second studio album by American rock band Linkin Park.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin+Park/Meteora/05+Hit+The+Floor.m4a',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin_Park_Meteora_Album_Cover.jpg',
      albumId: 3,
      userId: 1
     },
     {
      title: 'Easier to Run',
      description: 'Meteora is the second studio album by American rock band Linkin Park.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin+Park/Meteora/06+Easier+To+Run.m4a',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin_Park_Meteora_Album_Cover.jpg',
      albumId: 3,
      userId: 1
     },
     {
      title: 'Faint',
      description: 'Meteora is the second studio album by American rock band Linkin Park.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin+Park/Meteora/07+Faint.m4a',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin_Park_Meteora_Album_Cover.jpg',
      albumId: 3,
      userId: 1
     },
     {
      title: 'Figure',
      description: 'Meteora is the second studio album by American rock band Linkin Park.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin+Park/Meteora/09+Breaking+The+Habit.m4a',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin_Park_Meteora_Album_Cover.jpg',
      albumId: 3,
      userId: 1
     },
     {
      title: 'Breaking the Habit',
      description: 'Meteora is the second studio album by American rock band Linkin Park.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin+Park/Meteora/08+Figure.09.m4a',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin_Park_Meteora_Album_Cover.jpg',
      albumId: 3,
      userId: 1
     },
     {
      title: 'From the Inside',
      description: 'Meteora is the second studio album by American rock band Linkin Park.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin+Park/Meteora/10+From+The+Inside.m4a',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin_Park_Meteora_Album_Cover.jpg',
      albumId: 3,
      userId: 1
     },
     {
      title: 'Nobodys Listening',
      description: 'Meteora is the second studio album by American rock band Linkin Park.',
      url: "https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin+Park/Meteora/11+Nobody's+Listening.m4a",
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin_Park_Meteora_Album_Cover.jpg',
      albumId: 3,
      userId: 1
     },
     {
      title: 'Session',
      description: 'Meteora is the second studio album by American rock band Linkin Park.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin+Park/Meteora/12+Session.m4a',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin_Park_Meteora_Album_Cover.jpg',
      albumId: 3,
      userId: 1
     },
     {
      title: 'Numb',
      description: 'Meteora is the second studio album by American rock band Linkin Park.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin+Park/Meteora/13+Numb.m4a',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Linkin_Park_Meteora_Album_Cover.jpg',
      albumId: 3,
      userId: 1
     },
     {
      title: 'Coming Home',
      description: 'Coming Home is the debut studio album by American singer Leon Bridges.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Leon+Bridges/Coming+Home+(Deluxe)/Leon+Bridges/Coming+Home.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Coming_Home_Leon_Bridges.jpg',
      albumId: 4,
      userId: 4
     },
     {
      title: 'Better Man',
      description: 'Coming Home is the debut studio album by American singer Leon Bridges.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Leon+Bridges/Coming+Home+(Deluxe)/Leon+Bridges/Better+Man.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Coming_Home_Leon_Bridges.jpg',
      albumId: 4,
      userId: 4
     },
     {
      title: 'Brown Skin Girl',
      description: 'Coming Home is the debut studio album by American singer Leon Bridges.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Leon+Bridges/Coming+Home+(Deluxe)/Leon+Bridges/Brown+Skin+Girl.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Coming_Home_Leon_Bridges.jpg',
      albumId: 4,
      userId: 4
     },
     {
      title: 'Smooth Sailin',
      description: 'Coming Home is the debut studio album by American singer Leon Bridges.',
      url: "https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Leon+Bridges/Coming+Home+(Deluxe)/Leon+Bridges/Smooth+Sailin'.mp3",
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Coming_Home_Leon_Bridges.jpg',
      albumId: 4,
      userId: 4
     },
     {
      title: 'Shine',
      description: 'Coming Home is the debut studio album by American singer Leon Bridges.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Leon+Bridges/Coming+Home+(Deluxe)/Leon+Bridges/Shine.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Coming_Home_Leon_Bridges.jpg',
      albumId: 4,
      userId: 4
     },
     {
      title: 'Lisa Sawyer',
      description: 'Coming Home is the debut studio album by American singer Leon Bridges.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Leon+Bridges/Coming+Home+(Deluxe)/Leon+Bridges/Lisa+Sawyer.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Coming_Home_Leon_Bridges.jpg',
      albumId: 4,
      userId: 4
     },
     {
      title: 'Flowers',
      description: 'Coming Home is the debut studio album by American singer Leon Bridges.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Leon+Bridges/Coming+Home+(Deluxe)/Leon+Bridges/Flowers.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Coming_Home_Leon_Bridges.jpg',
      albumId: 4,
      userId: 4
     },
     {
      title: 'Pull Away',
      description: 'Coming Home is the debut studio album by American singer Leon Bridges.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Leon+Bridges/Coming+Home+(Deluxe)/Leon+Bridges/Pull+Away.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Coming_Home_Leon_Bridges.jpg',
      albumId: 4,
      userId: 4
     },
     {
      title: 'Twistin & Groovin',
      description: 'Coming Home is the debut studio album by American singer Leon Bridges.',
      url: "https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Leon+Bridges/Coming+Home+(Deluxe)/Leon+Bridges/Twistin'+%26+Groovin'.mp3",
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Coming_Home_Leon_Bridges.jpg',
      albumId: 4,
      userId: 4
     },
     {
      title: 'River',
      description: 'Coming Home is the debut studio album by American singer Leon Bridges.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Leon+Bridges/Coming+Home+(Deluxe)/Leon+Bridges/River.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Coming_Home_Leon_Bridges.jpg',
      albumId: 4,
      userId: 4
     },
     {
      title: 'There She Goes',
      description: 'Coming Home is the debut studio album by American singer Leon Bridges.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/send/There+She+Goes.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Coming_Home_Leon_Bridges.jpg',
      albumId: 4,
      userId: 4
     },
     {
      title: 'Daisy Mae',
      description: 'Coming Home is the debut studio album by American singer Leon Bridges.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/send/Daisy+Mae.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Coming_Home_Leon_Bridges.jpg',
      albumId: 4,
      userId: 4
     },
     {
      title: 'Mississippi Kisses',
      description: 'Coming Home is the debut studio album by American singer Leon Bridges.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/send/Mississippi+Kisses.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Coming_Home_Leon_Bridges.jpg',
      albumId: 4,
      userId: 4
     },
     {
      title: 'Here In My Arms',
      description: 'Coming Home is the debut studio album by American singer Leon Bridges.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/send/Here+In+My+Arms.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Coming_Home_Leon_Bridges.jpg',
      albumId: 4,
      userId: 4
     },
     {
      title: 'Outta Line',
      description: 'Coming Home is the debut studio album by American singer Leon Bridges.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/send/Outta+Line.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Coming_Home_Leon_Bridges.jpg',
      albumId: 4,
      userId: 4
     },
     {
      title: 'K.I.D.S',
      description: 'K.I.D.S. is the fourth mixtape by American rapper Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/send/Kickin+Incredibly+Dope+Shit+(Intro)+(Prod.+DT+Spacely).mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_K.I.D.S._cover_art.jpg',
      albumId: 5,
      userId: 3
     },
     {
      title: 'Outside',
      description: 'K.I.D.S. is the fourth mixtape by American rapper Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/send/Outside+(Prod.+Sayez).mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_K.I.D.S._cover_art.jpg',
      albumId: 5,
      userId: 3
     },
     {
      title: 'Get Em Up',
      description: 'K.I.D.S. is the fourth mixtape by American rapper Mac Miller.',
      url: "https://soundcloud-bucket.s3.us-west-2.amazonaws.com/send/Get+Em+Up+(Prod.+93'+P.).mp3",
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_K.I.D.S._cover_art.jpg',
      albumId: 5,
      userId: 3
     },
     {
      title: 'Nikes on My Feet',
      description: 'K.I.D.S. is the fourth mixtape by American rapper Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/send/Mac+Miller+-+Nikes+on+my+Feet+(Music+%2B+Lyrics).mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_K.I.D.S._cover_art.jpg',
      albumId: 5,
      userId: 3
     },
     {
      title: 'Senior Skip Day',
      description: 'K.I.D.S. is the fourth mixtape by American rapper Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/send/Mac+Miller+-+Senior+Skip+Day.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_K.I.D.S._cover_art.jpg',
      albumId: 5,
      userId: 3
     },
     {
      title: 'The Spins',
      description: 'K.I.D.S. is the fourth mixtape by American rapper Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/send/The+Spins+(Prod.+B+%5Bdot%5D+Jay).mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_K.I.D.S._cover_art.jpg',
      albumId: 5,
      userId: 3
     },
     {
      title: 'Dont Mind If I Do',
      description: 'K.I.D.S. is the fourth mixtape by American rapper Mac Miller.',
      url: "https://soundcloud-bucket.s3.us-west-2.amazonaws.com/send/Mac+Miller+-+Don't+Mind+If+I+Do.mp3",
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_K.I.D.S._cover_art.jpg',
      albumId: 5,
      userId: 3
     },
     {
      title: 'Paper Route',
      description: 'K.I.D.S. is the fourth mixtape by American rapper Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/send/Paper+Route+ft.+Chevy+Woods+(Prod.+Sayez).mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_K.I.D.S._cover_art.jpg',
      albumId: 5,
      userId: 3
     },
     {
      title: 'Good Evening',
      description: 'K.I.D.S. is the fourth mixtape by American rapper Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/send/Mac+miller+-+good+evening.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_K.I.D.S._cover_art.jpg',
      albumId: 5,
      userId: 3
     },
     {
      title: 'Ride Around',
      description: 'K.I.D.S. is the fourth mixtape by American rapper Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/send/Mac+Miller+-+Ride+Around.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_K.I.D.S._cover_art.jpg',
      albumId: 5,
      userId: 3
     },
     {
      title: 'Knock Knock',
      description: 'K.I.D.S. is the fourth mixtape by American rapper Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/send/Mac+Miller+-+Knock+Knock.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_K.I.D.S._cover_art.jpg',
      albumId: 5,
      userId: 3
     },
     {
      title: 'Mad Flava, Heavy Flow',
      description: 'K.I.D.S. is the fourth mixtape by American rapper Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/send/Mac+Miller+-+Mad+Flava+Heavy+Flow.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_K.I.D.S._cover_art.jpg',
      albumId: 5,
      userId: 3
     },
     {
      title: 'Kool Aid & Frozen Pizza',
      description: 'K.I.D.S. is the fourth mixtape by American rapper Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/send/Mac+Miller+-+Kool+Aid+And+Frozen+Pizza.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_K.I.D.S._cover_art.jpg',
      albumId: 5,
      userId: 3
     },
     {
      title: 'All I Want is You',
      description: 'K.I.D.S. is the fourth mixtape by American rapper Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/send/All+I+Want+Is+You+(Prod.+Willis+Beats).mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_K.I.D.S._cover_art.jpg',
      albumId: 5,
      userId: 3
     },
     {
      title: 'Poppy',
      description: 'K.I.D.S. is the fourth mixtape by American rapper Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/send/Poppy+(Prod.+Black+Diamond).mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_K.I.D.S._cover_art.jpg',
      albumId: 5,
      userId: 3
     },
     {
      title: 'Face in the Crowd',
      description: 'K.I.D.S. is the fourth mixtape by American rapper Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/send/Mac+Miller+-+Face+In+The+Crowd.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_K.I.D.S._cover_art.jpg',
      albumId: 5,
      userId: 3
     },
     {
      title: 'Ayye',
      description: 'K.I.D.S. is the fourth mixtape by American rapper Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/send/Mac+Miller+-+Ayye+(Prod.+ID+Labs).mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_K.I.D.S._cover_art.jpg',
      albumId: 5,
      userId: 3
     },
     {
      title: 'Back in the Day',
      description: 'K.I.D.S. is the fourth mixtape by American rapper Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/send/Mac+Miller+-+Back+In+The+Day+(Prod.+Will+Brown).mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_K.I.D.S._cover_art.jpg',
      albumId: 5,
      userId: 3
     },
     {
      title: 'Circles',
      description: 'Circles is the sixth and final studio album by American rapper and singer Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/send/Mac+Miller+-+Circles.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_-_Circles.jpg',
      albumId: 6,
      userId: 3
     },
     {
      title: 'Complicated',
      description: 'Circles is the sixth and final studio album by American rapper and singer Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/send/Mac+Miller+-+Complicated.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_-_Circles.jpg',
      albumId: 6,
      userId: 3
     },
     {
      title: 'Blue World',
      description: 'Circles is the sixth and final studio album by American rapper and singer Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/send/Mac+Miller+-+Blue+World.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_-_Circles.jpg',
      albumId: 6,
      userId: 3
     },
     {
      title: 'Good News',
      description: 'Circles is the sixth and final studio album by American rapper and singer Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/Mac+Miller+-+Good+News.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_-_Circles.jpg',
      albumId: 6,
      userId: 3
     },
     {
      title: 'I Can See',
      description: 'Circles is the sixth and final studio album by American rapper and singer Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/Mac+Miller+-+I+Can+See.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_-_Circles.jpg',
      albumId: 6,
      userId: 3
     },
     {
      title: 'Everybody',
      description: 'Circles is the sixth and final studio album by American rapper and singer Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/Mac+Miller+-+Everybody.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_-_Circles.jpg',
      albumId: 6,
      userId: 3
     },
     {
      title: 'Woods',
      description: 'Circles is the sixth and final studio album by American rapper and singer Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/Mac+Miller+-+Woods.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_-_Circles.jpg',
      albumId: 6,
      userId: 3
     },
     {
      title: 'Hand Me Downs',
      description: 'Circles is the sixth and final studio album by American rapper and singer Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/Mac+Miller+-+Hand+Me+Downs.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_-_Circles.jpg',
      albumId: 6,
      userId: 3
     },
     {
      title: "That's On Me",
      description: 'Circles is the sixth and final studio album by American rapper and singer Mac Miller.',
      url: "https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/Mac+Miller+-+That's+On+Me.mp3",
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_-_Circles.jpg',
      albumId: 6,
      userId: 3
     },
     {
      title: 'Hands',
      description: 'Circles is the sixth and final studio album by American rapper and singer Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/Mac+Miller+-+Hands.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_-_Circles.jpg',
      albumId: 6,
      userId: 3
     },
     {
      title: 'Surf',
      description: 'Circles is the sixth and final studio album by American rapper and singer Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/Mac+Miller+-+Surf+(Lyrics).mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_-_Circles.jpg',
      albumId: 6,
      userId: 3
     },
     {
      title: 'Once A Day',
      description: 'Circles is the sixth and final studio album by American rapper and singer Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/Mac+Miller+-+Once+A+Day+(LYRICS).mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_-_Circles.jpg',
      albumId: 6,
      userId: 3
     },
     {
      title: 'Right',
      description: 'Circles is the sixth and final studio album by American rapper and singer Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/Mac+Miller+-+Right+(Lyrics).mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_-_Circles.jpg',
      albumId: 6,
      userId: 3
     },
     {
      title: 'Floating',
      description: 'Circles is the sixth and final studio album by American rapper and singer Mac Miller.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/send/Mac+Miller+-+Floating+(Lyrics).mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Mac_Miller_-_Circles.jpg',
      albumId: 6,
      userId: 3
     },
     {
      title: 'Entergalactic Theme',
      description: 'Entergalactic is the eighth studio album by American musician Kid Cudi.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/send/Kid+Cudi+-+Entergalactic+Theme+(EXTENDED+INTRO).mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Kid_Cudi_-_Entergalactic.jpg',
      albumId: 7,
      userId: 5
     },
     {
      title: 'New Mode',
      description: 'Entergalactic is the eighth studio album by American musician Kid Cudi.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/send/Kid+Cudi+-+New+Mode.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Kid_Cudi_-_Entergalactic.jpg',
      albumId: 7,
      userId: 5
     },
     {
      title: 'Do What I Want',
      description: 'Entergalactic is the eighth studio album by American musician Kid Cudi.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/send/Kid+Cudi+-+Do+What+I+Want.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Kid_Cudi_-_Entergalactic.jpg',
      albumId: 7,
      userId: 5
     },
     {
      title: 'Angel',
      description: 'Entergalactic is the eighth studio album by American musician Kid Cudi.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/send/Kid+Cudi+-+Angel.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Kid_Cudi_-_Entergalactic.jpg',
      albumId: 7,
      userId: 5
     },
     {
      title: 'Ignite The Love',
      description: 'Entergalactic is the eighth studio album by American musician Kid Cudi.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/send/Kid+Cudi+-+Ignite+The+Love.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Kid_Cudi_-_Entergalactic.jpg',
      albumId: 7,
      userId: 5
     },
     {
      title: 'In Love',
      description: 'Entergalactic is the eighth studio album by American musician Kid Cudi.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/send/Kid+Cudi+-+In+Love+_+Entergalactic.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Kid_Cudi_-_Entergalactic.jpg',
      albumId: 7,
      userId: 5
     },
     {
      title: 'Willing to Trust',
      description: 'Entergalactic is the eighth studio album by American musician Kid Cudi.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/send/Kid+Cudi+-+Willing+To+Trust.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Kid_Cudi_-_Entergalactic.jpg',
      albumId: 7,
      userId: 5
     },
     {
      title: 'Cant Believe it',
      description: 'Entergalactic is the eighth studio album by American musician Kid Cudi.',
      url: "https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/send/Kid+Cudi+-+CAN'T+BELIEVE+IT+(ft.+2+Chainz)+(Lyrics).mp3",
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Kid_Cudi_-_Entergalactic.jpg',
      albumId: 7,
      userId: 5
     },
     {
      title: 'Livin My Truth',
      description: 'Entergalactic is the eighth studio album by American musician Kid Cudi.',
      url: "https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/send/Kid+Cudi+-+LIVIN'+MY+TRUTH+(Lyrics).mp3",
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Kid_Cudi_-_Entergalactic.jpg',
      albumId: 7,
      userId: 5
     },
     {
      title: 'Maybe So',
      description: 'Entergalactic is the eighth studio album by American musician Kid Cudi.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/Kid+Cudi+-+Maybe+So+(Lyrics).mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Kid_Cudi_-_Entergalactic.jpg',
      albumId: 7,
      userId: 5
     },
     {
      title: 'Cant Shake Her',
      description: 'Entergalactic is the eighth studio album by American musician Kid Cudi.',
      url: "https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/Kid+Cudi+ft+Ty+Dolla+Sign+-+Can't+Shake+Her+(Lyrics).mp3",
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Kid_Cudi_-_Entergalactic.jpg',
      albumId: 7,
      userId: 5
     },
     {
      title: 'Shes Lookin for Me',
      description: 'Entergalactic is the eighth studio album by American musician Kid Cudi.',
      url: "https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/Kid+Cudi+-+She's+Lookin+For+Me.mp3",
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Kid_Cudi_-_Entergalactic.jpg',
      albumId: 7,
      userId: 5
     },
     {
      title: 'My Drug',
      description: 'Entergalactic is the eighth studio album by American musician Kid Cudi.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/Kid+Cudi+-+My+Drug.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Kid_Cudi_-_Entergalactic.jpg',
      albumId: 7,
      userId: 5
     },
     {
      title: 'Somewhere To Fly',
      description: 'Entergalactic is the eighth studio album by American musician Kid Cudi.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/Kid+Cudi+-+Somewhere+To+Fly.mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Kid_Cudi_-_Entergalactic.jpg',
      albumId: 7,
      userId: 5
     },
     {
      title: 'Burrow',
      description: 'Entergalactic is the eighth studio album by American musician Kid Cudi.',
      url: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Entergalactic/Kid+Cudi+-+Burrow+(Bonus+Track).mp3',
      previewImage: 'https://soundcloud-bucket.s3.us-west-2.amazonaws.com/Kid_Cudi_-_Entergalactic.jpg',
      albumId: 7,
      userId: 5
     },
    ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     options.tableName = 'Songs';
     await queryInterface.bulkDelete(options, null, {});
  }
};
