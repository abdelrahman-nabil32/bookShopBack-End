const sampleBooks = [
  // Fiction
  {
    title: "The Great Gatsby",
    description: "A classic novel about the American Dream and the tragic story of Jay Gatsby.",
    imageURL: "https://covers.openlibrary.org/b/id/7222166-L.jpg",
    price: 10.99,
    author: "F. Scott Fitzgerald",
    numberOfCopies: 25,
    category: "Fiction",
    soldsNumber: 15
  },
  {
    title: "To Kill a Mockingbird",
    description: "A gripping tale of race and injustice in the Deep South.",
    imageURL: "https://covers.openlibrary.org/b/id/8221696-L.jpg",
    price: 12.99,
    author: "Harper Lee",
    numberOfCopies: 35,
    category: "Fiction",
    soldsNumber: 28
  },
  {
    title: "The Catcher in the Rye",
    description: "A young boy's journey through life and the struggles of growing up.",
    imageURL: "https://covers.openlibrary.org/b/id/7222086-L.jpg",
    price: 9.99,
    author: "J.D. Salinger",
    numberOfCopies: 30,
    category: "Fiction",
    soldsNumber: 20
  },
  {
    title: "1984",
    description: "A dystopian novel that explores the dangers of totalitarianism.",
    imageURL: "https://covers.openlibrary.org/b/id/8231818-L.jpg",
    price: 8.99,
    author: "George Orwell",
    numberOfCopies: 40,
    category: "Fiction",
    soldsNumber: 18
  },
  {
    title: "Pride and Prejudice",
    description: "A classic romance novel about love and social class.",
    imageURL: "https://covers.openlibrary.org/b/id/7907467-L.jpg",
    price: 7.99,
    author: "Jane Austen",
    numberOfCopies: 40,
    category: "Fiction",
    soldsNumber: 33
  },
  
  // Science
  {
    title: "Sapiens: A Brief History of Humankind",
    description: "An exploration of the history and impact of Homo sapiens on the planet.",
    imageURL: "https://covers.openlibrary.org/b/id/8284664-L.jpg",
    price: 15.99,
    author: "Yuval Noah Harari",
    numberOfCopies: 20,
    category: "Science",
    soldsNumber: 25
  },
  {
    title: "A Brief History of Time",
    description: "An overview of cosmology, from the Big Bang to black holes.",
    imageURL: "https://covers.openlibrary.org/b/id/8220597-L.jpg",
    price: 16.99,
    author: "Stephen Hawking",
    numberOfCopies: 28,
    category: "Science",
    soldsNumber: 22
  },
  {
    title: "The Selfish Gene",
    description: "A groundbreaking look at how genes have influenced human behavior.",
    imageURL: "https://covers.openlibrary.org/b/id/8553494-L.jpg",
    price: 13.99,
    author: "Richard Dawkins",
    numberOfCopies: 18,
    category: "Science",
    soldsNumber: 10
  },
  {
    title: "The Gene: An Intimate History",
    description: "An exploration of the history of the gene and its impact on humanity.",
    imageURL: "https://covers.openlibrary.org/b/id/8553472-L.jpg",
    price: 19.99,
    author: "Siddhartha Mukherjee",
    numberOfCopies: 15,
    category: "Science",
    soldsNumber: 12
  },
  {
    title: "Cosmos",
    description: "An exploration of the universe, time, and space.",
    imageURL: "https://covers.openlibrary.org/b/id/7883700-L.jpg",
    price: 17.99,
    author: "Carl Sagan",
    numberOfCopies: 25,
    category: "Science",
    soldsNumber: 20
  },

  // Horror
  {
    title: "The Shining",
    description: "A horror novel about a haunted hotel and its caretaker's descent into madness.",
    imageURL: "https://covers.openlibrary.org/b/id/8221158-L.jpg",
    price: 10.99,
    author: "Stephen King",
    numberOfCopies: 35,
    category: "Horror",
    soldsNumber: 28
  },
  {
    title: "Dracula",
    description: "The legendary tale of Count Dracula and his influence on horror fiction.",
    imageURL: "https://covers.openlibrary.org/b/id/7985088-L.jpg",
    price: 7.99,
    author: "Bram Stoker",
    numberOfCopies: 40,
    category: "Horror",
    soldsNumber: 25
  },
  {
    title: "Frankenstein",
    description: "The classic horror novel about a scientist's creation that turns on him.",
    imageURL: "https://covers.openlibrary.org/b/id/7984662-L.jpg",
    price: 6.99,
    author: "Mary Shelley",
    numberOfCopies: 50,
    category: "Horror",
    soldsNumber: 40
  },
  {
    title: "It",
    description: "A terrifying story about a group of children facing an ancient evil.",
    imageURL: "https://covers.openlibrary.org/b/id/8514113-L.jpg",
    price: 14.99,
    author: "Stephen King",
    numberOfCopies: 20,
    category: "Horror",
    soldsNumber: 18
  },
  {
    title: "The Haunting of Hill House",
    description: "A chilling tale of a haunted house and the terror that lies within.",
    imageURL: "https://covers.openlibrary.org/b/id/7985191-L.jpg",
    price: 9.99,
    author: "Shirley Jackson",
    numberOfCopies: 30,
    category: "Horror",
    soldsNumber: 25
  },

  // Children
  {
    title: "Goodnight Moon",
    description: "A classic children's book about a little bunny's bedtime routine.",
    imageURL: "https://covers.openlibrary.org/b/id/8107672-L.jpg",
    price: 5.99,
    author: "Margaret Wise Brown",
    numberOfCopies: 100,
    category: "Children",
    soldsNumber: 85
  },
  {
    title: "The Very Hungry Caterpillar",
    description: "A beloved children's story about a caterpillar's transformation.",
    imageURL: "https://covers.openlibrary.org/b/id/7967746-L.jpg",
    price: 4.99,
    author: "Eric Carle",
    numberOfCopies: 120,
    category: "Children",
    soldsNumber: 95
  },
  {
    title: "Where the Wild Things Are",
    description: "A story about a young boy who journeys to a land of monsters.",
    imageURL: "https://covers.openlibrary.org/b/id/7953944-L.jpg",
    price: 6.99,
    author: "Maurice Sendak",
    numberOfCopies: 80,
    category: "Children",
    soldsNumber: 75
  },
  {
    title: "Charlotte's Web",
    description: "The story of a pig named Wilbur and his friendship with a spider.",
    imageURL: "https://covers.openlibrary.org/b/id/7856430-L.jpg",
    price: 7.99,
    author: "E.B. White",
    numberOfCopies: 60,
    category: "Children",
    soldsNumber: 55
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    description: "The story of a young wizard and his adventures at Hogwarts.",
    imageURL: "https://covers.openlibrary.org/b/id/8216352-L.jpg",
    price: 11.99,
    author: "J.K. Rowling",
    numberOfCopies: 50,
    category: "Children",
    soldsNumber: 45
  },

  // Astronomy
  {
    title: "Astrophysics for People in a Hurry",
    description: "An accessible guide to understanding the universe.",
    imageURL: "https://covers.openlibrary.org/b/id/8452938-L.jpg",
    price: 10.99,
    author: "Neil deGrasse Tyson",
    numberOfCopies: 25,
    category: "Astronomy",
    soldsNumber: 20
  },
  {
    title: "The Universe in a Nutshell",
    description: "An illustrated guide to complex topics in cosmology.",
    imageURL: "https://covers.openlibrary.org/b/id/8456616-L.jpg",
    price: 18.99,
    author: "Stephen Hawking",
    numberOfCopies: 30,
    category: "Astronomy",
    soldsNumber: 15
  }
];
