import { h } from "preact";
import Header from "../src/components/header";
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from "enzyme";

describe("Initial Test of the Header", () => {
  test("should renders 1 nav item", () => {
    const context = shallow(<Header />);
    expect(context.find("h1").text()).toBe("Jokes For Everyone");
    expect(context.find("Link").length).toBe(1);
  });
});
