import ArticleCard from '../components/ArticleCard';
import styles from '../styles/ArticlesPage.module.css';

const ArticlesPage = ({ articles }) => {
  return (
    <>
    <h1>Articles Page</h1>
  </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Article" },
  };
}

export default ArticlesPage;
