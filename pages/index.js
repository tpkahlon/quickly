import Head from "next/head";
import mdParse from "md-2-json";
import React, { useState } from "react";
import Content from "../components/Content";
import Notification from "../components/Notification";

export default function Home({ data, text }) {
  const [settings, setSettings] = useState({
    content: data,
    show: false,
  });
  return (
    <>
      <Head>
        <title>Shortcuts</title>
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1024px-Visual_Studio_Code_1.18_icon.svg.png"
        />
        <link
          rel="apple-touch-icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1024px-Visual_Studio_Code_1.18_icon.svg.png"
        />
      </Head>
      <Content settings={settings} setSettings={setSettings} />
      <Notification settings={settings} setSettings={setSettings} />
    </>
  );
}

Home.getInitialProps = async () => {
  const titles = [
    "### Basic Methods",
    "### React",
    "### React Hooks",
    "### React Native",
    "### Redux",
    "### PropTypes",
    "### GraphQL",
    "### Console",
    "### React Components",
    "## React Native Components",
    "## Others",
  ];
  const r = await fetch(
    `https://raw.githubusercontent.com/dsznajder/vscode-es7-javascript-react-snippets/master/README.md`
  );
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
