import { Stack, Typography } from "@mui/material";
import { csp } from "chained-style-props";
import type { GetServerSideProps, NextPage } from "next";
import { Layout } from "../components/layout";
import { IndexPageScripts, indexSpliter } from "../scripts";

const Home: NextPage<{ scripts: IndexPageScripts }> = ({ scripts }) => {
  const { pageTitle, startWithCommand, getStarted } = scripts;
  console.log(scripts);
  return (
    <Layout title={pageTitle}>
      <Stack spacing={2}>
        <Typography variant="h3">{getStarted}</Typography>
        <Typography>{startWithCommand}</Typography>
        <Typography style={{ backgroundColor: "#363e4d", color: "white", padding: 5 }}>npm install chained-style-props</Typography>
      </Stack>
    </Layout>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ req, locale }) => {
  const { scripts } = indexSpliter(locale as any);
  console.log(locale);
  return { props: { scripts } };
};
