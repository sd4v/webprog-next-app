import { Nav, Navbar } from "react-bootstrap";


function Layout({ children }) {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="/">Webprog Next.js app</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Members</Nav.Link>
            <Nav.Link href="/another">Another page</Nav.Link>
            <Nav.Link href="/dynamic-url/7">Dynamic URL</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {children}
    </>
  );
}

export default Layout;
