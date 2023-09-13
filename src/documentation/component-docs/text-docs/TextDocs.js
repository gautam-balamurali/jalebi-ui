import { CodeBlock, paraisoDark } from "react-code-blocks";
import { Text } from "../../../components/features/text/Text";

export const TextDocs = () => {
  return (
    <div className="component-doc">
      <h2>Text</h2>
      <p>
        The Text component provides a versatile way to create text input areas
        with customization options for rows, columns, variants, and more.
      </p>

      <h3>Usage</h3>
      <p>
        To use the Text component, you can import it and pass various props for
        customization. Below is an example of using the Text component:
      </p>
      <div className="usage">
        <Text
          rows={6}
          cols={60}
          placeholder="Custom Textarea"
          variant="special"
          isRequired={true}
        />
      </div>
      <CodeBlock
        text={`
<Text
  rows={6}
  cols={60}
  placeholder="Custom Textarea"
  variant="special"
  isRequired={true}
/>
`}
        language="jsx"
        showLineNumbers={false}
        className="code-block"
        theme={paraisoDark}
      />

      <h3>Textarea Rows and Columns</h3>
      <p>
        The Text component allows you to adjust the number of rows and columns
        of the textarea by using the rows and cols props. This provides
        flexibility in controlling the size of the text input area. By default,
        they are set to <code>4</code> and <code>50</code> respectively.
      </p>
      <div className="usage">
        <Text rows={4} cols={40} placeholder="Custom Textarea" />
      </div>
      <CodeBlock
        text={`
<Text rows={4} cols={40} placeholder="Custom Textarea" />
`}
        language="jsx"
        showLineNumbers={false}
        className="code-block"
        theme={paraisoDark}
      />

      <p>
        You can adjust these values according to your application's requirements
        to create text input areas of the desired size.
      </p>
    </div>
  );
};
