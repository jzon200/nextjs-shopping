import "bootstrap/dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import brandLogo from "../assets/brand_logo.svg";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <div className="d-flex brand">
                <img src={brandLogo.src} width="48" height="48" />
                <h1 className="ms-2">Grandeur</h1>
              </div>
            </Link>
          </Navbar.Brand>
          <Nav className="mx-auto navlinks">
            <Link href="/men">Men</Link>
            <Link href="/women">Women</Link>
            <Link href="/kids">Kids</Link>
          </Nav>
          <form className="d-flex align-items-center">
            <label htmlFor="search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </label>
            <input
              className="form-control mx-3"
              id="search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Link href="/shopping-cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-cart"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </Link>
          </form>
        </Container>
      </Navbar>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
