import React from "react";

export default function  Footer() {
    return (
        <div className="Footer">
        Coded by{" "}
        <a
          href="https://preeminent-seahorse-84c5ef.netlify.app/"
          alt="Luna Smith portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio"
        >
          Luna Smith
        </a>{" "}
        , open-source on{" "}
        <a
          href="https://github.com/Lu-Smith/tesla_page"
          alt="Luna Smith GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio"
        >
          GitHub
        </a>
        </div>
    );
}