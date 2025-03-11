import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Dashboard from "../dashboard";


describe("Dashboard Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderDashboard = () => {
    return render(
        <Dashboard />
    );
  };

  it("renders header section", () => {
    renderDashboard();
    expect(screen.getByText("Tickets")).toBeInTheDocument();
    expect(screen.getByText("Service Status -")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();
  });

  it("displays action buttons and search", () => {
    renderDashboard();
    expect(screen.getByText("Create ticket")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });

  it("displays ticket list", () => {
    renderDashboard();
    expect(screen.getByText("Open 3")).toBeInTheDocument();
    expect(screen.getByText("Pending 1")).toBeInTheDocument();
    expect(screen.getByText("Closed 2")).toBeInTheDocument();
    expect(screen.getByText("Priority - Medium")).toBeInTheDocument();
  });
});
