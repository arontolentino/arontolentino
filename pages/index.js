import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout/Layout';
import Work from '../components/home/Work';
import Blog from '../components/home/Blog';
import Hero from '../components/home/Hero';

export default () => {
	return (
		<Layout>
			<Hero />
			<Work />
			<Blog />
		</Layout>
	);
};
