import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image of myself with correct alt text", () => {
  render(<App />);
  const image = screen.getByAltText(/photo of/i);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src");
});

test("displays a second-level heading with the text 'About Me'", () => {
  render(<App />);
  const aboutHeading = screen.getByRole("heading", {
    level: 2,
    name: /about me/i,
  });
  expect(aboutHeading).toBeInTheDocument();
});

test("displays a paragraph with a short biography", () => {
  render(<App />);
  const paragraph = screen.getByText(/i am a software developer/i, { exact: false });
  expect(paragraph).toBeInTheDocument();
});

test("includes a link to my GitHub page", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /github/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", "https://github.com/mohaafif");
});

test("includes a link to my LinkedIn page", () => {
  render(<App />);
  const linkedInLink = screen.getByRole("link", { name: /linkedin/i });
  expect(linkedInLink).toBeInTheDocument();
  expect(linkedInLink).toHaveAttribute("href", "https://linkedin.com/in/mohaafif");
});
