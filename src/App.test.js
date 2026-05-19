import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders shared labs homepage", () => {
  render(<App />);
  expect(screen.getByText(/Лабораторні роботи команди/i)).toBeInTheDocument();
  expect(
    screen.getByText(/Календар із переходом між місяцями/i),
  ).toBeInTheDocument();
});
