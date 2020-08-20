import Head from 'next/head';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/layout/PageHeader';

const Blog = () => {
	return (
		<Layout>
			<Head>
				<title>Blog | Aron Tolentino</title>
			</Head>

			<PageHeader>Blog</PageHeader>
		</Layout>
	);
};

export default Blog;
