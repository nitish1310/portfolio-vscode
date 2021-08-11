import Experience from "../components/Experience";

const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <Experience />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
