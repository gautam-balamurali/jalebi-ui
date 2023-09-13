import { CodeBlock, paraisoDark } from "react-code-blocks";
import { Heading } from "../../../components/features/heading/Heading";

export const HeadingDocs = () => {
  return (
    <div className="component-doc-heading">
      <h2 className="heading-2">Heading</h2>
      <p>
        The Heading component is used to display various levels of headings in
        your application. It provides customization options for different
        variants and sizes.
      </p>

      <h3 className="heading-3">Usage</h3>
      <p>
        To use the Heading component, simply import it and pass the required
        props like level, text, and variant.
      </p>
      <div className="usage">
        <Heading level={2} text="Custom Heading" variant="special" />
      </div>
      <CodeBlock
        text={`
<Heading level={2} text="Custom Heading" variant="special" />
`}
        language="jsx"
        showLineNumbers={false}
        className="code-block"
        theme={paraisoDark}
      />

      <h3 className="heading-3">Heading Variants</h3>
      <p>
        The variant prop allows you to customize the appearance of the heading.
        By default, it's set to <code>default</code> value. Here are some common
        variants:
      </p>
      <div className="usage">
        <Heading text="Default Heading" />
        <Heading text="Special Heading" variant="special" />
      </div>
      <CodeBlock
        text={`
<Heading text="Default Heading" />
<Heading text="Special Heading" variant="special" />
`}
        language="jsx"
        showLineNumbers={false}
        className="code-block"
        theme={paraisoDark}
      />

      <p>
        You can create your own custom variants by defining CSS classes and
        applying them to the Heading component.
      </p>

      <h3 className="heading-3">Available Heading Levels</h3>
      <p>
        The level prop specifies the HTML heading level (<code>h2</code>,{" "}
        <code>h3</code>, <code>h4</code>, etc.). By default, it's set to{" "}
        <code>1</code> for the highest level of heading. You can adjust it as
        needed to create semantic headings.
      </p>
      <div className="usage">
        <Heading level={2} text="Heading 1" />
        <Heading level={3} text="Heading 2" />
        <Heading level={4} text="Heading 3" />
      </div>
      <CodeBlock
        text={`
<Heading level={2} text="Heading 1" />
<Heading level={3} text="Heading 2" />
<Heading level={4} text="Heading 3" />
`}
        language="jsx"
        showLineNumbers={false}
        className="code-block"
        theme={paraisoDark}
      />

      <h3 className="heading-3">Styling and Customization</h3>
      <p>
        You can further style and customize the appearance of headings by
        creating CSS rules and classes in your project's stylesheets. This
        allows you to match the headings with your application's design.
      </p>
    </div>
  );
};
