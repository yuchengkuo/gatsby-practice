/** @jsx jsx */
import { jsx } from "theme-ui";

const heading = (Tag) => (props) => {
  if (!props.id) return <Tag {...props} />;
  return (
    <Tag {...props}>
      <a
        href={`#${props.id}`}
        sx={{
          variant: "styles.a",
          textDecoration: "none",
          ":hover": { textDecoration: "underline" },
        }}
      >
        {props.children}
      </a>
    </Tag>
  );
};
const components = {
  h2: heading("h2"),
  h4: heading("h4"),
};
export default components;
