// src/utils/chemFormat.jsx
import React from "react";

const AutoSciText = ({ text }) => {
  if (!text) return null;

  // 1. Greek fixes
  const cleanedText = text.replace(/\$\\?mu\$/g, "μ").replace(/muSR/g, "μSR");

  // 2. Convert custom subscript formats → markers
  // Supports: T_C and T$/C
  const withSubscripts = cleanedText
    .replace(/([A-Za-z])_([A-Za-z0-9]+)/g, "$1§SUB§$2§END§")
    .replace(/([A-Za-z])\$\/([A-Za-z0-9]+)/g, "$1§SUB§$2§END§");

  // 3. Exceptions
  const exceptions = ["D1", "P24", "BL09", "BL12", "BL02", "3d", "2D"];

  // 4. Tokenize
  const tokens = withSubscripts.split(/([a-zA-Z0-9§]+)/);

  return (
    <>
      {tokens.map((token, index) => {
        // Exception check
        if (exceptions.includes(token)) {
          return <React.Fragment key={index}>{token}</React.Fragment>;
        }

        // --- Handle custom subscripts (T_C etc.) ---
        if (token.includes("§SUB§")) {
          const [base, subPart] = token.split("§SUB§");
          const sub = subPart.replace("§END§", "");

          return (
            <React.Fragment key={index}>
              {base}
              <sub className="text-[0.75em] leading-none relative -bottom-[0.3em] align-baseline">
                {sub}
              </sub>
            </React.Fragment>
          );
        }

        // --- Chemical formula logic ---
        if (/[A-Z][a-z]?\d+/.test(token)) {
          const chemParts = [];
          const regex = /([A-Z][a-z]?)(\d+)/g;
          let lastIdx = 0;
          let match;

          while ((match = regex.exec(token)) !== null) {
            if (match.index > lastIdx) {
              chemParts.push(token.substring(lastIdx, match.index));
            }

            chemParts.push(match[1]);

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
