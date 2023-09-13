import { CodeBlock, paraisoDark } from "react-code-blocks";
import { Input } from "../../../components/features/input/Input";
import "./InputDocs.css";

export const InputDocs = () => {
  return (
    <div className="component-doc">
      <h2>Input</h2>
      <h3>Usage</h3>
      <div className="usage">
        <Input placeholder="Basic Input" />
      </div>
      <p>
        <CodeBlock
          text={`
          <Input placeholder="Basic Input" />
       `}
          language="jsx"
          showLineNumbers={false}
          className="code-block"
          theme={paraisoDark}
        />
      </p>

      <h3>Changing the size of the Input</h3>
      <p>
        The Input component comes in four sizes. The default is <code>sm</code>.
        Others can be <code>xs</code>, <code>sm</code>, <code>md</code>,{" "}
        <code>lg</code>.
      </p>
      <div className="usage">
        <Input placeholder="extra small input" size="xs" />
        <Input placeholder="small input" size="sm" />
        <Input size="md" />
        <Input size="lg" />
      </div>
      <p>
        <CodeBlock
          text={`
          <Input placeholder="extra small input" size="xs" />
          <Input placeholder="small input" size="sm" />
          <Input size="md" />
          <Input size="lg" />
        `}
          language="jsx"
          showLineNumbers={false}
          className="code-block"
          theme={paraisoDark}
        />
      </p>

      <h3>Input Box Variants</h3>
      <p>
        Use <code>Variants</code> prop to have 4 different appearances of input
        - <code>basic</code>, <code>filled</code>, <code>flushed</code>,{" "}
        <code>unstyled</code>. The default variant of Input is{" "}
        <code>basic</code>
      </p>
      <div className="usage">
        <Input variant="basic" />
        <Input variant="filled" />
        <Input variant="flushed" />
        <Input variant="unstyled" />
      </div>
      <p>
        <CodeBlock
          text={`
          <Input variant="basic" />
          <Input variant="filled" />
          <Input variant="flushed" />
          <Input variant="unstyled" />
        `}
          language="jsx"
          showLineNumbers={false}
          className="code-block"
          theme={paraisoDark}
        />
      </p>
      <h3>Different Input Type Buttons</h3>
      <p>
        Buttons can be set to store different type of values, like{" "}
        <code>text</code>, <code>password</code> using the{" "}
        <code>inputType</code> prop. The default value is set to{" "}
        <code>text</code>
      </p>
      <div className="usage">
        <Input inputType="text" />
        <Input inputType="password" placeholder="Enter password" />
      </div>
      <p>
        <CodeBlock
          text={`
          <Input inputType="text" />
          <Input inputType="password" placeholder="Enter password" />
        `}
          language="jsx"
          showLineNumbers={false}
          className="code-block"
          theme={paraisoDark}
        />
      </p>

      <h3>Disabled Input</h3>
      <p>
        Use <code>isDisabled</code> prop to set the disabled value of the input
        to <code>true</code> or <code>false</code>. By default value is{" "}
        <code>false</code>.
      </p>
      <div className="usage">
        <Input isDisabled={true} />
        <Input isDisabled={false} />
      </div>
      <p>
        <CodeBlock
          text={`
          <Input isDisabled={true} />
          <Input isDisabled={false} />
        `}
          language="jsx"
          showLineNumbers={false}
          className="code-block"
          theme={paraisoDark}
        />
      </p>

      <h3>Adding an onChange Handler</h3>
      <p>
        You can add an <code>onChange</code> handler to the Input component to
        listen for input value changes. Pass a function to the{" "}
        <code>onChange</code> prop to handle the change events.
      </p>
      <div className="usage">
        <Input
          placeholder="Enter some text"
          onChange={(value) => console.log("Input value:", value)}
        />
      </div>
      <p>
        <CodeBlock
          text={`
          <Input placeholder="Enter some text" onChange={(value) => console.log("Input value:", value)} />
        `}
          language="jsx"
          showLineNumbers={false}
          className="code-block"
          theme={paraisoDark}
        />
      </p>
    </div>
  );
};
