// Test away!
import {render, getAllByTestId} from "react-testing-library";
import React from "react"; 
import "jest-dom/extend-expect";
import Display from "./Display";

 describe("display 'open' display", () => {
  it("is red-led while locked", () => {
    const component = render(<Display closed={true} locked={true} />);
    const display = component.getByText("Locked");

      expect(display).toHaveClass("red-led");
});

 });