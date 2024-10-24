import { useState } from "react";

export default function Accordion({ sections }) {
  const [opens, setOpens] = useState(new Set());

  const toggle = (value) => {
    const newSet = new Set(opens);
    newSet.has(value) ? newSet.delete(value) : newSet.add(value);
    setOpens(newSet);
  };

  return sections.map((section) => {
    const { value, title, content } = section;
    const isOpen = opens.has(value);
    return (
      <div key={value}>
        <div>
          <div onClick={() => toggle(value)}>
            {title + " "}
            <span
              aria-hidden={true}
              className={`accordion-icon ${
                isOpen && "accordion-icon--rotated"
              }`}
            />
          </div>
          {isOpen && <div>{content}</div>}
        </div>
      </div>
    );
  });
}
