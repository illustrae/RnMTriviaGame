
    // const randomEpisode = Math.floor(Math.random() * 51) + 1;

const questions = [
        {
            questionText: 'In which episode did Rick turn himself into a pickle?',
            answerOptions: [
                { answerText: 'Pickle Rick', isCorrect: true },
                { answerText: 'The Rickshank Rickdemption', isCorrect: false },
                { answerText: 'Mortynight Run', isCorrect: false },
                { answerText: 'Total Rickall', isCorrect: false },
            ],
                  },
        {
            questionText: 'What is the name of Morty\'s crush from "Rick Potion #9"?',
            answerOptions: [
                { answerText: 'Jessica', isCorrect: true },
                { answerText: 'Beth', isCorrect: false },
                { answerText: 'Summer', isCorrect: false },
                { answerText: 'Annie', isCorrect: false },
            ],
                  },
        {
            questionText: 'What is the name of Rick\'s spaceship?',
            answerOptions: [
                { answerText: 'Morty Jr.', isCorrect: false },
                { answerText: 'Space Cruiser', isCorrect: false },
                { answerText: 'Portal Gun', isCorrect: false },
                { answerText: 'The Ship', isCorrect: true },
            ],
                  },
        {
            questionText: 'Who is Morty\'s math teacher?',
            answerOptions: [
                { answerText: 'Mr. Goldenfold', isCorrect: true },
                { answerText: 'Mr. Meeseeks', isCorrect: false },
                { answerText: 'Principal Vagina', isCorrect: false },
                { answerText: 'Coach Feratu', isCorrect: false },
            ],
                  },
        {
            questionText: 'What is the name of Rick\'s ex-girlfriend?',
            answerOptions: [
                { answerText: 'Unity', isCorrect: true },
                { answerText: 'Tammy', isCorrect: false },
                { answerText: 'Gwendolyn', isCorrect: false },
                { answerText: 'Jessica', isCorrect: false },
            ],
                  },
        {
            questionText: 'Which dimension do Rick and Morty come from?',
            answerOptions: [
                { answerText: 'Dimension C-137', isCorrect: true },
                { answerText: 'Dimension 35-C', isCorrect: false },
                { answerText: 'Dimension D-99', isCorrect: false },
                { answerText: 'Dimension Zeta-6', isCorrect: false },
            ],
                  },
        {
            questionText: 'What is the catchphrase of Mr. Meeseeks?',
            answerOptions: [
                { answerText: 'Existence is pain!', isCorrect: true },
                { answerText: 'Wubba lubba dub dub!', isCorrect: false },
                { answerText: 'I\'m Mr. Meeseeks, look at me!', isCorrect: false },
                { answerText: 'Get Schwifty!', isCorrect: false },
            ],
                  },
        {
            questionText: 'What is the name of the arcade created by Rick?',
            answerOptions: [
                { answerText: 'Blips and Chitz', isCorrect: true },
                { answerText: 'Royland', isCorrect: false },
                { answerText: 'Froopyland', isCorrect: false },
                { answerText: 'Anatomy Park', isCorrect: false },
            ],
                  },
        {
            questionText: 'Who is the president of the Citadel of Ricks?',
            answerOptions: [
                { answerText: 'Evil Morty', isCorrect: true },
                { answerText: 'Doofus Rick', isCorrect: false },
                { answerText: 'Cop Rick', isCorrect: false },
                { answerText: 'Robot Rick', isCorrect: false },
            ],
                  },
        {
            questionText: 'What is the name of Morty\'s alternate self in the Cronenberg world?',
            answerOptions: [
                { answerText: 'Cronenberg Morty', isCorrect: false },
                { answerText: 'Evil Morty', isCorrect: false },
                { answerText: 'Doofus Morty', isCorrect: false },
                { answerText: 'Morty Smith Jr.', isCorrect: true },
            ],
                  },
        {
            questionText: 'What is the name of Rick\'s daughter?',
            answerOptions: [
                { answerText: 'Beth', isCorrect: true },
                { answerText: 'Summer', isCorrect: false },
                { answerText: 'Jessica', isCorrect: false },
                { answerText: 'Tricia', isCorrect: false },
            ],
                  },
        {
            questionText: 'What is the name of Rick\'s arch-nemesis?',
            answerOptions: [
                { answerText: 'Birdperson', isCorrect: false },
                { answerText: 'Tammy', isCorrect: false },
                { answerText: 'Evil Rick', isCorrect: false },
                { answerText: 'The Galactic Federation', isCorrect: true },
            ],
                  },
        {
            questionText: 'What is the name of Rick\'s catchphrase?',
            answerOptions: [
                { answerText: 'Wubba lubba dub dub!', isCorrect: true },
                { answerText: 'Get Schwifty!', isCorrect: false },
                { answerText: 'Existence is pain!', isCorrect: false },
                { answerText: 'Pickle Riiick!', isCorrect: false },
            ],
          
        },
        {
            questionText: 'Who is Morty\'s sister?',
            answerOptions: [
                { answerText: 'Summer', isCorrect: true },
                { answerText: 'Beth', isCorrect: false },
                { answerText: 'Jessica', isCorrect: false },
                { answerText: 'Tammy', isCorrect: false },
            ],
          
        },
        {
            questionText: 'Which species is Morty\'s best friend, Birdperson?',
            answerOptions: [
                { answerText: 'Avian', isCorrect: true },
                { answerText: 'Reptilian', isCorrect: false },
                { answerText: 'Insectoid', isCorrect: false },
                { answerText: 'Canine', isCorrect: false },
            ],
          
        },
        {
            questionText: 'What is the name of Rick\'s son-in-law?',
            answerOptions: [
                { answerText: 'Jerry', isCorrect: true },
                { answerText: 'Mr. Poopybutthole', isCorrect: false },
                { answerText: 'Scary Terry', isCorrect: false },
                { answerText: 'Gazorpazorp', isCorrect: false },
            ],
          
        },
        {
            questionText: 'What is the name of Morty\'s alien sex robot?',
            answerOptions: [
                { answerText: 'Gwendolyn', isCorrect: false },
                { answerText: 'Unity', isCorrect: false },
                { answerText: 'Tricia', isCorrect: false },
                { answerText: 'Gazorpazorp', isCorrect: true },
            ],
          
        },
        {
            questionText: 'What is the name of the dimension where Beth is a mytholog?',
            answerOptions: [
                { answerText: 'Dimension D-99', isCorrect: false },
                { answerText: 'Dimension C-137', isCorrect: false },
                { answerText: 'Dimension 35-C', isCorrect: false },
                { answerText: 'Froopyland', isCorrect: true },
            ],
          
        },
        {
            questionText: 'What is the name of the alien who runs the intergalactic pawn shop?',
            answerOptions: [
                { answerText: 'Zeep Xanflorp', isCorrect: false },
                { answerText: 'Krombopulos Michael', isCorrect: false },
                { answerText: 'Abradolf Lincler', isCorrect: false },
                { answerText: 'Glaxo Slimslom', isCorrect: true },
            ],
                  },
        {
            questionText: 'What is the name of Morty\'s dog?',
            answerOptions: [
              { answerText: 'Snuffles', isCorrect: true },
              { answerText: 'Snowball', isCorrect: false },
              { answerText: 'Scary Terry', isCorrect: false },
              { answerText: 'Abradolf Lincler', isCorrect: false },
            ],
          
          },
          {
            questionText: 'Who is Rick\'s closest friend and drinking buddy?',
            answerOptions: [
              { answerText: 'Birdperson', isCorrect: true },
              { answerText: 'Squanchy', isCorrect: false },
              { answerText: 'Mr. Meeseeks', isCorrect: false },
              { answerText: 'Mr. Poopybutthole', isCorrect: false },
            ],
          
          },
          {
            questionText: 'What is the name of Rick\'s ex-partner in crime?',
            answerOptions: [
              { answerText: 'Birdperson', isCorrect: false },
              { answerText: 'Squanchy', isCorrect: false },
              { answerText: 'Phoenixperson', isCorrect: false },
              { answerText: 'Revolio Clockberg Jr.', isCorrect: true },
            ],
          
          },
          {
            questionText: 'What is the name of the planet ruled by giant telepathic spiders?',
            answerOptions: [
              { answerText: 'Gazorpazorp', isCorrect: false },
              { answerText: 'Froopyland', isCorrect: false },
              { answerText: 'Purge Planet', isCorrect: false },
              { answerText: 'Nuptia 4', isCorrect: true },
            ],
          
          },
          {
            questionText: 'What is the name of the mysterious, eye-patch-wearing character who has a vendetta against Rick?',
            answerOptions: [
              { answerText: 'Evil Morty', isCorrect: true },
              { answerText: 'Snuffles', isCorrect: false },
              { answerText: 'Tammy', isCorrect: false },
              { answerText: 'Noob-Noob', isCorrect: false },
            ],
          
          },
          {
            questionText: 'What is the name of Morty\'s math teacher in the "Vindicators 3: The Return of Worldender" episode?',
            answerOptions: [
              { answerText: 'Mr. Goldenfold', isCorrect: false },
              { answerText: 'Mr. Meeseeks', isCorrect: false },
              { answerText: 'Principal Vagina', isCorrect: false },
              { answerText: 'Logic', isCorrect: true },
            ],
          
          },
          {
            questionText: 'What is the name of Rick\'s favorite interdimensional cable show?',
            answerOptions: [
              { answerText: 'Ball Fondlers', isCorrect: true },
              { answerText: 'Gazorpazorpfield', isCorrect: false },
              { answerText: 'The Real Animated Adventures of Doc and Mharti', isCorrect: false },
              { answerText: 'Plumbus', isCorrect: false },
            ],
          
          },
          {
            questionText: 'What is the name of the device that allows Rick to travel between dimensions?',
            answerOptions: [
              { answerText: 'Interdimensional Portal Gun', isCorrect: false },
              { answerText: 'Universe Hopper', isCorrect: false },
              { answerText: 'Dimensional Transporter', isCorrect: false },
              { answerText: 'Portal Gun', isCorrect: true },
            ],
          
          },
          {
            questionText: 'What is the name of Rick\'s garage band?',
            answerOptions: [
              { answerText: 'The Flesh Curtains', isCorrect: true },
              { answerText: 'The Cromulons', isCorrect: false },
              { answerText: 'The Get Schwifty Singers', isCorrect: false },
              { answerText: 'The Birdperson Revival', isCorrect: false },
            ],
          
          },
          {
            questionText: 'Which member of the Smith family is often neglected or forgotten?',
            answerOptions: [
              { answerText: 'Jerry', isCorrect: false },
              { answerText: 'Beth', isCorrect: false },
              { answerText: 'Morty', isCorrect: true },
              { answerText: 'Summer', isCorrect: false },
              
            ],
          
          },
    
    ];
  export default questions;
