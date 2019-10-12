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

  it("Check initial data", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.vm.movies.length).toBe(0);
    expect(wrapper.vm.onMovieListPage).toBe(false);
  });
});
