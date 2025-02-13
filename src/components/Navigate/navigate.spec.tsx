import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import Navigation from "./Navigate";

describe("Navigation", () => {
  it("renders the navigation", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Navigation />
      </MemoryRouter>
    );
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Drivers")).toBeInTheDocument();
  });

  it("renders the navigation", () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
    const home = screen.getByText("Home");
    expect(home).toBeInTheDocument();
    const drivers = screen.getByText("Drivers");
    expect(drivers).toBeInTheDocument();
  });

  it("renders the navigation", () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
    const navigate = screen.getByRole("navigation");
    expect(navigate).toBeInTheDocument();

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(2);
  });

  it("renders the navigation", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Navigation />
      </MemoryRouter>
    );
    const navigate = screen.getByRole("navigation");
    expect(navigate).toBeInTheDocument();

    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(2);

    // Simula um clique no primeiro link
    await userEvent.click(links[0]);

    // Obtém a URL atual usando useLocation()
    const location = window.location.pathname;

    // Verifica se a URL mudou corretamente
    expect(location).toBe("/");
  });
});
