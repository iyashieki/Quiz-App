const questions = [
    {
  category: "programming",
  questions: [
    {
      question: "What is the main use of JavaScript?",
      options: ["Database queries", "Styling web pages", "Server management", "Creating interactive web content"],
      correctAnswer: 3,
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: ["#", "//", "/*", "<!--"],
      correctAnswer: 1,
    },
    {
      question: "What is the correct syntax for a for loop in JavaScript?",
      options: ["for i = 0; i < 5; i++", "for (i = 0; i < 5; i++)", "foreach (i in range)", "loop i from 0 to 5"],
      correctAnswer: 1,
    },
    {
      question: "Which company developed the Java programming language?",
      options: ["Apple", "Sun Microsystems", "Microsoft", "IBM"],
      correctAnswer: 1,
    },
    {
      question: "Which HTML element is used to include JavaScript?",
      options: ["<js>", "<javascript>", "<script>", "<code>"],
      correctAnswer: 2,
    },
    {
      question: "Which of these is a JavaScript framework?",
      options: ["Flask", "Laravel", "React", "Django"],
      correctAnswer: 2,
    },
    {
      question: "Which programming language is primarily used for AI and Machine Learning?",
      options: ["Python", "Java", "C++", "PHP"],
      correctAnswer: 0,
    },
    {
      question: "Which of the following is not a loop in JavaScript?",
      options: ["for", "do while", "foreach", "loop"],
      correctAnswer: 3,
    },
    {
      question: "Which operator is used to assign a value?",
      options: ["==", "=", "===", "!="],
      correctAnswer: 1,
    },
    {
      question: "Which of these is used to define a constant in JavaScript?",
      options: ["let", "var", "const", "define"],
      correctAnswer: 2,
    },
    {
      question: "Which keyword is used to handle exceptions in JavaScript?",
      options: ["catch", "error", "try", "throw"],
      correctAnswer: 2,
    },
    {
      question: "What does JSON stand for?",
      options: ["JavaScript Object Notation", "Java Source Object Network", "JavaScript Online Notation", "Java Standard Output Network"],
      correctAnswer: 0,
    },
    {
      question: "What is a correct way to create an array in JavaScript?",
      options: ["let arr = {}", "let arr = []", "let arr = array()", "let arr = (1, 2, 3)"],
      correctAnswer: 1,
    },
    {
      question: "Which method is used to convert JSON data to a JavaScript object?",
      options: ["JSON.convert()", "JSON.parse()", "JSON.stringify()", "JSON.toObject()"],
      correctAnswer: 1,
    },
    {
      question: "Which protocol is used for secure communication on the web?",
      options: ["FTP", "HTTP", "HTTPS", "SMTP"],
      correctAnswer: 2,
    },
    {
      question: "Which data type is not primitive in JavaScript?",
      options: ["Number", "String", "Object", "Boolean"],
      correctAnswer: 2,
    },
    {
      question: "How do you define a function in JavaScript?",
      options: ["function myFunc() {}", "myFunc: function() {}", "def myFunc()", "func myFunc()"],
      correctAnswer: 0,
    },
    {
      question: "Which of the following is a front-end framework?",
      options: ["Node.js", "Express", "Angular", "MongoDB"],
      correctAnswer: 2,
    },
    {
      question: "What does DOM stand for?",
      options: ["Document Object Model", "Display Object Map", "Data Output Method", "Document Output Manager"],
      correctAnswer: 0,
    },
    {
      question: "Which of these is a valid boolean value?",
      options: ["yes", "true", "0", "enable"],
      correctAnswer: 1,
    },
    {
      question: "How can you stop an interval timer in JavaScript?",
      options: ["clearInterval()", "stopInterval()", "removeInterval()", "endInterval()"],
      correctAnswer: 0,
    },
    {
      question: "Which tool can you use to check JavaScript errors in a browser?",
      options: ["Console", "Inspector", "Debugger", "All of the above"],
      correctAnswer: 3,
    },
    {
      question: "What is a promise in JavaScript?",
      options: ["A data type", "A function", "An object representing future completion", "A callback"],
      correctAnswer: 2,
    },
    {
      question: "What does 'NaN' stand for?",
      options: ["No assigned Number", "Not a Number", "Negative and Null", "New assigned Number"],
      correctAnswer: 1,
    },
    {
      question: "Which symbol is used for strict equality comparison?",
      options: ["==", "===", "=", "!="],
      correctAnswer: 1,
    },
  ],
}, 

{
  category: "mathematics",
  questions: [
    {
      question: "What is 7 + 8?",
      options: ["13", "14", "15", "16"],
      correctAnswer: 2,
    },
    {
      question: "What is 9 × 6?",
      options: ["54", "56", "58", "60"],
      correctAnswer: 0,
    },
    {
      question: "What is the square root of 81?",
      options: ["8", "9", "10", "11"],
      correctAnswer: 1,
    },
    {
      question: "What is 100 ÷ 4?",
      options: ["20", "25", "30", "35"],
      correctAnswer: 1,
    },
    {
      question: "What is 2⁵?",
      options: ["32", "16", "64", "128"],
      correctAnswer: 0,
    },
    {
      question: "What is the area of a triangle with base 10 and height 5?",
      options: ["25", "50", "15", "20"],
      correctAnswer: 0,
    },
    {
      question: "What is the perimeter of a rectangle with sides 4 cm and 6 cm?",
      options: ["20 cm", "22 cm", "24 cm", "26 cm"],
      correctAnswer: 0,
    },
    {
      question: "What is the cube root of 27?",
      options: ["2", "3", "4", "5"],
      correctAnswer: 1,
    },
    {
      question: "How many degrees are in a right angle?",
      options: ["90", "180", "360", "45"],
      correctAnswer: 0,
    },
    {
      question: "What is 11 × 11?",
      options: ["121", "131", "111", "141"],
      correctAnswer: 0,
    },
    {
      question: "What is the next prime number after 7?",
      options: ["9", "10", "11", "13"],
      correctAnswer: 2,
    },
    {
      question: "Which is greater: ¾ or ⅘?",
      options: ["¾", "⅘", "Equal", "Cannot be determined"],
      correctAnswer: 1,
    },
    {
      question: "What is the result of 3² + 4²?",
      options: ["9", "25", "16", "20"],
      correctAnswer: 1,
    },
    {
      question: "What is 1/2 of 1/4?",
      options: ["1/2", "1/4", "1/8", "1/16"],
      correctAnswer: 2,
    },
    {
      question: "How many sides does a hexagon have?",
      options: ["5", "6", "7", "8"],
      correctAnswer: 1,
    },
    {
      question: "What is the value of π (pi) approximately?",
      options: ["3.14", "2.72", "1.61", "3.41"],
      correctAnswer: 0,
    },
    {
      question: "What is 20% of 250?",
      options: ["25", "50", "60", "75"],
      correctAnswer: 3,
    },
    {
      question: "What is the median of 3, 7, 9?",
      options: ["3", "7", "9", "None"],
      correctAnswer: 1,
    },
    {
      question: "What is the mode of 2, 2, 3, 4?",
      options: ["2", "3", "4", "No mode"],
      correctAnswer: 0,
    },
    {
      question: "What is the mean of 2, 4, 6, 8?",
      options: ["4", "5", "6", "7"],
      correctAnswer: 1,
    },
    {
      question: "What is 1/5 + 2/5?",
      options: ["1/10", "3/5", "2/10", "3/10"],
      correctAnswer: 1,
    },
    {
      question: "What is the product of 0 and any number?",
      options: ["0", "The number itself", "1", "Undefined"],
      correctAnswer: 0,
    },
    {
      question: "Which number is both a square and a cube?",
      options: ["4", "8", "16", "64"],
      correctAnswer: 3,
    },
    {
      question: "What is the value of 5! (5 factorial)?",
      options: ["60", "100", "120", "150"],
      correctAnswer: 2,
    },
    {
      question: "What is the slope of the line y = 2x + 3?",
      options: ["3", "2", "1", "-2"],
      correctAnswer: 1,
    },
  ],
},

{
  category: "entertainment",
  questions: [
    {
      question: "Which actor played Forrest Gump?",
      options: ["Tom Hanks", "Brad Pitt", "Matt Damon", "Johnny Depp"],
      correctAnswer: 0,
    },
    {
      question: "Which movie features a DeLorean time machine?",
      options: ["The Matrix", "Back to the Future", "Inception", "Looper"],
      correctAnswer: 1,
    },
    {
      question: "Who sang 'Bad Guy'?",
      options: ["Dua Lipa", "Billie Eilish", "Adele", "Selena Gomez"],
      correctAnswer: 1,
    },
    {
      question: "Which movie features the character Thanos?",
      options: ["Batman", "Avengers", "Star Wars", "Superman"],
      correctAnswer: 1,
    },
    {
      question: "Which artist painted the Mona Lisa?",
      options: ["Michelangelo", "Van Gogh", "Leonardo da Vinci", "Picasso"],
      correctAnswer: 2,
    },
    {
      question: "Which country is known for Bollywood movies?",
      options: ["USA", "India", "Japan", "UK"],
      correctAnswer: 1,
    },
    {
      question: "Who is the main character in the video game series Zelda?",
      options: ["Zelda", "Ganon", "Link", "Mario"],
      correctAnswer: 2,
    },
    {
      question: "Which musical features the song 'Defying Gravity'?",
      options: ["Wicked", "Hamilton", "Cats", "Les Misérables"],
      correctAnswer: 0,
    },
    {
      question: "Which singer is known for 'Thriller'?",
      options: ["Elvis", "Michael Jackson", "Prince", "Drake"],
      correctAnswer: 1,
    },
    {
      question: "Which TV series is set in Hawkins, Indiana?",
      options: ["Riverdale", "Stranger Things", "Dark", "The 100"],
      correctAnswer: 1,
    },
    {
      question: "Who played the lead in the 'Pirates of the Caribbean' series?",
      options: ["Orlando Bloom", "Johnny Depp", "Chris Hemsworth", "Tom Cruise"],
      correctAnswer: 1,
    },
    {
      question: "Which rapper released the album 'The Marshall Mathers LP'?",
      options: ["Kanye West", "Eminem", "Jay-Z", "Drake"],
      correctAnswer: 1,
    },
    {
      question: "Which game features 'Creepers'?",
      options: ["Terraria", "Minecraft", "Roblox", "Fortnite"],
      correctAnswer: 1,
    },
    {
      question: "Which TV show is about a chemistry teacher turned drug dealer?",
      options: ["Narcos", "Ozark", "Breaking Bad", "The Wire"],
      correctAnswer: 2,
    },
    {
      question: "What color is Shrek?",
      options: ["Blue", "Green", "Purple", "Yellow"],
      correctAnswer: 1,
    },
    {
      question: "Which streaming platform produced 'The Witcher'?",
      options: ["Amazon", "Netflix", "Hulu", "HBO"],
      correctAnswer: 1,
    },
    {
      question: "Which movie begins with the line 'A long time ago in a galaxy far, far away'?",
      options: ["Star Wars", "Star Trek", "Avatar", "Guardians of the Galaxy"],
      correctAnswer: 0,
    },
    {
      question: "Who directed 'Pulp Fiction'?",
      options: ["Tarantino", "Spielberg", "Nolan", "Scorsese"],
      correctAnswer: 0,
    },
    {
      question: "Which artist is known for 'Blinding Lights'?",
      options: ["The Weeknd", "Post Malone", "Ed Sheeran", "Shawn Mendes"],
      correctAnswer: 0,
    },
    {
      question: "Which actor portrayed James Bond in 'Skyfall'?",
      options: ["Sean Connery", "Pierce Brosnan", "Daniel Craig", "Roger Moore"],
      correctAnswer: 2,
    },
    {
      question: "Which movie features talking toys?",
      options: ["Finding Nemo", "Cars", "Toy Story", "Up"],
      correctAnswer: 2,
    },
    {
      question: "Which Netflix series follows Queen Elizabeth II?",
      options: ["The Crown", "Reign", "The Royals", "Victoria"],
      correctAnswer: 0,
    },
    {
      question: "Which show features Sheldon Cooper?",
      options: ["Friends", "Big Bang Theory", "How I Met Your Mother", "New Girl"],
      correctAnswer: 1,
    },
    {
      question: "What animal is King Julien in Madagascar?",
      options: ["Lion", "Zebra", "Lemur", "Giraffe"],
      correctAnswer: 2,
    },
    {
      question: "Which movie won Best Picture at the 2023 Oscars?",
      options: ["Top Gun: Maverick", "The Fabelmans", "Everything Everywhere All At Once", "The Banshees of Inisherin"],
      correctAnswer: 2,
    },
  ],
},

{
  category: "classic literature",
  questions: [
    {
      question: "Who wrote 'The Iliad' and 'The Odyssey'?",
      options: ["Homer", "Virgil", "Sophocles", "Plato"],
      correctAnswer: 0,
    },
    {
      question: "Who is the tragic hero in 'Oedipus Rex'?",
      options: ["Creon", "Jocasta", "Oedipus", "Tiresias"],
      correctAnswer: 2,
    },
    {
      question: "Which playwright wrote 'Hamlet'?",
      options: ["Christopher Marlowe", "Ben Jonson", "William Shakespeare", "John Milton"],
      correctAnswer: 2,
    },
    {
      question: "What is the name of Dante's guide through Hell?",
      options: ["Virgil", "Beatrice", "Plato", "Homer"],
      correctAnswer: 0,
    },
    {
      question: "In 'Don Quixote', who is Sancho Panza?",
      options: ["The horse", "A priest", "His enemy", "His loyal squire"],
      correctAnswer: 3,
    },
    {
      question: "What is the setting of 'Pride and Prejudice'?",
      options: ["France", "Scotland", "England", "Italy"],
      correctAnswer: 2,
    },
    {
      question: "Who wrote 'Crime and Punishment'?",
      options: ["Tolstoy", "Chekhov", "Dostoevsky", "Turgenev"],
      correctAnswer: 2,
    },
    {
      question: "Which novel begins with 'Call me Ishmael'?",
      options: ["Moby-Dick", "The Scarlet Letter", "Frankenstein", "Dracula"],
      correctAnswer: 0,
    },
    {
      question: "Who is the author of 'The Divine Comedy'?",
      options: ["Petrarch", "Virgil", "Dante Alighieri", "Boccaccio"],
      correctAnswer: 2,
    },
    {
      question: "Which Shakespeare play features witches and the line 'Double, double toil and trouble'?",
      options: ["Macbeth", "Hamlet", "Othello", "King Lear"],
      correctAnswer: 0,
    },
    {
      question: "Which character kills King Duncan in 'Macbeth'?",
      options: ["Macduff", "Macbeth", "Banquo", "Lady Macbeth"],
      correctAnswer: 1,
    },
    {
      question: "What genre best describes 'Frankenstein' by Mary Shelley?",
      options: ["Romance", "Science Fiction", "Tragedy", "Drama"],
      correctAnswer: 1,
    },
    {
      question: "Who wrote 'Les Misérables'?",
      options: ["Gustave Flaubert", "Honoré de Balzac", "Victor Hugo", "Émile Zola"],
      correctAnswer: 2,
    },
    {
      question: "In Greek mythology, who is the god of the underworld?",
      options: ["Zeus", "Poseidon", "Hades", "Apollo"],
      correctAnswer: 2,
    },
    {
      question: "What is the theme of '1984' by George Orwell?",
      options: ["Freedom", "Totalitarianism", "Adventure", "Romance"],
      correctAnswer: 1,
    },
    {
      question: "Who wrote 'Jane Eyre'?",
      options: ["Charlotte Brontë", "Emily Brontë", "Jane Austen", "Mary Shelley"],
      correctAnswer: 0,
    },
    {
      question: "Which literary figure wrote 'The Prince'?",
      options: ["Dante", "Plato", "Machiavelli", "Cicero"],
      correctAnswer: 2,
    },
    {
      question: "Who is the monster in 'Frankenstein'?",
      options: ["Frankenstein", "Victor", "The Creature", "Igor"],
      correctAnswer: 2,
    },
    {
      question: "In 'The Aeneid', who is Aeneas's divine mother?",
      options: ["Juno", "Venus", "Minerva", "Diana"],
      correctAnswer: 1,
    },
    {
      question: "What language was 'The Aeneid' originally written in?",
      options: ["Greek", "Latin", "Italian", "Arabic"],
      correctAnswer: 1,
    },
    {
      question: "Who wrote 'The Metamorphosis'?",
      options: ["Kafka", "Camus", "Orwell", "Nietzsche"],
      correctAnswer: 0,
    },
    {
      question: "Which famous tragic play includes the line 'Et tu, Brute?'",
      options: ["Hamlet", "Julius Caesar", "Macbeth", "Antony and Cleopatra"],
      correctAnswer: 1,
    },
    {
      question: "Which ancient epic tells the story of the Trojan War?",
      options: ["The Odyssey", "The Iliad", "The Aeneid", "Metamorphoses"],
      correctAnswer: 1,
    },
    {
      question: "What is the name of the monster in Greek myth that Theseus defeats?",
      options: ["Hydra", "Minotaur", "Cyclops", "Cerberus"],
      correctAnswer: 1,
    },
    {
      question: "Who wrote 'Paradise Lost'?",
      options: ["John Milton", "William Blake", "Alexander Pope", "Jonathan Swift"],
      correctAnswer: 0,
    },
  ],
}

]