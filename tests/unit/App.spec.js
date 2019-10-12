import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("should be an vue instace", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("should match snapshot", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.element).toMatchSnapshot();
  });
});
