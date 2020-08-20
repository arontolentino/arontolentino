import Head from 'next/head';
import Layout from '../components/layout/Layout';
import PageHeader from '../components/layout/PageHeader';

const About = () => {
	return (
		<Layout>
			<Head>
				<title>About | Aron Tolentino</title>
			</Head>

			<PageHeader>About</PageHeader>
		</Layout>
	);
};

export default About;
