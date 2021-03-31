import { useState } from "react";
import { css } from "@emotion/core";
import FadeLoader from "react-spinners/FadeLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Spinner = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("deepSkyBlue");

  return (
    <div style={{display: 'block', margin: '50px auto'}}>
      <FadeLoader color={color} loading={loading} css={override} size={150} />
    </div>
  );
}

export default Spinner;