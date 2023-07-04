
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
            questionText: 'What is the name of Morty\'s crush?',
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
                { answerText: 'Space Cruiser', isCorrect: true },
                { answerText: 'Portal Gun', isCorrect: false },
                { answerText: 'The Ship', isCorrect: false },
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
            questionText: 'What is the name of collective being Rick used to date?',
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
                { answerText: 'Existence is pain!', isCorrect: false },
                { answerText: 'Wubba lubba dub dub!', isCorrect: false },
                { answerText: "I'm Mr. Meeseeks, look at me!", isCorrect: true },
                { answerText: 'Get Schwifty!', isCorrect: false },
            ],
        },
        {
            questionText: 'What is the name of the theme park created by Rick?',
            answerOptions: [
                { answerText: 'Blips and Chitz', isCorrect: false },
                { answerText: 'Royland', isCorrect: false },
                { answerText: 'Froopyland', isCorrect: false },
                { answerText: 'Anatomy Park', isCorrect: true },
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
                { answerText: 'Cronenberg Morty', isCorrect: true },
                { answerText: 'Evil Morty', isCorrect: false },
                { answerText: 'Doofus Morty', isCorrect: false },
                { answerText: 'Morty Smith Jr.', isCorrect: false },
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
                { answerText: 'Bureaucracy', isCorrect: true },
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
                { answerText: 'Gwendolyn', isCorrect: true },
                { answerText: 'Unity', isCorrect: false },
                { answerText: 'Tricia', isCorrect: false },
                { answerText: 'Gazorpazorp', isCorrect: false },
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
            questionText: 'What is the name of the alien who runs the intergalactic couples couseling?',
            answerOptions: [
                { answerText: 'Zeep Xanflorp', isCorrect: false },
                { answerText: 'Krombopulos Michael', isCorrect: false },
                { answerText: 'Abradolf Lincler', isCorrect: false },
                { answerText: 'Glaxo Slimslom', isCorrect: true },
            ],
        },
        {
            questionText: 'What did Morty\'s dog name itself?',
            answerOptions: [
                { answerText: 'Snuffles', isCorrect: false },
                { answerText: 'Snowball', isCorrect: true },
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
            questionText: 'What is the name of the planet ruled by giant telepathic spiders?',
            answerOptions: [
                { answerText: 'Gazorpazorp', isCorrect: false },
                { answerText: 'Froopyland', isCorrect: false },
                { answerText: 'Purge Planet', isCorrect: false },
                { answerText: 'Earth', isCorrect: true },
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
                { answerText: 'Goop Gun', isCorrect: false },
                { answerText: 'Universe Hopper', isCorrect: false },
                { answerText: 'Dimensional Transporter', isCorrect: false },
                { answerText: 'Portal Gun', isCorrect: true },
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
        {
            questionText: 'What is the name of the virtual reality game that Rick, Morty, and Summer play in the episode "Total Rickall"?',
            answerOptions: [
                { answerText: 'Blitz and Chitz', isCorrect: false },
                { answerText: 'Roy: A Life Well Lived', isCorrect: true },
                { answerText: 'Froopyland', isCorrect: false },
                { answerText: 'Whirly Dirly', isCorrect: false }
            ]
        },
        {
            questionText: 'What is the name of the drug that Morty acquires from Rick, which allows him to perceive time slowly in the episode "A Rickle in Time"?',
            answerOptions: [
                { answerText: 'Cronenberg Serum', isCorrect: false },
                { answerText: 'Gwendolyn', isCorrect: false },
                { answerText: 'Gazorpazorpian Crystal', isCorrect: false },
                { answerText: 'Time Crystal', isCorrect: true }
            ]
        },
        {
            questionText: 'In the episode "Meeseeks and Destroy," what task does Jerry ask the Meeseeks to help him with?',
            answerOptions: [
                { answerText: 'Improve his golf game', isCorrect: true },
                { answerText: 'Find true love', isCorrect: false },
                { answerText: 'Become a better cook', isCorrect: false },
                { answerText: 'Win the lottery', isCorrect: false }
            ]
        },
        {
            questionText: 'What is the name of the battery that powers Rick\'s spaceship?',
            answerOptions: [
                { answerText: 'Fleeb', isCorrect: false },
                { answerText: 'Plumbus', isCorrect: false },
                { answerText: 'Portal Fluid', isCorrect: false },
                { answerText: 'Microverse Battery', isCorrect: true }
            ]
        },
        {
            questionText: 'In the episode "Pickle Rick", what was Rick trying to avoid?',
            answerOptions: [
                {answerText: 'Therapy with his family', isCorrect: true},
                {answerText: 'Bad credit', isCorrect:false},
                {answerText: 'His own fading reality', isCorrect: false},
                {answerText: 'Catching space aids', isCorrect: false}
            ]
        },
        {
            questionText: 'What is the name of Morty\'s sentient, anthropomorphic arm that he grows in the episode "Rickmancing the Stone"?',
            answerOptions: [
                { answerText: 'Armothy', isCorrect: true },
                { answerText: 'Glootie', isCorrect: false },
                { answerText: 'Snuffles', isCorrect: false },
                { answerText: 'Crocubot', isCorrect: false }
            ]
        },
        {
            questionText: 'What is the name of the intergalactic arcade that Rick, Morty, and their family members frequently visit?',
            answerOptions: [
                { answerText: 'Blitz and Chitz', isCorrect: true },
                { answerText: 'Froopyland', isCorrect: false },
                { answerText: 'Roy: A Life Well Lived', isCorrect: false },
                { answerText: 'The Matrix', isCorrect: false }
            ]
        },
        {
            questionText: 'In the infamous arcade "Blitz and Chitz", what is the virtual reality game where Rick and Morty play as a person living out their life?',
            answerOptions: [
                {answerText: 'Chitty Chitty Bang Bang', isCorrect: false },
                {answerText: 'Return of Eyehole Man', isCorrect: false },
                {answerText: 'Count Chocula: The Game', isCorrect: false },
                {answerText: 'Roy: A Life Well Lived', isCorrect: true }
            ]
        },
        {
            questionText: "What is the name of the council consisting of Ricks from different dimensions?",
            answerOptions: [
                { answerText: 'Ricktopia', isCorrect: false },
                { answerText: 'Council of Ricks', isCorrect: true },
                { answerText: 'Dimensional Ricks', isCorrect: false },
                { answerText: 'Interdimensional Council', isCorrect: false }
            ]
        },
        {
            questionText: "Is the main Morty in the show the main Rick's original Morty",
            answerOptions: [
                {answerText: "Yes", isCorrect: false},
                {answerText: "No", isCorrect: true},
                {answerText: "No one knows for sure", isCorrect: false},
                {answerText: "The fabric of reality would tear if anyone were to find out definitively", isCorrect: false}
            ]
        },
        {
            questionText: 'Which character from Rick and Morty is known for saying "Rick and Morty forever, 100 years!"?',
            answerOptions: [
                { answerText: 'Birdperson', isCorrect: false },
                { answerText: 'Mr. Poopybutthole', isCorrect: false },
                { answerText: 'Snuffles', isCorrect: false },
                { answerText: 'Rick Sanchez', isCorrect: true }
            ]
        },
        {
            questionText: "What is the product that makes random appearances on the show that is never fully explained?",
            answerOptions: [
                {answerText: "Interdimensional Cable", isCorrect: false},
                {answerText: "Plumbus", isCorrect: true},
                {answerText: "Capitalism", isCorrect: false},
                {answerText: "Ice cold can of oxygen", isCorrect: false}
            ]
        },
        {
            questionText: "In the episode 'Rest and Ricklaxation', the boys go to an interdimensional day spa. What gets removed and becomes the main point of the episode?",
            answerOptions: [
                {answerText: "Blemishes they got from a previous adventure", isCorrect: false},
                {answerText: "Rick and Morty's toxic traits", isCorrect: true},
                {answerText: "Rick and Morty's brains", isCorrect: false},
                {answerText: "Their buttcheeks", isCorrect: false}
            ]
        },
        {
            questionText: "In the episode 'Mortynight Run', where did Rick and Morty leave Jerry while they went on their adventure?",
            answerOptions: [
                {answerText: "A relaxing state of bliss", isCorrect: false},
                {answerText: "A daycare made for Jerrys", isCorrect: true},
                {answerText: "They knocked him unconscious and put him in restraints", isCorrect: false},
                {answerText: "No where, Jerry never appeared in this episode", isCorrect: false}
            ]
        },
        {
            questionText: "When parasites infested their home in the episode 'Total Rickall', how did the Smith family differentiate between real family members and made up ones?",
            answerOptions: [
                {answerText: "The fake family members had marks on their backs", isCorrect: false},
                {answerText: "The real family members were the ones they had bad memories of", isCorrect: true},
                {answerText: "The fake family member had no internal organs", isCorrect: false},
                {answerText: "They could see the parasites in reflections", isCorrect: false}
            ]
        }
    ];
  export default questions;

// Just navigate into the components folder and run "node Question.js" to find out how many questions there are.
const questionCount = () => {
    let count = 0
    for (let i = 0; i < questions.length; i++) {
        count++
    }
    console.log(count, "Questions And Counting")
}

questionCount()
