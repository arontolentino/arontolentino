import Head from 'next/head';
import styled from 'styled-components';
import BlogLayout from '../components/layout/BlogLayout';

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

const Blog = () => {
	return (
		<BlogLayout>
			<Head>
				<title>Blog | Aron Tolentino</title>
			</Head>

			<ArticleList>
				<Article>
					<Content href="#">
						<h3>
							<span>How to create your first VPS on DigitalOcean</span>
						</h3>
						<p>A complete guide from zero to having a DigitalOcean VPS</p>
					</Content>
					<Meta>
						<Date>August 20, 2020</Date>
						<div>
							<Tag href="#">Cloud</Tag>
						</div>
					</Meta>
				</Article>

				<Article>
					<Content href="#">
						<h3>
							<span>How to create your first VPS on DigitalOcean</span>
						</h3>
						<p>A complete guide from zero to having a DigitalOcean VPS</p>
					</Content>
					<Meta>
						<Date>August 20, 2020</Date>
						<div>
							<Tag href="#">Cloud</Tag>
						</div>
					</Meta>
				</Article>

				<Article>
					<Content href="#">
						<h3>
							<span>How to create your first VPS on DigitalOcean</span>
						</h3>
						<p>A complete guide from zero to having a DigitalOcean VPS</p>
					</Content>
					<Meta>
						<Date>August 20, 2020</Date>
						<div>
							<Tag href="#">Cloud</Tag>
						</div>
					</Meta>
				</Article>

				<Article>
					<Content href="#">
						<h3>
							<span>How to create your first VPS on DigitalOcean</span>
						</h3>
						<p>A complete guide from zero to having a DigitalOcean VPS</p>
					</Content>
					<Meta>
						<Date>August 20, 2020</Date>
						<div>
							<Tag href="#">Cloud</Tag>
						</div>
					</Meta>
				</Article>
			</ArticleList>
		</BlogLayout>
	);
};

export default Blog;
