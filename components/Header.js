import React from "react";
import { Jumbotron, Button, ButtonGroup } from "react-bootstrap";

const Header = () => {
  return (
    <Jumbotron fluid className="m-0 text-white rounded p-3 bg-dark">
      <h1>Shortcuts</h1>
      <p>
        Shortcuts provide a friendly presentational site for developers to
        quickly learn various shortcuts for JavaScript, React, Node from{" "}
        <strong>Damian Sznajder</strong>'s Markdown file.
      </p>
      <ButtonGroup aria-label="Action buttons">
        <Button
          variant="success"
          href="https://github.com/dsznajder/vscode-es7-javascript-react-snippets/blob/master/README.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          Reference
        </Button>
        <Button
          variant="info"
          href="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download
        </Button>
        <Button
          variant="secondary"
          href="https://github.com/tpkahlon/shortcuts"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </Button>
      </ButtonGroup>
    </Jumbotron>
  );
};

export default Header;
