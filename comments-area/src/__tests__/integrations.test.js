import React from "react";
import { mount } from "enzyme";
import App from "components/App";
import moxios from "moxios";
import Root from "Root";

let wrapper;
beforeEach(() => {
    moxios.install();
    moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
        status: 200,
        response: [{ name: "fetched1" }, { name: "fetched2" }]
    });
    wrapper = mount(
        <Root>
            <App />
        </Root>
    );
});

afterEach(() => {
    moxios.uninstall();
    wrapper.unmount();
});

it("fetch comments and display correctly", done => {
    wrapper.find("button.fetch-comments").simulate("click");
    moxios.wait(() => {
        wrapper.update();
        expect(wrapper.find("div.comment").length).toEqual(2);
        // done() is a callback function specified as the first argument of the arrow function inside the "it" function,
        // When done() is invoked the test ("it") finishes, this has to be used because of introduced delay by the function moxios.wait()
        // Which is needed because moxios "needs time" to kick in and fake the response from the axios request
        // if there is no moxios.wait() the test might "finish" before it gets actually tested
        done();
    });
});
