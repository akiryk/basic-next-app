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

  type Student = {
    firstName: string;
    lastName: string;
    id: string;
  };

  return (
    <main>
      <h2>Students</h2>
      <ul>
        {data.students.map((student: Student) => (
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
