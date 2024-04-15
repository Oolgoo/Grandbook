import { gql } from '@apollo/client';


const GET_ALL_SLUGS = gql`
query {
	blogs (sort: "date:desc", pagination:{limit: 130}) {
    data {
      attributes {
        slug
      }
    }
  }
}
`;


const GET_ALL_HOME_BLOGS = gql`
query {
	blogs (sort: "date:desc", pagination: { limit: 6 }) {
    data {
      attributes {
        title
        content
        date
        slug
		image {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
`;

const GET_ALL_BLOGS = gql`
query {
	blogs (sort: "date:desc") {
    meta{
      pagination {
        page
        total
        pageSize
        pageCount
      }
    }
    data {
      attributes {
        title
        content
        date
        slug
        blog_category {
          data {
            attributes {
              title
            }
          }
        }
		image {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
`;




const GET_INDIVIDUAL_POST = gql`
query($slug: String!) {
    blogs(filters: { slug: { eq: $slug } }) {
      data {
        attributes{
          title
          content
          date
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const GET_SERVICE = gql`
query{
  services{
    data{
      attributes{
        title
        content
        icon{
          data{
            attributes{
              url
            }
          }
        }
      }
    }
  }
}
`;

export const GET_HOME_COVER = gql`
query{
  homes(sort: "date:desc"){
    data{
      attributes{
        title
        description
        image{
          data{
            attributes{
              url
            }
          }
        }
        MobileImg{
          data{
            attributes{
              url
            }
          }
        }
      }
    }
  }
}
`;
export const GET_HOME_BOOKS = gql`
query{
  books(sort: "date:desc", pagination: { limit: 6 }){
    data{
      attributes{
        title
        description
        price
        slug
        image{
          data{
            attributes{
              url
            }
          }
        }
      }
    }
  }
}
`;
export const GET_ALL_BOOKS = gql`
query{
  books(sort: "date:desc"){
    data{
      id
      attributes{
        title
        description
        price
        slug
        audioLink
        image{
          data{
            attributes{
              url
            }
          }
        }
      }
    }
    
  }
}
`;

export const GET_CAT_BOOKS = gql`
query{
  bookCategories{
    data{
      attributes{
        title
        slug
        books(sort: "date:desc") {
          data{
            attributes{
              title
              image{
                data{
                  attributes{
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

export const GET_ALL_AUDIO_BOOKS = gql`
query{
  books(filters: {audioBook : {eq: true}}, sort: "date:desc"){
    data{
      attributes{
        title
        description
        price
        slug
        audioLink
        audioBook
        image{
          data{
            attributes{
              url
            }
          }
        }
      }
    }
    
  }
}
`;


export const GET_ALL_BOOKS_SLUGS = gql`
query {
	books(sort: "date:desc"){
    data {
      attributes {
        slug
      }
    }
  }
}
`;

export const GET_INDIVIDUAL_BOOKS = gql`
query($slug: String!) {
    books(filters: { slug: { eq: $slug } }) {
      data{
        attributes{
          title
          description
          date
          slug
          price
          folder
          audioLink
          writer
          page
          age
          image{
            data{
              attributes{
                url
              }
            }
          }
          listImage{
            data{
              attributes{
                url
              }
            }
          }
        }
      }
    }
  }
`;


export const GET_INDIVIDUAL_CAT_BOOKS = gql`
query($slug: String!){
  bookCategories(filters: { slug: { eq: $slug } }){
    data{
      attributes{
        title
        slug
        books(sort: "date:desc"){
          data{
            attributes{
              title
              description
              date
              slug
              price
              image{
                data{
                  attributes{
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

export const GET_CAT_BOOKS_SLUGS = gql`
query {
	bookCategories(sort: "date:desc"){
    data {
      attributes {
        slug
      }
    }
  }
}
`;

export const GET_HOME_LEARNING = gql`
query{
  trainings{
    data{
      attributes{
        title
        active
				date
        description
        slug
        video{
          data{
            attributes{
              url
            }
          }
        }
        frame
        content
      }
    }
  }
}
`;

export const GET_ALL_LEARNING = gql`
query{
  trainings{
    data{
      attributes{
        title
        active
				date
        description
        slug
        video{
          data{
            attributes{
              url
            }
          }
        }
        frame
        content
      }
    }
  }
}
`;

export const GET_ALL_LEARNING_SLUGS = gql`
query{
  trainings(sort: "date:desc"){
    data{
      attributes{
        slug
      }
    }
  }
}
`;

export const GET_INDIVIDUAL_LEARNINGS = gql`
query($slug: String!) {
    trainings(filters: { slug: { eq: $slug } }) {
      data{
        attributes{
          title
          description
          content
          slug
        }
      }
    }
  }
`;
export { GET_ALL_BLOGS, GET_INDIVIDUAL_POST, GET_ALL_SLUGS, GET_ALL_HOME_BLOGS, GET_SERVICE };