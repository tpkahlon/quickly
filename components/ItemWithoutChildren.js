import React from "react";
import ReactMarkdown from "react-markdown";
import { Accordion, Card, Table, Button } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { MdContentCopy } from "react-icons/md";
import gfm from "remark-gfm";

const ItemWithoutChildren = ({
  index,
  source,
  title,
  settings,
  setSettings,
}) => {
  return (
    <Card bg="dark" text="light">
      <Accordion.Toggle as={Card.Header} eventKey={index}>
        {title}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={index}>
        <Card.Body>
          <ReactMarkdown
            children={source}
            remarkPlugins={[gfm]}
            components={{
              table: ({ children }) => {
                return (
                  <Table
                    striped
                    bordered
                    hover
                    responsive
                    size="sm"
                    className="m-0 text-white"
                  >
                    {children}
                  </Table>
                );
              },
              th: ({ children }) => {
                return <th className="w-50 text-left p-3">{children}</th>;
              },
              td: ({ children }) => {
                return (
                  <td className="w-50 text-left p-3 td-hook">
                    <div className="d-flex align-items-center">
                      <CopyToClipboard
                        text={children[0].props.children[0]}
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
                          className="d-flex align-items-center"
                        >
                          <MdContentCopy />
                        </Button>
                      </CopyToClipboard>
                      <span className="ml-3">{children}</span>
                    </div>
                  </td>
                );
              },
            }}
          />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};

export default ItemWithoutChildren;
