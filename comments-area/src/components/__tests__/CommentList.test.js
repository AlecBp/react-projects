import React from "react";
import { mount } from "enzyme";

import CommentList from "components/CommentList";
import Root from "Root";
import { wrap } from "module";

let wrapper;
beforeEach(() => {
    const initialState = {
        comments: ["Comment 1", "Comment 2"]
    };

    wrapper = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );
});

afterEach(() => {
    wrapper.unmount();
});

it("creates 1 div with comment class per comment", () => {
    expect(wrapper.find("div.comment").length).toEqual(2);
});

it("shows text for each comment", () => {
    expect(wrapper.render().text()).toContain("Comment 1");
    expect(wrapper.render().text()).toContain("Comment 2");
});
