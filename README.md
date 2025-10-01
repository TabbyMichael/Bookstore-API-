# 📚 Bookstore API

A GraphQL API for managing books and authors in a bookstore, built with Apollo Server.

## 🚀 Features

- **Books Management**: Add, update, and query books
- **Authors Management**: Add and query authors
- **Relationships**: Books are linked to their authors
- **In-Memory Storage**: No database setup required (for demo purposes)

## 🛠️ Tech Stack

- Node.js
- Apollo Server
- GraphQL
- JavaScript (ES6+)

## 🏃‍♂️ Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd bookstore-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```
   For development with auto-reload:
   ```bash
   npm run dev
   ```

4. **Open Apollo Studio**
   Visit `http://localhost:4000` in your browser to access the Apollo Studio Explorer.

## 📝 API Documentation

### Queries

- `getAllBooks`: Get all books
- `getBookById(id: ID!)`: Get a specific book by ID
- `getAllAuthors`: Get all authors
- `getAuthorById(id: ID!)`: Get a specific author by ID

### Mutations

- `addBook(title: String!, price: Float!, publishedYear: Int!, authorId: ID!)`: Add a new book
- `updateBookPrice(id: ID!, price: Float!)`: Update a book's price
- `addAuthor(name: String!, country: String)`: Add a new author

## 📚 Example Queries

### Get all books with their authors
```graphql
query GetAllBooks {
  getAllBooks {
    id
    title
    price
    publishedYear
    author {
      id
      name
      country
    }
  }
}
```

### Add a new book
```graphql
mutation AddBook {
  addBook(
    title: "New Book",
    price: 24.99,
    publishedYear: 2023,
    authorId: "1"
  ) {
    id
    title
    price
    author {
      name
    }
  }
}
```

## 📁 Project Structure

```
bookstore-api/
 ├── src/
 │    ├── schema.js         # GraphQL type definitions
 │    ├── resolvers.js      # Resolver functions
 │    ├── data.js           # In-memory data storage
 │    └── index.js          # Server setup
 ├── package.json
 └── README.md
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. Bookstore-API-

