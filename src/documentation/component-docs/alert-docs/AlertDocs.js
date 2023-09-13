import { CodeBlock, paraisoDark } from "react-code-blocks";

import "./AlertDocs.css";
import { Alert } from "../../../components/features/alert/Alert";

export const AlertDocs = () => {
  return (
    <div className="component-doc">
      <h2>Alert</h2>
      <h3>Usage</h3>
      <div className="usage">
        <Alert title="Success Message" />
      </div>
      <p>
        <CodeBlock
          text={`
        <Alert title="Success Message" />
      `}
          language="jsx"
          showLineNumbers={false}
          className="code-block"
          theme={paraisoDark}
        />
      </p>

      <h3>Status Prop</h3>
      <p>
        Alert comes with 4 types of <code>status</code> as listed below. Set the
        status value using the <code>status</code> prop. the Default value of
        status is <code>Success</code>.
      </p>
      <ul>
        <li>Error</li>
        <li>Success</li>
        <li>Warning</li>
        <li>Info</li>
      </ul>
      <div className="usage">
        <Alert status="error" title="Error Message" />
        <Alert status="success" title="Success Message" />
        <Alert status="warning" title="Warning Message" />
        <Alert status="info" title="Info Message" />
      </div>
      <p>
        <CodeBlock
          text={`
          <Alert status="error" title="Error Message" />
          <Alert status="success" title="Success Message" />
          <Alert status="warning" title="Warning Message" />
          <Alert status="info" title="Info Message" />
        `}
          language="jsx"
          showLineNumbers={false}
          className="code-block"
          theme={paraisoDark}
        />
      </p>
      <h3>Variant Prop</h3>
      <p>
        Four different types of Alert Variants are possible:{" "}
        <code>subtle, solid, left-accent, top-accent</code>. The default value
        is <code>subtle</code>. Use <code>variant</code> prop to change the
        value.
      </p>
      <div className="usage">
        <Alert
          status="success"
          title="Data uploaded to server"
          variant="subtle"
        />
        <Alert
          status="success"
          title="Data uploaded to server"
          variant="solid"
        />
        <Alert
          status="success"
          title="Data uploaded to server"
          variant="left-accent"
        />
        <Alert
          status="success"
          title="Data uploaded to server"
          variant="top-accent"
        />
      </div>
      <p>
        <CodeBlock
          text={`
          <Alert
            status="success"
            title="Data uploaded to server"
            variant="subtle"
          />
          <Alert
            status="success"
            title="Data uploaded to server"
            variant="solid"
          />
          <Alert
            status="success"
            title="Data uploaded to server"
            variant="left-accent"
          />
          <Alert
            status="success"
            title="Data uploaded to server"
            variant="top-accent"
          />
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
