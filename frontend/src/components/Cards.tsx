import BookCard from "./BookCards";
import { useEffect, useState } from "react";
import BookModal from "./Modal";
import YearSelection from "./YearSelection";

type Book = {
  bookId: string;
  title: string;
  author: string;
  rating: number;
  review: string;
  coverImage: string;
  startDate: string;
  endDate: string;
  genre: string;
  publishedYear: number;
};

type CardsProps = {
  selectedYear: string;
};

function Cards({ selectedYear }: CardsProps) {
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  useEffect(() => {
    fetch("https://n3irotgv6a.execute-api.us-east-1.amazonaws.com/prod/books")
      .then((response) => {
        console.log("Response:", response);
        return response.json();
      })
      .then((data) => {
        console.log("Data:", data);
        setBooks(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  if (selectedYear !== "2026") {
    return (
      <div className="empty-year">
        <p>No books tracked for {selectedYear} yet — check back later!</p>
      </div>
    );
  }

  const sortedBooks = books.sort(
    (a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime(),
  );

  return (
    <div>
      <div className="cards">
        {books.map((book) => (
          <BookCard
            key={book.bookId}
            book={book}
            onSeeMore={() => setSelectedBook(book)}
          />
        ))}
      </div>

      {selectedBook && (
        <BookModal book={selectedBook} onClose={() => setSelectedBook(null)} />
      )}
    </div>
  );
}

export default Cards;
