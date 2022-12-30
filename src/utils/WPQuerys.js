
export const AuthorPageQ = `query AuthorPage($uri: String = "alexandru-marcu") {
  nodeByUri(uri: $uri) {
    ... on Page {
      id
      blocksJSON
      title
      featuredImage {
        node {
          altText
          caption
          description
          sourceUrl
        }
      }
      author {
        node {
          email
          name
          firstName
          lastName
          description
          id
        }
      }
    }
  }
}`;



export const PostsQuery = (page = 1) => {
  return `
    query Posts    {
      posts (first: 10000) {
        edges {
          node {
            id
            title
            excerpt
            uri
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
          }
          cursor
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          offsetPagination {
            hasMore
            hasPrevious
            total
          }
        }
      }
    }
  `;
};
export const AllPostsData = (number = 99999) => `AllPostsData {
  posts(first: ${number}) {
    edges {
      node {
        id
        title
        excerpt
        uri
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
  }
}`;

export const AllPostsUri = () => `{
  posts {
    edges {
      node {
        uri
      }
    }
  }
}`;

export const PostDataByUri = (uri) => `query getPostByURI($uri: String="${uri}") {
  postBy(uri: $uri) {
    id
    title
    content
    date
    blocksJSON
    featuredImage{
      node{
        sourceUrl
      }
    }
  }
}
`;