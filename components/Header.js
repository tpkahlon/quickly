import React from "react";
import { Jumbotron, Button, ButtonGroup } from "react-bootstrap";

const Header = () => {
  return (
    <Jumbotron fluid className="m-0 text-white rounded p-3 bg-dark">
      <h1>Quickly</h1>
      <p>
        Quickly is a reference site to learn about various shortcuts for
        JavaScript, React, Node while working inside Visual Studio Code. It is
        parsed from <strong>Damian Sznajder</strong>'s Markdown file hosted on
        GitHub.
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
