import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { UserForm } from "./UserForm";
import App from "./App";

function renderComponent() {
  render(<App />);
}

describe("user list suite", () => {
  it("can receive a new user and show it on a list", async () => {
    renderComponent();
    const name = "jake";
    const email = "jake@jake.com";

    const nameInput = screen.getByRole("textbox", { name: /name/i });
    const emailInput = screen.getByRole("textbox", { name: /email/i });
    const button = screen.getByRole("button");

    await user.click(nameInput);
    await user.keyboard(name);

    await user.click(emailInput);
    await user.keyboard(email);

    await user.click(button);

    const cellName = screen.getByRole("cell", { name });
    const cellEmail = screen.getByRole("cell", { name: email });

    expect(cellName).toBeInTheDocument();
    expect(cellEmail).toBeInTheDocument();
  });
});
