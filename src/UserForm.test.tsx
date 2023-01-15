import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { UserForm } from "./UserForm";

describe("user form suite", async () => {
  const onUserAdd = vi.fn();

  it("it shows two inputs and a button", () => {
    //render the component
    render(<UserForm {...{ onUserAdd }} />);
    //manipulate the component or find an element in it
    const inputs = screen.getAllByRole("textbox");
    const button = screen.getByRole("button");
    //assertion - make sure the component is doing what's expected
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
  });

  it("it calls onUserAdd when the form is submitted", async () => {
    const name = "Jane";
    const email = "Jane@jane.com";
    //render the component
    render(<UserForm onUserAdd={onUserAdd} />);
    //manipulate the component or find an element in it
    const nameInput = screen.getByRole("textbox", { name: /name/i });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const button = screen.getByRole("button");
    //simulate typing in a name
    await user.click(nameInput);
    await user.keyboard(name);
    //simulate typing in a email
    await user.click(emailInput);
    await user.keyboard(email);
    //simulate clicking the button
    await user.click(button);
    //assertion
    expect(onUserAdd).toHaveBeenCalled();
    expect(onUserAdd).toHaveBeenCalledWith({ name, email });
  });

  it("empties the two inputs when form is submitted", async () => {
    const name = "Jane";
    const email = "Jane@jane.com";
    //render the component
    render(<UserForm onUserAdd={onUserAdd} />);
    //manipulate the component or find an element in it
    const nameInput = screen.getByRole("textbox", { name: /name/i });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const button = screen.getByRole("button");
    //simulate typing in a name
    await user.click(nameInput);
    await user.keyboard(name);
    //simulate typing in a email
    await user.click(emailInput);
    await user.keyboard(email);
    //simulate clicking the button
    await user.click(button);
    //assertion
    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
  });
});
