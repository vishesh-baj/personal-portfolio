import NavbarWrapper from "./NavbarWrapper";
const PageWrapper = ({ children }) => {
  return (
    <>
      <NavbarWrapper>{children}</NavbarWrapper>
    </>
  );
};

export default PageWrapper;
