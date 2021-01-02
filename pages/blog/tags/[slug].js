import React from 'react';
import Head from 'next/head';
import Moment from 'react-moment';
import { createApolloFetch } from 'apollo-fetch';
import styled from 'styled-components';

import BlogLayout from '../../../components/layout/BlogLayout';

const TagTitle = styled('h1')`
  font-size: 3.5rem;
  font-weight: 500;
  margin-bottom: 3rem;
  padding-left: 1.2rem;
`;

const ArticleList = styled('ol')`
  list-style: none;
`;

const Article = styled('li')`
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 1.2rem;
  border-bottom: 0.5px solid #000;
  transition: all 0.5s cubic-bezier(0.25, 1, 0.33, 1);

  :hover {
    background: #f0f0f0;
  }
`;

const Content = styled('a')`
  h3 {
    font-size: 3rem;
    line-height: 4.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.8rem;
    margin-bottom: 3rem;
  }

  span {
    /* border-bottom: 5px solid transparent; */
    transition: all 0.5s cubic-bezier(0.25, 1, 0.33, 1);
  }

  :hover {
    span {
      /* border-bottom: 5px solid #000; */
    }
  }
`;

const Meta = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 0 0 17.5rem;
`;

const Date = styled('p')`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;
const Tag = styled('a')`
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  background: blue;
  padding: 1.5rem 2rem;
`;

const Post = ({ tag, tags }) => {
  const { name, posts } = tag;

  return (
    <BlogLayout tags={tags}>
      <TagTitle>All the {name} posts:</TagTitle>

      <ArticleList>
        {posts.edges.map(({ node }) => {
          const {
            title,
            summary: { summary },
            tags,
            slug,
          } = node;

          return (
            <Article>
              <Content href={`/blog/${slug}`}>
                <h3>{title}</h3>
                <p>{summary}</p>
              </Content>
              <Meta>
                <Date>August 20, 2020</Date>
                <div>
                  <Tag href={`/blog/tags/${tags.edges[0].node.slug}`}>
                    {tags.edges[0].node.name}
                  </Tag>
                </div>
              </Meta>
            </Article>
          );
        })}
      </ArticleList>
    </BlogLayout>
  );
};

export default Post;

export async function getStaticPaths() {
  try {
    const uri = 'https://cms.arontolentino.com/graphql';

    const query = `
      query Tags {
        tags {
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

    const tags = await res.data.tags.edges;

    const paths = tags.map((tag) => {
      return `/blog/tags/${tag.node.slug}`;
    });

    return { paths, fallback: false };
  } catch (err) {
    console.log(err.message);
  }
}

export async function getStaticProps({ params }) {
  try {
    const uri = 'https://cms.arontolentino.com/graphql';

    const query = `
			query Tags {
				tag(id: "${params.slug}", idType: SLUG) {
					name
					posts {
						edges {
							node {
								id
								title
								slug
								content
								summary {
									summary
								}
								date
								tags {
									edges {
										node {
											name
											slug
										}
									}
								}
							}
						}
					}
				}
				tags {
					edges {
						node {
							name
							slug
							color {
								text
								background
							}
						}
					}
				}
			}
		
		`;

    const apolloFetch = createApolloFetch({ uri });

    const res = await apolloFetch({ query });

    return {
      props: {
        tag: res.data.tag,
        tags: res.data.tags.edges,
      },
    };
  } catch (err) {
    console.log(err.message);
  }
}
