import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TableVehicle from "./TableVehicle";

describe("TableVehicle", () => {
  it("renders the table with the correct data", () => {
    const data = [
      {
        id: 1,
        driver_id: 1,
        plate: "ABC-123",
        model: "Carro",
        type: "Car",
        capacity: "4",
      },
    ];
    render(<TableVehicle data={data} isLoading={false} />);
    const table = screen.getByRole("table");
    expect(table).toBeInTheDocument();
  });
});
