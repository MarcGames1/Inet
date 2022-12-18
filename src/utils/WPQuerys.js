
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