import {it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import {Welcome} from "../../welcome/welcome";
import '@testing-library/jest-dom/vitest';


describe('Welcome component', () => {
  it('renders the welcome message', () => {
    render(<Welcome user='user234' />);
    expect(screen.getByText("Welcome, user234")).toBeInTheDocument();
})


  it('renders the nice to meet you message', () => {
    render(<Welcome user='user234' name='John' />);
    expect(screen.getByText("Nice to meet you, John!")).toBeInTheDocument();
})

 describe('when name is an empty string or only spaces', () => {
   it('renders the nice to meet you noname person message', () => {
     render(<Welcome user='user234'/>);
     expect(screen.getByText("Nice to meet you noname person!")).toBeInTheDocument();
   })

 })
})
