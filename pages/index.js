import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Static Site</title>
        <meta name="description" content="This is a sample static site." />
        <meta property="og:title" content="My Static Site" />
        <meta
          property="og:description"
          content="This is a sample static site using Next.js."
        />
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          textAlign: "center",
        }}
      >
        <h1>Welcome to Static Site</h1>
        <img
          src="pic.jpg"
          alt="Example Image"
          loading="lazy"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </>
  );
}
