import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodosApp from './App';
import NewTask from './NewTask/NewTask';

describe('New task', () => {
  it("input value should change", () => {
    render(<NewTask />)

    const inputEl = screen.getByTestId("input")
    userEvent.type(inputEl, "test")
    expect(inputEl).toHaveValue("test")
  })
  it("new task should be added", () => {
    render(<TodosApp />)

    const inputEl = screen.getByTestId("input")
    const btnEl = screen.getByTestId("new-task")

    userEvent.type(inputEl, "test")
    fireEvent.click(btnEl)

    const newText = screen.getByTestId("new-text")

    expect(inputEl).toHaveValue("")
    expect(newText).toHaveTextContent("test")
  })
})

describe("All task", () => {
  it("task should be changed to the completed", () => {
    render(<TodosApp />)

    const inputEl = screen.getByTestId("input")
    const btnEl = screen.getByTestId("new-task")

    userEvent.type(inputEl, "test")
    fireEvent.click(btnEl)

    const checkboxEl = screen.getByTestId("completed-task")

    expect(checkboxEl).not.toBeChecked()

    fireEvent.click(checkboxEl)

    expect(checkboxEl).toBeChecked()
  })
})

describe("Counter task", () => {
  it("completed task counter should be decrement", () => {
  render(<TodosApp />)

  const counterTask = screen.getByTestId("counter-task")
  const inputEl = screen.getByTestId("input")
  const btnEl = screen.getByTestId("new-task")

  userEvent.type(inputEl, "test")
  fireEvent.click(btnEl)

  const checkboxEl = screen.getByTestId("completed-task")

  expect(counterTask).toHaveTextContent("1")

  fireEvent.click(checkboxEl)

  expect(counterTask).toHaveTextContent("0")
  })})

describe("Clear completed task", () => {
  it("completed task should be deleted", () => {
  render(<TodosApp />)

  const inputEl = screen.getByTestId("input")
  const btnEl = screen.getByTestId("new-task")

  userEvent.type(inputEl, "test")
  fireEvent.click(btnEl)

  const newText = screen.getByTestId("new-text")
  const checkboxEl = screen.getByTestId("completed-task")
  const clearTask = screen.getByTestId("clear-completed")

  fireEvent.click(checkboxEl)

  expect(newText).toBeInTheDocument()

  fireEvent.click(clearTask)

  expect(newText).not.toBeInTheDocument()
})})