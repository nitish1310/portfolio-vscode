import AboutCard from "../components/AboutCard";

const AboutPage = () => {
  return (
    <>
      <AboutCard />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
