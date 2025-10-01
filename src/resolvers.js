// Import the mock data
const { authors, books } = require('./data');

// Helper function to generate a new ID
const generateId = (items) => {
  const maxId = items.reduce((max, item) => Math.max(max, parseInt(item.id)), 0);
  return (maxId + 1).toString();
};

// Resolvers define how to fetch the types defined in your schema
const resolvers = {
  // Resolvers for Query type
  Query: {
    // Get all books
    getAllBooks: () => books,
    
    // Get a single book by ID
    getBookById: (_, { id }) => books.find(book => book.id === id),
    
    // Get all authors
    getAllAuthors: () => authors,
    
    // Get a single author by ID
    getAuthorById: (_, { id }) => authors.find(author => author.id === id),
  },
  
  // Resolvers for Mutation type
  Mutation: {
    // Add a new book
    addBook: (_, { title, price, publishedYear, authorId }) => {
      // Check if author exists
      const author = authors.find(author => author.id === authorId);
      if (!author) {
        throw new Error(`Author with ID ${authorId} not found`);
      }
      
      // Create new book
      const newBook = {
        id: generateId(books),
        title,
        price,
        publishedYear,
        authorId
      };
      
      // Add to books array
      books.push(newBook);
      return newBook;
    },
    
    // Update a book's price
    updateBookPrice: (_, { id, price }) => {
      const bookIndex = books.findIndex(book => book.id === id);
      
      if (bookIndex === -1) {
        throw new Error(`Book with ID ${id} not found`);
      }
      
      // Update the book's price
      books[bookIndex].price = price;
      
      return books[bookIndex];
    },
    
    // Add a new author
    addAuthor: (_, { name, country = null }) => {
      const newAuthor = {
        id: generateId(authors),
        name,
        country
      };
      
      // Add to authors array
      authors.push(newAuthor);
      return newAuthor;
    },
  },
  
  // Resolvers for custom types (to handle relationships)
  Book: {
    // Resolve the author for a book
    author: (parent) => {
      return authors.find(author => author.id === parent.authorId);
    },
  },
  
  Author: {
    // Resolve all books for an author
    books: (parent) => {
      return books.filter(book => book.authorId === parent.id);
    },
  },
};

// Export the resolvers
module.exports = resolvers;
