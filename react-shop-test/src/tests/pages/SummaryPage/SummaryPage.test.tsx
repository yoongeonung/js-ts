import {render, screen} from "@testing-library/react";
import SummaryPage from "../../../pages/SummaryPage/SummaryPage";
import React from "react";
import userEvent from "@testing-library/user-event";

test("summary page", () => {
    render(<SummaryPage/>);

    const checkBoxEl = screen.getByRole<HTMLInputElement>("checkbox", {name: "주문하려는 것을 확인하셨나요?"});

    expect(checkBoxEl.checked).not.toBeTruthy();
    expect(checkBoxEl.checked).toBe(false);

    const confirmBtnEl = screen.getByRole<HTMLButtonElement>("button", {name: "주문 확인"});

    expect(confirmBtnEl.disabled).toBe(true);
    expect(confirmBtnEl.disabled).toBeTruthy();

    userEvent.click(checkBoxEl);

    expect(confirmBtnEl.disabled).not.toBeTruthy()
    expect(confirmBtnEl.disabled).toBe(false);


})