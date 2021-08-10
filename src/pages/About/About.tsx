// Layouts
import { HeaderPaddingLayout, ContentPageLayout } from "components/Layout/Layouts";

// Styles
import * as PS from "../Pages.styled";

const About = (): JSX.Element => {
  return (
    <HeaderPaddingLayout>
      <ContentPageLayout>
        <PS.PageTitle>About me 🤔</PS.PageTitle>
        <h2>This page is under construction, please come back soon!</h2>
      </ContentPageLayout>
    </HeaderPaddingLayout>
  );
};

export default About;
