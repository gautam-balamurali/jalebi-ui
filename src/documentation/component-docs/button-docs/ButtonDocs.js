import "./ButtonDocs.css";
import { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { BsPlus } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { Button } from "../../../components/features/button/Button";
import { CodeBlock, paraisoDark } from "react-code-blocks";

export const ButtonDocs = () => {
  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    setCount((count) => count + 1);
  };
  const decrementHandler = () => {
    setCount((coumt) => count - 1);
  };

  return (
    <div className="component-doc">
      <h2>Button</h2>
      <p>
        The Button component is used to trigger an action or event, such as
        submitting a form, opening a dialog, canceling an action, or performing
        a delete operation.
      </p>
      <h3>Usage</h3>
      <div className="usage">
        <Button text="Button" />
      </div>
      <p>
        <CodeBlock
          text={`
          <Button text="Button" />
        `}
          language="jsx"
          showLineNumbers={false}
          className="code-block"
          theme={paraisoDark}
        />
      </p>

      <h3>Button Sizes</h3>
      <p>
        Use the <code>size</code> prop to change the size of the button. You can
        set the value to <code>xs</code>, <code>sm</code>, <code>md</code>, or{" "}
        <code>lg</code>.
      </p>
      <div className="usage make-flex">
        <Button text="Button" size="xs" />
        <Button text="Button" size="sm" />
        <Button text="Button" size="md" />
        <Button text="Button" size="lg" />
      </div>
      <p>
        <CodeBlock
          text={`<div className="usage make-flex">
          <Button text="Button" size="xs" />
          <Button text="Button" size="sm" />
          <Button text="Button" size="md" />
          <Button text="Button" size="lg" />
        </div>`}
          language="jsx"
          showLineNumbers={false}
          className="code-block"
          theme={paraisoDark}
        />
      </p>

      <h3>Button Variants</h3>
      <p>
        Use the <code>variant</code> prop to change the visual style of the
        Button. You can set the value to <code>primary</code>,{" "}
        <code>secondary</code>, <code>ghost</code>, <code>underline</code>,{" "}
        <code>primaryToSecondary</code>, <code>secondaryToPrimary</code>.
      </p>

      <div className="usage make-flex">
        <Button variant="primary" text="Button" />
        <Button variant="secondary" text="Button" />
        <Button variant="ghost" text="Button" />
        <Button variant="underline" text="Button" />
        <Button variant="primaryToSecondary" text="Button" />
        <Button variant="secondaryToPrimary" text="Button" />
      </div>
      <p>
        <CodeBlock
          text={`<div className="usage make-flex">
          <Button variant="primary" text="Button" />
          <Button variant="secondary" text="Button" />
          <Button variant="ghost" text="Button" />
          <Button variant="underline" text="Button" />
          <Button variant="primaryToSecondary" text="Button" />
          <Button variant="secondaryToPrimary" text="Button" />
        </div>`}
          language="jsx"
          showLineNumbers={false}
          className="code-block"
          theme={paraisoDark}
        />
      </p>

      <h3>Color Schemes</h3>
      <p>
        <code>colorScheme</code> prop is used to change the color scheme of the
        button of any variant. The default value is <code>light green</code>,
        which doesn't need to be passed. Other available option is{" "}
        <code>red</code>.
      </p>
      <p>
        <code>Note: </code> Only one color scheme, i.e. red is available as of
        now. More will be added soon.
      </p>

      <div className="usage make-flex">
        <Button variant="secondary" text="Button" />
        <Button colorScheme="red" variant="secondary" text="Button" />
      </div>
      <p>
        <CodeBlock
          text={`
          <Button variant="secondary" text="Button" />
          <Button colorScheme="red" variant="secondary" text="Button" />
        `}
          language="jsx"
          showLineNumbers={false}
          className="code-block"
          theme={paraisoDark}
        />
      </p>

      <h3>Disable Buttons</h3>
      <p>
        <code>isDisabled</code> prop is used to disable the button. Possible
        values for this prop is true or false. The default value is{" "}
        <code>false</code>.
      </p>
      <div className="usage make-flex">
        <Button isDisabled={true} text="Button" />
        <Button variant="secondary" isDisabled={true} text="Button" />
      </div>
      <p>
        <CodeBlock
          text={`
          <Button isDisabled={true} text="Button" />
          <Button variant="secondary" isDisabled={true} text="Button" />
        `}
          language="jsx"
          showLineNumbers={false}
          className="code-block"
          theme={paraisoDark}
        />
      </p>
      <h3>Button with Icon</h3>
      <p>
        You can add left and right icons to the Button component using the{" "}
        <code>leftIcon</code> and <code>rightIcon</code> props respectively.
      </p>
      <div className="usage make-flex">
        <Button leftIcon={<HiOutlineMail />} text="Email" />
        <Button
          rightIcon={<MdNavigateNext />}
          text="Next"
          variant="secondary"
        />
      </div>
      <p>
        <CodeBlock
          text={`
          <Button leftIcon={<HiOutlineMail />} text="Email" />
          <Button
            rightIcon={<MdNavigateNext />}
            text="Next"
            variant="secondary"
          />
        `}
          language="jsx"
          showLineNumbers={false}
          className="code-block"
          theme={paraisoDark}
        />
      </p>
      <h3>Social Buttons</h3>
      <p>
        We've included the colors for common social media platforms, and you can
        simply use their buttons via the <code>colorScheme</code> prop.
      </p>
      <div className="usage make-flex">
        <Button leftIcon={<FaFacebook />} colorScheme="fb" text="Facebook" />
        <Button leftIcon={<FaTwitter />} colorScheme="twitter" text="Twitter" />
      </div>
      <p>
        <CodeBlock
          text={`
          <Button leftIcon={<FaFacebook />} colorScheme="fb" text="Facebook" />
          <Button leftIcon={<FaTwitter />} colorScheme="twitter" text="Twitter" />
        `}
          language="jsx"
          showLineNumbers={false}
          className="code-block"
          theme={paraisoDark}
        />
      </p>
      <p>
        The Social Media Buttons can have variants and different sizes as well.
      </p>
      <div className="usage make-flex">
        <Button
          leftIcon={<FaFacebook />}
          colorScheme="fb"
          variant="secondary"
          text="Facebook"
        />
        <Button
          leftIcon={<FaTwitter />}
          colorScheme="twitter"
          variant="ghost"
          text="Twitter"
        />
      </div>
      <p>
        <CodeBlock
          text={`
          <Button
            leftIcon={<FaFacebook />}
            colorScheme="fb"
            variant="secondary"
            text="Facebook"
          />
          <Button
            leftIcon={<FaTwitter />}
            colorScheme="twitter"
            variant="ghost"
            text="Twitter"
          />
        `}
          language="jsx"
          showLineNumbers={false}
          className="code-block"
          theme={paraisoDark}
        />
      </p>
      <h3>Rounded Buttons</h3>
      <p>
        <code>borderRadius</code> prop can be used to set the border radius of
        the buttons. It can take up 4 values - <code>b1, b2, b3, full</code>.
        The default value of this prop is <code>b1</code>.
      </p>
      <div className="usage make-flex">
        <Button
          text="Twitter"
          leftIcon={<FaTwitter />}
          borderRadius="b1"
          colorScheme="twitter"
        />
        <Button
          text="Twitter"
          leftIcon={<FaTwitter />}
          borderRadius="b2"
          colorScheme="twitter"
        />
        <Button
          text="Twitter"
          leftIcon={<FaTwitter />}
          borderRadius="b3"
          colorScheme="twitter"
        />
        <Button
          leftIcon={<FaTwitter />}
          borderRadius="full"
          colorScheme="twitter"
        />
      </div>
      <p>
        <CodeBlock
          text={`
          <Button
            text="Twitter"
            leftIcon={<FaTwitter />}
            borderRadius="b1"
            colorScheme="twitter"
          />
          <Button
            text="Twitter"
            leftIcon={<FaTwitter />}
            borderRadius="b2"
            colorScheme="twitter"
          />
          <Button
            text="Twitter"
            leftIcon={<FaTwitter />}
            borderRadius="b3"
            colorScheme="twitter"
          />
          <Button
            leftIcon={<FaTwitter />}
            borderRadius="full"
            colorScheme="twitter"
          />
        `}
          language="jsx"
          showLineNumbers={false}
          className="code-block"
          theme={paraisoDark}
        />
      </p>

      <h3>OnClick Handler for button</h3>
      <p>
        Pass any function to the <code>onClickHandler</code> prop for the Button
        component and it will be executed when the button is clicked. An example
        of the use case is demonstrated below, where on clicking the Increment
        button, the value of count changes.
      </p>
      <div className="usage make-flex">
        <Button
          leftIcon={<BsPlus />}
          onClickHandler={incrementHandler}
          borderRadius="full"
        />
        <span>{count}</span>
        <Button
          leftIcon={<AiOutlineMinus />}
          onClickHandler={decrementHandler}
          borderRadius="full"
        />
      </div>
      <p>
        <CodeBlock
          text={`
          <Button
            leftIcon={<BsPlus />}
            onClickHandler={incrementHandler}
            borderRadius="full"
          />
          <span>{count}</span>
          <Button
            leftIcon={<AiOutlineMinus />}
            onClickHandler={decrementHandler}
            borderRadius="full"
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
