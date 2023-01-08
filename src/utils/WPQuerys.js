
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
      posts (first: ${page * 10}) {
     edges {
      node {
        id
        title
        excerpt
        uri
        featuredImage {
          node {
            altText
            caption
            description
            sourceUrl
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
          caption
          description
          sourceUrl
        }
      }
    }
  }
}`;

export const AllPostsUri = (number = 10) => `{
  posts (first: ${number}) {
    edges {
      node {
        uri
      }
    }
  }
}`;

export const PostDataByUri = (uri) => `query getPostByURI($uri: String="${uri}") {
  postBy(uri: $uri){
  id
  title
  content
  author {
    node {
      firstName
      lastName
      dateSuplimentareAutor {
        descriereAutor
        fieldGroupName
        functie
        instagram
        tikTok
        youtube
        authorpic {
          altText
          mediaItemUrl
        }
      }
      description
    }
  }
  blocksJSON
  featuredImage {
    node {
      altText
      sourceUrl
    }
  }
  }
}`;