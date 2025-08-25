const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://localhost:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('Connected to MongoDB');
}

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);

async function addBook(title, author, price) {
  try {
    const book = new Book({ title, author, price });
    await book.save();
    console.log('Book added:', book);
  } catch (error) {
    console.error('Error adding book:', error.message);
  }
}

async function listBooks() {
  try {
    const books = await Book.find();
    console.log('All books:', books);
  } catch (error) {
    console.error('Error listing books:', error.message);
  }
}

async function findBookByTitle(title) {
  try {
    const book = await Book.findOne({ title });
    if (book) {
      console.log('Found book:', book);
    } else {
      console.log('Book not found with title:', title);
    }
  } catch (error) {
    console.error('Error finding book:', error.message);
  }
}

async function updateBookPrice(title, newPrice) {
  try {
    const book = await Book.findOneAndUpdate(
      { title },
      { price: newPrice },
      { new: true }
    );
    if (book) {
      console.log('Updated book price:', book);
    } else {
      console.log('Book not found to update with title:', title);
    }
  } catch (error) {
    console.error('Error updating book price:', error.message);
  }
}

async function run() {
  await main();

  await addBook('The Great Gatsby', 'F. Scott Fitzgerald', 10.99);
  await addBook('1984', 'George Orwell', 8.99);

  await listBooks();

  await findBookByTitle('1984');

  await updateBookPrice('1984', 9.99);

  await listBooks();

  mongoose.connection.close();
}

run();
