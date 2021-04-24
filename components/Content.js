import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import Item from "./Item";
import Header from "./Header";
import Footer from "./Footer";
import { KEYS } from "../common";

const Content = ({ settings, setSettings }) => {
  const { content } = settings;
  let data = [];
  let count = 1;
  for (let i = 0; i < KEYS.length; i++) {
    const hasChildren = () => {
      let childKeys = [];
      const childKey = content[KEYS[i]];
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
      content[KEYS[i]].raw && content[KEYS[i]].raw.replace(/→|->/gi, "");
    data.push({
      index: count,
      title: KEYS[i],
      text: revisedText || hasChildren(),
    });
    count++;
  }
  return (
    <div className="min-vh-100 app">
      <Container>
        <Row>
          <Col xs={12} className="mt-3 mb-0">
            <Header />
          </Col>
          <Col xs={12} className="my-3">
            <Accordion className="rounded">
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
