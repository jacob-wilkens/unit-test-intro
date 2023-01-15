import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { UserList } from "./UserList";
import { User } from "./types";

function renderComponent() {
  return render(<UserList {...{ users }} />).container;
}

const users: User[] = [
  { email: "jake", name: "jake@gmail.com" },
  { email: "jake3", name: "jake3@gmail.com" },
];

describe("user list suite", () => {
  it("render one row per user", () => {
    const container = renderComponent();
    const rows = container.querySelectorAll("tbody tr");

    expect(rows).toHaveLength(2);
  });

  it("render the email and name of each user", () => {
    renderComponent();

    for (const { name, email } of users) {
      const username = screen.getByRole("cell", { name });
      const userEmail = screen.getByRole("cell", { name: email });

      expect(username).toBeInTheDocument();
      expect(userEmail).toBeInTheDocument();
    }
  });
});
