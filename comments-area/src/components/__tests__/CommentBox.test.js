import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "Root";

let wrapper;

beforeEach(() => {
    wrapper = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrapper.unmount();
});

it("has 2 buttons", () => {
    expect(wrapper.find("button").length).toEqual(2);
});

it("has a textarea", () => {
    expect(wrapper.find("textarea").length).toEqual(1);
});

describe("textarea", () => {
    beforeEach(() => {
        wrapper.find("textarea").simulate("change", {
            target: { value: "This is a new comment" }
        });
        wrapper.update();
    });

    it("changes textarea text", () => {
        expect(wrapper.find("textarea").prop("value")).toEqual("This is a new comment");
    });

    it("textarea gets empty after form submit", () => {
        wrapper.find("form").simulate("submit");
        wrapper.update();
        expect(wrapper.find("textarea").prop("value")).toEqual("");
    });
});
