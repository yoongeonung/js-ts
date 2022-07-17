import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

test('counter must be starts 0', () => {
    render(<App/>);
    const counterEl = screen.getByTestId('counter');
    expect(counterEl).toHaveTextContent('0');
});

test('plus btn has correct text', () => {
    render(<App/>);
    const plusBtnEl = screen.getByTestId('plus-btn');

    expect(plusBtnEl).toHaveTextContent('+');
});

test('minus btn has correct text', () => {
    render(<App/>);
    const minusBtnEl = screen.getByTestId('minus-btn');

    expect(minusBtnEl).toHaveTextContent('-');
})

test('when the plus btn click counter changes to 1', () => {
    render(<App/>);
    const plusBtnEl = screen.getByTestId('plus-btn');
    fireEvent.click(plusBtnEl);

    const counterEl = Number(screen.getByTestId('counter').textContent);

    expect(counterEl).toBe(1);
})

test('when the minus btn is clicked, the counter changes to -1', () => {
    render(<App/>);
    const minusBtnEl = screen.getByTestId('minus-btn');

    fireEvent.click(minusBtnEl);
    const counterVal = Number(screen.getByTestId('counter').textContent);

    expect(counterVal).toBe(-1);
})

test('on/off btn has blue color', () => {
    render(<App/>);
    const onOffBtnEl = screen.getByTestId('on/off-btn');

    expect(onOffBtnEl).toHaveStyle('background-color:blue');
})

test('prevent +/- btn from being pressed when the on/off btn is clicked', () => {
    render(<App/>);
    const onOffBtnEl = screen.getByTestId('on/off-btn');

    fireEvent.click(onOffBtnEl);

    const plusBtnEl = screen.getByTestId('plus-btn');
    const minusBtnEl = screen.getByTestId('minus-btn');

    expect(plusBtnEl).toBeDisabled();
    expect(minusBtnEl).toBeDisabled();

    fireEvent.click(onOffBtnEl);

    expect(plusBtnEl).toBeEnabled();
    expect(minusBtnEl).toBeEnabled();
})