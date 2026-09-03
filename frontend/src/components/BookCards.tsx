import { useState } from "react";
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
/* id
  genre
  publsihed year
  */

type BookCardProps = {
  book: Book;
  onSeeMore: () => void;
};

function BookCard({ book, onSeeMore }: BookCardProps) {
  const [showMore, setShowMore] = useState(false);
  const handleClick = () => {
    setShowMore(true);
  };
  return (
    <div className="book-card">
      <div className="topCover">
        <img
          src={`https://aseye-book-covers-2026.s3.us-east-1.amazonaws.com/${book.coverImage}`}
          alt={book.title}
          className="bookCover"
        />
      </div>
      <h3>{book.title}</h3>
      <h5>{book.author}</h5>
      <p className="stars">
        {Array.from({ length: Math.floor(book.rating) }).map((_, index) => (
          <img key={index} src="/yellow-star.png" alt="star" className="star" />
        ))}
        {book.rating % 1 === 0.5 && (
          <img src="/half-star.png" alt="half star" className="star" />
        )}
        {book.rating}
      </p>
      <p>
        Read: {book.startDate} - {book.endDate}
      </p>
      <button onClick={onSeeMore}>See more...</button>
    </div>
  );
}

export default BookCard;
