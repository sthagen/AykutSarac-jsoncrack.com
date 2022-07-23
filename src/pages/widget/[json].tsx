import { decompress } from "compress-json";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
import { isValidJson } from "src/utils/isValidJson";
import styled from "styled-components";

const Graph = dynamic<any>(
  () => import("src/components/Graph").then((c) => c.Graph),
  { ssr: false }
);

const StyledAttribute = styled.a`
  position: fixed;
  bottom: 0;
  right: 0;
  color: ${({ theme }) => theme.INTERACTIVE_NORMAL};
  background: ${({ theme }) => theme.SILVER_DARK};
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 3px 0 0 0;
  opacity: 0.8;
`;

function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}

const Widget = () => {
  const { query, push } = useRouter();
  const [json, setJson] = React.useState("");

  React.useEffect(() => {
    const isJsonValid =
      typeof query.json === "string" &&
      isValidJson(decodeURIComponent(query.json));

    if (isJsonValid) {
      const jsonDecoded = decompress(JSON.parse(isJsonValid));
      const jsonString = JSON.stringify(jsonDecoded);

      setJson(jsonString);
    }

    // if (!inIframe()) push("/");
  }, [query.json]);

  return (
    <div>
      <Graph json={json} isWidget />
      <StyledAttribute
        href={`https://jsonvisio.com/editor?json=${query.json}`}
        target="_blank"
        rel="noreferrer"
      >
        jsonvisio.com
      </StyledAttribute>
    </div>
  );
};

export default Widget;