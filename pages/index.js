import Head from "next/head";
import mdParse from "md-2-json";
import React, { useState } from "react";
import Content from "../components/Content";
import Notification from "../components/Notification";
import { URL } from "../common";

export default function Home({ data, text }) {
  const [settings, setSettings] = useState({
    content: data,
    show: false,
  });
  return (
    <>
      <Head>
        <title>Quickly</title>
      </Head>
      <Content settings={settings} setSettings={setSettings} />
      <Notification settings={settings} setSettings={setSettings} />
    </>
  );
}

Home.getInitialProps = async () => {
  const r = await fetch(URL);
  const j = await r.text();
  const lines = j.split("\n");
  const newLines = lines
    .map((i) => {
      if (i === "### Basic Methods") return "# Basic Methods";
      if (i === "### React") return "# React";
      if (i === "### React Hooks") return "# React Hooks";
      if (i === "### Basic Methods") return "# Basic Methods";
      if (i === "### React Native") return "# React Native";
      if (i === "### Redux") return "# Redux";
      if (i === "### PropTypes") return "# PropTypes";
      if (i === "### GraphQL") return "# GraphQL";
      if (i === "### Console") return "# Console";
      if (i === "### React Components") return "# React Components";
      if (i === "## React Native Components")
        return "# React Native Components";
      if (i === "## Others") return "# Others";
      return i;
    })
    .map((i) => {
      if (i.includes("###")) return i.replace("###", "##");
      return i;
    });
  const findFirstLineIndex = newLines.findIndex((i) =>
    i.includes("# Basic Methods")
  );
  const findLine = newLines.splice(findFirstLineIndex);
  const newLine = findLine.join("\n");
  const markdown = mdParse.parse(newLine);
  return {
    data: markdown,
    text: newLine,
  };
};
