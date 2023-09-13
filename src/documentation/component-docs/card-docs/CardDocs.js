import "./CardDocs.css";
import { FiPlus } from "react-icons/fi";
import { Button } from "../../../components/features/button/Button";
import { Image } from "../../../components/features/image/Image";
import { CodeBlock, paraisoDark } from "react-code-blocks";
export const CardDocs = () => {
  return (
    <div className="component-doc">
      <h2>Cards</h2>
      <p>
        These are some of the card design available in this library. Just copy
        the code and customize it for using it in your next project.
      </p>
      <h3>Usage</h3>
      <div className="usage">
        <div className=" card card-I">
          <div className="card-I-title">Card Title</div>
          <div className="card-I-subtitle">Card Subtitle Div</div>
          <div className="card-I-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </div>
          <div className="card-I-button-div">
            <Button
              colorScheme="fb"
              text="Read More"
              size="sm"
              variant="secondary"
              borderRadius="b3"
            />
            <Button
              colorScheme="red"
              text="Delete"
              size="sm"
              borderRadius="b3"
            />
          </div>
        </div>
      </div>
      <p>
        <CodeBlock
          text={`
          <div className=" card card-I">
            <div className="card-I-title">Card Title</div>
            <div className="card-I-subtitle">Card Subtitle Div</div>
            <div className="card-I-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </div>
            <div className="card-I-button-div">
              <Button
                colorScheme="fb"
                text="Read More"
                size="sm"
                variant="secondary"
                borderRadius="b3"
              />
              <Button
                colorScheme="red"
                text="Delete"
                size="sm"
                borderRadius="b3"
              />
            </div>
          </div>
        `}
          language="jsx"
          showLineNumbers={false}
          className="code-block"
          theme={paraisoDark}
        />
      </p>

      <div className="usage">
        <div className="card card-II">
          <div className="card-II__profile-card">
            <div className="card-II__profile__details">
              <Image src="https://bit.ly/3qZAJqc" borderSize="b1" size="xs" />
              <div className="card-II__name-id">
                <span className="card-II__name">Kenny Foster</span>
                <span className="card-II__id">@fosterlive</span>
              </div>
              <Button
                leftIcon={<FiPlus />}
                borderRadius="full"
                variant="secondary"
                colorScheme="fb"
              />
            </div>
          </div>
        </div>
      </div>
      <p>
        <CodeBlock
          text={`
          <div className="card card-II">
            <div className="card-II__profile-card">
              <div className="card-II__profile__details">
                <Image src="https://bit.ly/3qZAJqc" borderSize="b1" size="xs" />
                <div className="card-II__name-id">
                  <span className="card-II__name">Kenny Foster</span>
                  <span className="card-II__id">@fosterlive</span>
                </div>
                <Button
                  leftIcon={<FiPlus />}
                  borderRadius="full"
                  variant="secondary"
                  colorScheme="fb"
                />
              </div>
            </div>
          </div>
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
