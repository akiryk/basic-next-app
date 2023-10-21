import { gql } from "@apollo/client";
import createApolloClient from "../apollo-client";

export default async function Home() {
  const client = createApolloClient();
  const { data } = await client.query({
    query: gql`
      query Books {
        books {
          author
          title
        }
      }
    `,
  });

  return (
    <main>
      <h2>Books</h2>
      <ul>
        {data.books.map((book) => (
          <li key={book.title}>
            <strong>{book.title}</strong>, by <em>{book.author}</em>
          </li>
        ))}
      </ul>
    </main>
  );
}
