import { gql } from "@apollo/client";
import createApolloClient from "../apollo-client";

export default async function Home() {
  const client = createApolloClient();
  const { data } = await client.query({
    query: gql`
      query Students {
        students {
          firstName
          lastName
          id
        }
      }
    `,
  });

  return (
    <main>
      <h2>Student:</h2>
      <ul>
        {data.students.map((student) => (
          <li key={student.id}>
            <span>
              {`${student.firstName} ${student.lastName}:`}{" "}
              <em>{student.id}</em>
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}
