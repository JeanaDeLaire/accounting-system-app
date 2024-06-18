import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ALERT, OKAY } from "../../shared/constants";
import Banner from "./Banner";

describe("Banner component", () => {
  it("renders with the provided message", () => {
    const message = "Test message";
    const setIsBannerOpen = jest.fn();
    const { getByText } = render(
      <Banner
        message={message}
        setIsBannerOpen={setIsBannerOpen}
        isAlert={false}
      />
    );

    expect(getByText(message)).toBeInTheDocument();
  });

  it("renders with red alert background color when isAlert is true", () => {
    const message = "Test message";
    const setIsBannerOpen = jest.fn();
    const { getByText, container } = render(
      <Banner
        message={message}
        setIsBannerOpen={setIsBannerOpen}
        isAlert={true}
      />
    );

    expect(getByText(message)).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle(`background-color: ${ALERT}`);
  });

  it("renders with green okay background color when isAlert is false", () => {
    const message = "Test message";
    const setIsBannerOpen = jest.fn();
    const { getByText, container } = render(
      <Banner
        message={message}
        setIsBannerOpen={setIsBannerOpen}
        isAlert={false}
      />
    );

    expect(getByText(message)).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle(`background-color: ${OKAY}`);
  });

  it("calls setIsBannerOpen(false) when Close button is clicked", () => {
    const message = "Test message";
    const setIsBannerOpen = jest.fn();
    const { getByText } = render(
      <Banner
        message={message}
        setIsBannerOpen={setIsBannerOpen}
        isAlert={false}
      />
    );

    fireEvent.click(getByText("Close"));
    expect(setIsBannerOpen).toHaveBeenCalledWith(false);
  });
});
