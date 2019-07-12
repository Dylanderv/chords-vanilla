import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  credentials: "include"
});

export async function getAuthenticatedUser () {
  try {
    return await client.query({
      query: gql`
        {me{
          username
        }}
      `
    })
  } catch (err) {
    console.error(err)
  }
}

