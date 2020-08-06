import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout/Layout';
import Work from '../components/home/Work';
import Blog from '../components/home/Blog';

export default () => {
	return (
		<Layout>
			<Work />
			<Blog />
		</Layout>
	);
};
