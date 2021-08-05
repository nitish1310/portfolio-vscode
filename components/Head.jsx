import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Nitish Soman is a Frontend Web Developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="nitish, nitish soman, soman, web developer, nitish web developer, nitish developer, mern stack, nitish portfolio, nitish react"
      />
      <meta property="og:title" content="Nitish Soman's Portfolio" />
      <meta
        property="og:description"
        content="A Frontend Web Developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Nitish Soman',
};
