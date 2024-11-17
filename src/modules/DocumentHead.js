// next imports
import Head from "next/head";

const DocumentHead = ({ title }) => {
  return (
    <Head>
      <title>{title || "SnappFood"}</title>
      <link rel="icon" type="image/png" href="/favicon.png" />
    </Head>
  );
};

export default DocumentHead;
