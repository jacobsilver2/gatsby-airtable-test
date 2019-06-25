import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Parent from '../components/Parent';


const AllFutureAirtableEventsQuery = graphql`
query MyQuery {
  allAirtable (sort: {fields: data___Date, order: ASC}) {
    edges {
      node {
        id
        data {
          Name
          Date(formatString: "MMMM Do YYYY, h:mm a")
          Act_Blurb
          Act_Website
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
            <Parent 
              key={node.id}
              name={node.data.Name}
              date={node.data.Date}
              description={node.data.Act_Blurb}
              image={node.data.Act_Image ? node.data.Act_Image[0].thumbnails.large.url : ''}
              website={node.data.Act_Website ? node.data.Act_Website[0] : ''}
            />
          ))}
        </Layout>
      </div>
    )}}

  />
)

export default Events;