import React from "react";
import "./styles.css";
import { useState } from "react";

const goodbook = {
  Polity: [
    {
      name: "Indian Polity by M Laxmikant",
      rating: "5/5",
      description:
        "Indias struggle for Independence by Bipin Chandra is your go to book for an in-depth and detailed overview on Indian independence movement ."
    },
    {
      name: "Indian Governance by M Laxmikant",
      rating: "4.5/5",
      description:
        "The book deals with every little detail that aggregates with the major events, corresponding to the governance system in India."
    },
    {
      name: "Maharashtra",
      rating: "4.5/5",
      description:
        "Maharashtra is in the west part of India. It is on the coast of the Arabian Sea."
    }
  ],
  International_Relation: [
    {
      name: " of World Politics by smith & Bylis",
      rating: "5/5",
      description:
        "Trusted by over 300,000 students in over 120 countries, The Globalization of World Politics is the most authoritative and complete introduction to IR available, making it the go-to text for students of international relations"
    },
    {
      name: "Global Politics bGlobalizationy Andrew Hywood",
      rating: "5/5",
      description:
        "In this extensively revised new edition of Global Politics, internationally renowned author Andrew Heywood provides a systematic and integrated analysis of the theory and practice of contemporary international relations."
    },
    {
      name: "Clash Of Civilization by Samuel P Huntington",
      rating: "4/5",
      description:
        "The Clash of Civilizations and the Remaking of World Order is an expansion of the 1993 Foreign Affairs article written by Samuel Huntington that hypothesized a new post-Cold War world order."
    }
  ],
  History: [
    {
      name: "Freedom struggle of Indian Independance by Mahathma Gandi",
      rating: "4.5/5",
      description:
        "Mahatma Gandhi was the leader who guided India towards Independence. India was under the British rule for over 250 years. "
    },
    {
      name: "Ancient India by Lewis H. Morgan",
      rating: "4/5",
      description:
        "This work has been selected by scholars as being culturally important, and is part of the knowledge base of civilization as we know it. This work was reproduced from the original artifact, and remains as true to the original work as possible."
    }
  ]
};

export default function App() {
  const [selectGenre, setGenre] = useState("History");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>📒GoodBooks📖</h1>
      <p>
        Checkout my favorite books of below genre. Select a genre to know my
        favorite books of that genre.
      </p>
      <div>
        {Object.keys(goodbook).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#FEE2E2",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div id="div" style={{ textAlign: "centre" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {goodbook[selectGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "3px solid #FEE2E2",
                width: "50%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              {""}
              <div style={{ fontSize: "larger", textAlign: "center" }}>
                {book.name}
              </div>
              <div style={{ fontSize: "smaller" }}>{book.rating}</div>
              <div style={{ fontSize: "smaller" }}>{book.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
