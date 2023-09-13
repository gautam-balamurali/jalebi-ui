import { CodeBlock, paraisoDark } from "react-code-blocks";
import { Badge } from "../../../components/features/badge/Badge";
import "./BadgeDocs.css";

export const BadgeDocs = () => {
  return (
    <div className="component-doc">
      <h2>Badge Component</h2>
      <p>
        Badges are used to highlight an item's status for quick recognition.
      </p>
      <h3>Usage</h3>
      <div className="usage">
        <Badge />
      </div>
      <p>
        <CodeBlock
          text={`
          <Badge />
        `}
          language="jsx"
          showLineNumbers={false}
          className="code-block"
          theme={paraisoDark}
        />
      </p>
      <h3>Badge Color Scheme</h3>
      <p>
        Pass the <code>colorScheme</code> prop to customize the color of the
        Badge. colorScheme can be <code>default, green, red, and purple</code>.
      </p>
      <div className="usage make-flex">
        <Badge colorScheme="default" text="default" />
        <Badge colorScheme="green" text="success" />
        <Badge colorScheme="red" text="removed" />
        <Badge colorScheme="purple" text="new" />
      </div>
      <p>
        <CodeBlock
          text={`
          <Badge colorScheme="default" text="default" />
          <Badge colorScheme="green" text="success" />
          <Badge colorScheme="red" text="removed" />
          <Badge colorScheme="purple" text="new" />
       `}
          language="jsx"
          showLineNumbers={false}
          className="code-block"
          theme={paraisoDark}
        />
      </p>
      <h3>Badge Variants</h3>
      <p>
        Pass the <code>variant</code> prop and set it to either{" "}
        <code>subtle, solid, or outline</code> to get a different style.
      </p>
      <div className="usage make-flex">
        <Badge colorScheme="green" variant="outline" />
        <Badge colorScheme="green" variant="solid" text="success" />
        <Badge colorScheme="red" text="removed" variant="subtle" />
      </div>
      <p>
        <CodeBlock
          text={`
          <Badge colorScheme="green" variant="outline" />
          <Badge colorScheme="green" variant="solid" text="success" />
          <Badge colorScheme="red" text="removed" variant="subtle" />
      `}
          language="jsx"
          showLineNumbers={false}
          className="code-block"
          theme={paraisoDark}
        />
      </p>
      <h3>Different Sized Badges</h3>
      <p>
        Use <code>Size</code> prop to change the size of the badge. You can use{" "}
        <strong>three</strong> sizes for badges, i.e.{" "}
        <strong>sm, md, lg</strong>. The default value is <code>sm</code>
      </p>
      <div className="usage make-flex">
        <Badge colorScheme="purple" size="sm" text="new" />
        <Badge colorScheme="purple" size="md" text="new" />
        <Badge colorScheme="purple" size="lg" text="new" />
      </div>
      <p>
        <CodeBlock
          text={`<div className="usage make-flex">
          <Badge colorScheme="purple" size="sm" text="new" />
          <Badge colorScheme="purple" size="md" text="new" />
          <Badge colorScheme="purple" size="lg" text="new" />
        </div>`}
          language="jsx"
          showLineNumbers={false}
          className="code-block"
          theme={paraisoDark}
        />
      </p>
    </div>
  );
};
