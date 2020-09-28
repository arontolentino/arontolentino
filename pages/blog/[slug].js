import React from "react";
import Head from "next/head";
import Moment from "react-moment";
import { createApolloFetch } from "apollo-fetch";
import styled from "styled-components";

import BlogLayout from "../../components/layout/BlogLayout";

const Title = styled("h1")`
  font-size: 5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Summary = styled("h2")`
  margin-bottom: 2rem;
`;

const Date = styled("p")`
  font-family: "Montserrat", sans-serif;
  margin-bottom: 4rem;
  padding-bottom: 4rem;
  border-bottom: 0.5px solid #000;
`;

const Content = styled("div")`
  border-bottom: 0.5px solid #000;
  p {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  code {
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
  }
`;

const Post = ({ post, tags }) => {
  const {
    title,
    content,
    summary: { summary },
    date,
  } = post;

  return (
    <BlogLayout tags={tags}>
      <Head>
        <title>Blog | Aron Tolentino</title>
      </Head>

      <Title>{title}</Title>
      <Summary>{summary}</Summary>
      <Date>
        Published on <Moment format="MMMM DD, YYYY">{date}</Moment>
      </Date>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </BlogLayout>
  );
};

export default Post;

export async function getStaticPaths() {
  try {
    const uri = "https://cms.arontolentino.com/graphql";

    const query = `
      query PostSlugs {
        posts {
          edges {
            node {
              slug
            }
          }
        }
      }
		`;

    const apolloFetch = createApolloFetch({ uri });

    const res = await apolloFetch({ query });

    const posts = await res.data.posts.edges;

    const paths = posts.map((post) => {
      return `/blog/${post.node.slug}`;
    });

    return { paths, fallback: false };
  } catch (err) {
    console.log(err.message);
  }
}

export async function getStaticProps({ params }) {
  try {
    const uri = "https://cms.arontolentino.com/graphql";

    const query = `
      query Post {
        postBy(slug: "${params.slug}") {
          id
          title
          content
          summary {
            summary
          }
          date
				}
				tags {
					edges {
						node {
							name
							slug
						}
					}
				}
      }
		`;

    const apolloFetch = createApolloFetch({ uri });

    const res = await apolloFetch({ query });

    return {
      props: {
        post: res.data.postBy,
        tags: res.data.tags.edges,
      },
    };
  } catch (err) {
    console.log(err.message);
  }
}
