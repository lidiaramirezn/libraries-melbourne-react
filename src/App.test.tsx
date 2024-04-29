import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import '@/styles/home.scss';

describe('App', () => {

  it("Testing routes", async() => {
    render(
      <MemoryRouter initialEntries={['/search-book']}>
        <App/>
      </MemoryRouter>
    );
  
    let word = await screen.findByText('Search');
  
    expect(word).toBeDefined();
  })
})