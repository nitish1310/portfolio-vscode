import Experience from "../components/Experience";

const ExperiencePage = () => {
  return (
    <>
      {/* <h1>About Page</h1> */}
      <Experience />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Experience" },
  };
}

export default ExperiencePage;
