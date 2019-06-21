import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import GridItem from '../components/GridItem';


const AllFutureAirtableEventsQuery = graphql`
query MyQuery {
  allAirtable {
    edges {
      node {
        data {
          Name
          Date(formatString: "MMMM Do YYYY, h:mm a")
          Act_Image {
            thumbnails {
              large {
                url
              }
            }
            url
          }
        }
      }
    }
  }
}

`

const Events = () => (
  <StaticQuery 
    query={AllFutureAirtableEventsQuery}
    render={data => {
      console.log(data)
      return (<div>
        <Layout>
          {data.allAirtable.edges.map(({ node }) => (
            <GridItem 
              name={node.data.Name}
              date={node.data.Date}
              image={node.data.Act_Image ? node.data.Act_Image[0].thumbnails.large.url : ''}
            />
          ))}
        </Layout>
      </div>
    )}}

  />
)

export default Events;