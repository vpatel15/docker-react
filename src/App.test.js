import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders lLearn Docker and kubernetes with react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn Docker and kubernetes with react/i);
  expect(linkElement).toBeInTheDocument();
});
test("renders Learn Docker and kubernetes with react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn Docker and kubernetes with react/i);
  expect(linkElement).toBeInTheDocument();
});
