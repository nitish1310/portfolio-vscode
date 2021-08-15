import Education from "../components/Education";

const EducationPage = () => {
  return (
    <>
      {/* <h1>About Page</h1> */}
      <Education />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Education" },
  };
}

export default EducationPage;
