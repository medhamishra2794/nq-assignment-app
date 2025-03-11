import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Login from "../index";
import { I18nextProvider } from "react-i18next";
import i18n from "../../../i18n";

vi.mock("react-i18next", async () => {
  const actual = await vi.importActual("react-i18next");
  return {
    ...actual,
    useTranslation: () => ({
      t: (key:string) => key,
      i18n: {
        language: "en",
        changeLanguage: vi.fn(),
      },
    }),
  };
});

describe("Login Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderLogin = () => {
    return render(
      <I18nextProvider i18n={i18n}>
        <Login />
      </I18nextProvider>
    );
  };

  it("renders login form", () => {
    renderLogin();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password:/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Log in/i })).toBeInTheDocument();
  });

  it("validates email format", async () => {
    renderLogin();
    const emailInput = screen.getByLabelText(/Email:/i);

    // Test invalid email
    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.blur(emailInput);
    expect(await screen.findByText("Please enter a valid email address.")).toBeInTheDocument();

    // Test public email provider
    fireEvent.change(emailInput, { target: { value: "test@gmail.com" } });
    fireEvent.blur(emailInput);
    expect(
      await screen.findByText("This email provider is not allowed.")
    ).toBeInTheDocument();

    // Test valid email
    fireEvent.change(emailInput, { target: { value: "test@company.com" } });
    fireEvent.blur(emailInput);
    expect(screen.queryByText("Please enter a valid email address.")).not.toBeInTheDocument();
    expect(screen.queryByText("This email provider is not allowed.")).not.toBeInTheDocument();
  });

  it("toggles password visibility", () => {
    renderLogin();
    const passwordInput = screen.getByLabelText(/Password:/i);
    const toggleButton = screen.getByRole("button", {
      name: /toggle password visibility/i,
    });

    expect(passwordInput).toHaveAttribute("type", "password");
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "text");
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "password");
  });

  it("handles remember me checkbox", () => {
    renderLogin();
    const checkbox = screen.getByRole("checkbox", { name: /Remember me/i });

    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it("handles language selection", () => {
    renderLogin();
    const languageSelect = screen.getByLabelText(/Language:/i);

    expect(languageSelect).toHaveValue("en");
    fireEvent.change(languageSelect, { target: { value: "hi" } });
    expect(languageSelect).toHaveValue("hi");
  });

  it("displays forgot password link", () => {
    renderLogin();
    expect(screen.getByText("Forgot Password?")).toBeInTheDocument();
  });
});
