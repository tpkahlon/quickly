import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import Item from "./Item";
import Header from "./Header";
import Footer from "./Footer";

const Content = ({ settings, setSettings }) => {
  const { content } = settings;
  let data = [];
  let keys = [
    "Basic Methods",
    "React",
    "React Hooks",
    "Redux",
    "React Native",
    "PropTypes",
    "GraphQL",
    "Console",
    "React Components",
    "React Native Components",
    "Others",
  ];
  let page = content;
  let count = 1;
  for (let i = 0; i < keys.length; i++) {
    const hasChildren = () => {
      let childKeys = [];
      const childKey = page[keys[i]];
      for (let item in childKey) {
        childKeys.push({
          index: count,
          title: item,
          text: childKey[item].raw,
        });
      }
      return childKeys;
    };
    const revisedText =
      page[keys[i]].raw && page[keys[i]].raw.replace(/→|->/gi, "");
    data.push({
      index: count,
      title: keys[i],
      text: revisedText || hasChildren(),
    });
    count++;
  }
  console.log(data);
  return (
    <div className="min-vh-100 app">
      <Container>
        <Row>
          <Col xs={12} className="mt-3 mb-0">
            <Header />
          </Col>
          <Col xs={12} className="my-3">
            <Accordion className="rounded" defaultActiveKey={1}>
              {data
                .sort((a, b) =>
                  a.title.toLowerCase() < b.title.toLowerCase() ? -1 : 1
                )
                .map((i, index) => {
                  return (
                    <Item
                      key={++index}
                      index={++index}
                      source={i.text}
                      title={i.title}
                      settings={settings}
                      setSettings={setSettings}
                    />
                  );
                })}
            </Accordion>
          </Col>
          <Col xs={12} className="mt-0 mb-3">
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Content;
