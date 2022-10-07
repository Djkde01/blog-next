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

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetPostDetails(){
      posts(orderBy: createdAt_ASC last: 3){
        title
        featuredImage{
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
};

export const getSimilarPosts = async (slug, categories) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};

export const getCategories = async () => {
  const query = gql`
    query getCategories {
      categories {
        title
        slug
      }
    }
  `;
  const results = await request(graphqlAPI, query);

  return results.categories;
};

export const getPostDetailed = async (slug) => {
  const query = gql`
    query getPostDetailed($slug: String!) {
      post(where: { slug: $slug }) {
        createdAt
        slug
        title
        abstract
        content {
          raw
        }
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
  `;
  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};
