// Mock data for Authors and Books
const authors = [
  { id: '1', name: 'J.K. Rowling', country: 'United Kingdom' },
  { id: '2', name: 'George R.R. Martin', country: 'United States' },
  { id: '3', name: 'Yuval Noah Harari', country: 'Israel' }
];

const books = [
  { id: '1', title: 'Harry Potter and the Philosopher\'s Stone', price: 15.99, publishedYear: 1997, authorId: '1' },
  { id: '2', title: 'A Game of Thrones', price: 18.99, publishedYear: 1996, authorId: '2' },
  { id: '3', title: 'Sapiens: A Brief History of Humankind', price: 12.99, publishedYear: 2011, authorId: '3' },
  { id: '4', title: 'Harry Potter and the Chamber of Secrets', price: 16.99, publishedYear: 1998, authorId: '1' }
];

module.exports = { authors, books };
