import React from "react";
import {render, screen} from "@testing-library/react";
import Type from "../../../pages/OrderPage/Type";
import {server} from "../../../mocks/server";
import {rest} from "msw";


test("서버로부터의 제품 이미지 표시", async () => {
    render(<Type orderType={"products"}/>);

    const productsImgs = await screen.findAllByRole<HTMLImageElement>("img", {name: /product$/i});

    expect(productsImgs).toHaveLength(2);

    const imgAlts = productsImgs.map(img => img.alt);
    expect(imgAlts).toEqual(["America product", "England product"]);
})

test('server error', async () => {
    server.resetHandlers(rest.get("http://localhost:5000/products", (req, resp, ctx) => {
        return resp(ctx.status(500));
    }));

    render(<Type orderType={"products"} />)

    const banner = await screen.findByText("에러가 발생했습니다.");
    expect(banner).toHaveTextContent("에러가 발생했습니다.");
})