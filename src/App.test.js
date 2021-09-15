import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders message", () => {
  render(<App />);
  const message = screen.getByText(/Edit/i);
  expect(message).toBeInTheDocument();
});
