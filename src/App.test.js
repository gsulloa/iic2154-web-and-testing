import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import TodoList from "./components/TodoList";

it("renders without crashing", () => {
  const { container, getByText, queryByText, debug } = render(<App />);
  expect(getByText("TodoList")).toBeInTheDocument();
  expect(queryByText("No existe")).toBeNull();
  expect(container.firstChild).toMatchSnapshot();
});

it("todolist", () => {
  const { container, getByLabelText, getByText } = render(<TodoList />);
  expect(container.firstChild).toMatchSnapshot();
  const input = getByLabelText(/ingresa un elemento/i);
  fireEvent.change(input, { target: { value: "Texto nuevo" } });
  expect(input).toHaveValue("Texto nuevo");
  expect(container.firstChild).toMatchSnapshot();
  fireEvent.submit(input);
  expect(container.firstChild).toMatchSnapshot();
  expect(getByText("Texto nuevo")).toBeInTheDocument();
});
