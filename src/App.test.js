import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import Advice from "./components/Advice";
import AdviceNumber from "./components/AdviceNumber";

import axios from "axios";
//jest.mock("axios");

const data = {
  slip: {
    id: 71,
    advice:
      "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
  },
};

describe("App", () => {
  test("renders App Component", () => {
    render(<App />);
    screen.debug();
  });

  // test("renders with advice", async () => {
  //   axios.mockResolvedValue(data)

  //   render(<App />);

  //   expect(screen.queryByText(/It is easy to sit up/i)).toBeNull();

  //   expect(screen.queryByText(/#71/i)).toBeNull();

  //   screen.debug();

  //   expect(
  //     await screen.findByText(/It is easy to sit up/i)
  //   ).toBeInTheDocument();

  //   expect(await screen.findByText(/#71/i)).toBeInTheDocument();

  //   screen.debug();
  // });
});

describe("AdviceNumber", () => {
  // function getNumber() {
  //   return Promise.resolve({text: 117});
  // }

  test("renders empty advice number", () => {
    render(<AdviceNumber />);
    screen.debug();
  });

  // test('renders advice number', async ()=>{
  //   let text = await getNumber
  //   render(<AdviceNumber text={text} />);
  //   screen.debug();
  // })
});

describe("Advice", () => {
  test("renders empty advice ", () => {
    render(<Advice />);
    screen.debug();
  });
});
