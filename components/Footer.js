import React from "react";
import { Jumbotron } from "react-bootstrap";

const Footer = () => {
  return (
    <Jumbotron fluid className="m-0 bg-dark text-white rounded p-3">
      <p className="mb-2">
        Built with{" "}
        <a
          className="text-info text-decoration-none"
          target="_blank"
          rel="noopener noreferrer"
          href="https://nextjs.org/"
        >
          Next
        </a>
        .
      </p>
      <p className="m-0">
        Inspired by Shopify's{" "}
        <a
          className="text-info text-decoration-none"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.shopify.ca/partners/shopify-cheat-sheet"
        >
          Liquid Cheat Sheet
        </a>
        .
      </p>
    </Jumbotron>
  );
};

export default Footer;
