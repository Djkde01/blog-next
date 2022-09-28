import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query getPosts {
      postsConnection {
        edges {
          node {
            createdAt
            slug
            title
            abstract
            author {
              id
              name
              description
              photo {
                url
              }
            }
            featuredImage {
              url
            }
            categories {
              title
              slug
            }
          }
        }
      }
    }
  `;

  const results = await request(graphqlAPI, query);

  return results.postsConnection.edges;
};
