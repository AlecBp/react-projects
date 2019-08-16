import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapper;

beforeEach(() => {
    wrapper = mount(<CommentBox />);
});

afterEach(() => {
    wrapper.unmount();
});

it("has a button", () => {
    expect(wrapper.find("button").length).toEqual(1);
});

it("has a textarea", () => {
    expect(wrapper.find("textarea").length).toEqual(1);
});

it("change textarea text", () => {
    wrapper.find("textarea").simulate("change", {
        target: { value: "This is a new comment" }
    });
    wrapper.update();
    expect(wrapper.find("textarea").prop("value")).toEqual("This is a new comment");
});
