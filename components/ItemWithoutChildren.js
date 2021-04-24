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
        <Card.Body className="p-0">
          <ReactMarkdown
            children={source}
            remarkPlugins={[gfm]}
            components={{
              table: ({ children }) => {
                return (
                  <Table
                    borderless
                    hover
                    responsive
                    className="m-0"
                    variant="dark"
                  >
                    {children}
                  </Table>
                );
              },
              th: ({ children }) => {
                return <th className="w-50 text-left">{children}</th>;
              },
              td: ({ children }) => {
                return (
                  <td className="w-50 text-left td-hook">
                    <div className="d-flex align-items-start">
                      <CopyToClipboard
                        text={
                          children[0].props.children[0]
                            ? children[0].props.children[0].trim()
                            : false
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
                      <span>{children}</span>
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
