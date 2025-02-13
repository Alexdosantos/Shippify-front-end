import { describe, it, expect } from "vitest";
import TableDriver from "./TableDriver";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { IDriver } from "@/types/IDriverTypes/IDriverTypes";

describe("TableDriver", () => {
  it("renders the table with the correct data", () => {
    const drivers: IDriver[] = [
      {
        id: 1,
        company_id: 1,
        city_id: 1,
        first_name: "John",
        last_name: "Doe",
        email: "john@example.com",
        phone: "123-456-7890",
        avatar_url: "http://example.com/avatar.jpg",
        status: "active",
        created_at: "2025-02-12T23:57:32-03:00",
        vehicles: [],
        company: {
          id: 1,
          name: "Company 1",
          city_id: 1,
          status: "active",
          plan_type: "basic",
          creation_date: "2025-02-12T23:57:32-03:00",
        },
      },
    ];

    render(
      <MemoryRouter>
        <TableDriver data={drivers} isLoading={false} />
      </MemoryRouter>
    );

    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });
});
