// src/utils/chemFormat.jsx
import React from "react";

const AutoSciText = ({ text }) => {
  if (!text) return null;

  // 1. Bulletproof Greek Dictionary
  // - Catches "$mu$" (if JS swallowed the backslash)
  // - Catches "$\mu$" (if strictly formatted)
  // - Catches plain "muSR" and fixes it automatically
  const cleanedText = text.replace(/\$\\?mu\$/g, "μ").replace(/muSR/g, "μSR");

  // 2. Exceptions: Words with numbers we DO NOT want to subscript
  const exceptions = ["D1", "P24", "BL09", "BL12", "BL02", "3d", "2D"];

  // 3. Split the text into individual words and punctuation marks
  const tokens = cleanedText.split(/([a-zA-Z0-9]+)/);

  return (
    <>
      {tokens.map((token, index) => {
        // If it's in our exception list, return it normally
        if (exceptions.includes(token)) {
          return <React.Fragment key={index}>{token}</React.Fragment>;
        }

        // Logic check: Does this word look like chemistry?
        if (/[A-Z][a-z]?\d+/.test(token)) {
          const chemParts = [];
          const regex = /([A-Z][a-z]?)(\d+)/g;
          let lastIdx = 0;
          let match;

          // Parse the chemical formula
          while ((match = regex.exec(token)) !== null) {
            if (match.index > lastIdx) {
              chemParts.push(token.substring(lastIdx, match.index));
            }
            chemParts.push(match[1]); // Element

            // Subscript Number (Updated with better alignment classes)
            chemParts.push(
              <sub
                key={`${index}-${match.index}`}
                className="text-[0.75em] leading-none relative -bottom-[0.3em] align-baseline"
              >
                {match[2]}
              </sub>,
            );
            lastIdx = regex.lastIndex;
          }

          if (lastIdx < token.length) {
            chemParts.push(token.substring(lastIdx));
          }

          return <React.Fragment key={index}>{chemParts}</React.Fragment>;
        }

        return <React.Fragment key={index}>{token}</React.Fragment>;
      })}
    </>
  );
};

export default AutoSciText;
