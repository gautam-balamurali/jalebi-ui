import "./Documentation.css";

import {
  ButtonDocs,
  InputDocs,
  AvatarDocs,
  ImageDocs,
  BadgeDocs,
  CardDocs,
  AlertDocs,
  HeadingDocs,
  TextDocs,
} from "./component-docs";
import { useDocsContext } from "../core/contexts/DocsContext";
import { ComponentsDatabase } from "../config/app-config/AppConfig";

export const Documentation = () => {
  const { docsComponentToDisplay } = useDocsContext();
  return (
    <div className="documentation">
      {docsComponentToDisplay === "" && <AvatarDocs />}
      {docsComponentToDisplay === "Button" && <ButtonDocs />}
      {docsComponentToDisplay === "Input" && <InputDocs />}
      {docsComponentToDisplay === "Avatar" && <AvatarDocs />}
      {docsComponentToDisplay === "Image" && <ImageDocs />}
      {docsComponentToDisplay === "Badge" && <BadgeDocs />}
      {docsComponentToDisplay === "Card" && <CardDocs />}
      {docsComponentToDisplay === "Alert" && <AlertDocs />}
      {docsComponentToDisplay === "Heading" && <HeadingDocs />}
      {docsComponentToDisplay === "Text" && <TextDocs />}
      {docsComponentToDisplay !== "" &&
        !ComponentsDatabase.includes(docsComponentToDisplay) && (
          <p>Component Not Found</p>
        )}
    </div>
  );
};
