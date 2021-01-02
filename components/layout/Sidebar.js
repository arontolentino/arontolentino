import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createApolloFetch } from 'apollo-fetch';

const Aside = styled('aside')`
  flex: 0 0 24rem;

  h3 {
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 1000px) {
    padding: 0 4rem;
  }
`;

const Tags = styled('ul')`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const Tag = styled('li')`
  margin-bottom: 2rem;
  margin-right: 0.75rem;

  a {
    font-size: 1.4rem;
    font-weight: 700;
    padding: 1rem;
    color: ${(props) => props.text};
    background: ${(props) => props.background};
  }
`;

const Sidebar = ({ tags }) => {
  return (
    <Aside>
      <Tags>
        {tags &&
          tags.map(({ node: { name, slug, color } }) => (
            <Tag background={color.background} text={color.text}>
              <a href={`/blog/tags/${slug}`}>{name}</a>
            </Tag>
          ))}
      </Tags>
    </Aside>
  );
};

export default Sidebar;
