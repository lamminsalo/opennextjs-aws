import type querystring from "node:querystring";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
  PreviewData,
} from "next";

export async function getServerSideProps(
  context: GetServerSidePropsContext<querystring.ParsedUrlQuery, PreviewData>,
) {
  const { q } = context?.query || "";

  return {
    props: {
      time: new Date().toISOString(),
      envVar: process.env.SOME_PROD_VAR,
      q: q,
    },
  };
}

export default function Page({
  time,
  envVar,
  q,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <h1>SSR</h1>
      <div className="flex">Time: {time}</div>
      <div>Env: {envVar}</div>
      <div>q: {q}</div>
    </>
  );
}
