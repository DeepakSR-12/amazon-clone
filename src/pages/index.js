import { getSession } from "next-auth/client";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
        <link
          rel="shortcut icon"
          href="data:image/png;base64,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"
        ></link>
      </Head>
      <Header />

      <main className="max-w-screen-2xl mx-auto bg-gray-100">
        <Banner />

        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
      session,
    },
  };
};
