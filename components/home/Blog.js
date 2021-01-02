import React from 'react';
import SectionTitle from '../layout/SectionTitle';
import styled from 'styled-components';
import Post from '../Post';
import PrimaryBtn from '../layout/PrimaryBtn';

const Section = styled('section')`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 10rem;
`;

const ArticleList = styled('ol')`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 5rem;
`;

const Article = styled('li')`
  flex: 0 0 48.5%;
  display: flex;
  justify-content: space-between;
  padding: 2.5rem 1.2rem;
  border-bottom: 0.5px solid #000;
  transition: all 0.5s cubic-bezier(0.25, 1, 0.33, 1);

  :hover {
    background: #f0f0f0;
  }

  @media only screen and (max-width: 1000px) {
    flex: 0 0 100%;
  }

  @media only screen and (max-width: 500px) {
    flex-direction: column-reverse;
  }
`;

const Content = styled('a')`
  min-height: 19rem;

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

  @media only screen and (max-width: 500px) {
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    flex: auto;
    margin-bottom: 2rem;
  }
`;

const Date = styled('p')`
  font-size: 1.8rem;
  margin-bottom: 2rem;

  @media only screen and (max-width: 500px) {
    margin: 0;
  }
`;

const Tag = styled('a')`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${(props) => props.text};
  background: ${(props) => props.background};
  padding: 1.5rem 2rem;

  @media only screen and (max-width: 500px) {
    padding: 0.5rem 1rem;
  }
`;

const BtnContainer = styled('div')`
  display: flex;
  justify-content: flex-end;
`;

const Blog = ({ posts }) => {
  return (
    <Section>
      <SectionTitle>
        <h2>From the blog</h2>
      </SectionTitle>

      <ArticleList>
        {posts.map(({ node }) => {
          const {
            title,
            summary: { summary },
            tags,
            slug,
          } = node;

          return (
            <Article>
              <Content href={`blog/${slug}`}>
                <h3>{title}</h3>
                <p>{summary}</p>
              </Content>
              <Meta>
                <Date>August 20, 2020</Date>
                <div>
                  <Tag
                    href={`/tags/${tags.edges[0].node.slug}`}
                    background={tags.edges[0].node.color.background}
                    text={tags.edges[0].node.color.text}
                  >
                    {tags.edges[0].node.name}
                  </Tag>
                </div>
              </Meta>
            </Article>
          );
        })}
      </ArticleList>

      <BtnContainer>
        <PrimaryBtn href="/blog">View more posts</PrimaryBtn>
      </BtnContainer>
    </Section>
  );
};

export default Blog;
