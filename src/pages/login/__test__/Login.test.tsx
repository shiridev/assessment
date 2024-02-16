import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../redux/store";
import { Login } from "../Login";

const MockLogin = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </Provider>
  );
};

describe("Login component tests", () => {
  it("should render the elements properly", () => {
    render(<MockLogin />);
    const logoText = screen.getByText("Login", { selector: "h3" });
    const logoImage = screen.getByRole("img");
    const usernameInput = screen.getByPlaceholderText(/username/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const loginButton = screen.getByText("Login", { selector: "button" });
    const resetPasswordButton = screen.getByText("Reset Password", {
      selector: "button",
    });

    expect(logoText).toBeInTheDocument();
    expect(logoImage).toBeInTheDocument();
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(resetPasswordButton).toBeInTheDocument();
  });

  it("username input should render same text that be written in that", () => {
    render(<MockLogin />);
    const usernameInput = screen.getByPlaceholderText(
      /username/i
    ) as HTMLInputElement;
    fireEvent.click(usernameInput);
    fireEvent.change(usernameInput, { target: { value: "test test" } });
    expect(usernameInput.value).toBe("test test");
  });

  it("username input type should be text", () => {
    render(<MockLogin />);
    const usernameInput = screen.getByPlaceholderText(
      /username/i
    ) as HTMLInputElement;
    expect(usernameInput.type).toBe("text");
  });

  it("pasword input should render same text that be written in that", () => {
    render(<MockLogin />);
    const passwordInput = screen.getByPlaceholderText(
      /password/i
    ) as HTMLInputElement;
    fireEvent.click(passwordInput);
    fireEvent.change(passwordInput, { target: { value: "test test" } });
    expect(passwordInput.value).toBe("test test");
  });

  it("pasword input type should be password", () => {
    render(<MockLogin />);
    const passwordInput = screen.getByPlaceholderText(
      /password/i
    ) as HTMLInputElement;
    expect(passwordInput.type).toBe("password");
  });
});
