import React from "react";
import ReactMarkdown from "react-markdown";
import { Accordion, Card, Table, Button } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";

const ItemWithChildren = ({ index, source, title, settings, setSettings }) => {
  return (
    <Card bg="dark" text="light">
      <Accordion.Toggle as={Card.Header} eventKey={index}>
        {title}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={index}>
        <Card.Body className="p-0">
          <Table borderless hover responsive className="m-0" variant="dark">
            <thead>
              <tr>
                <th className="w-50 text-left">Prefix</th>
                <th className="w-50 text-left">Method</th>
              </tr>
            </thead>
            <tbody>
              {source.map((i, idx) => {
                return (
                  <tr
                    key={idx}
                    className={title === "React Components" ? "hook" : ""}
                  >
                    <td className="w-50 text-left">
                      <div className="d-flex align-items-center">
                        <CopyToClipboard
                          text={i.title.replace(/`/g, "")}
                          onCopy={() =>
                            setSettings({
                              ...settings,
                              show: true,
                            })
                          }
                        >
                          <Button
                            size="sm"
                            variant="secondary"
                            className="d-flex align-items-start"
                          >
                            <MdContentCopy />
                          </Button>
                        </CopyToClipboard>
                        <span className="span ml-3">
                          <ReactMarkdown children={i.title} />
                        </span>
                      </div>
                    </td>
                    <td className="text-left d-flex align-items-start">
                      <CopyToClipboard
                        text={
                          i.text && i.text.includes("`")
                            ? i.text
                                .replace(/`/g, "")
                                .replace("javascript", "")
                                .replace("JS", "")
                                .trim()
                            : i.text
                        }
                        onCopy={() =>
                          setSettings({
                            ...settings,
                            show: true,
                          })
                        }
                      >
                        <Button
                          size="sm"
                          variant="secondary"
                          className="d-flex align-items-center mr-3"
                        >
                          <MdContentCopy />
                        </Button>
                      </CopyToClipboard>
                      <ReactMarkdown children={i.text} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default ItemWithChildren;
