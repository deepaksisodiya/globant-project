import { shallowMount } from "@vue/test-utils";
import AddMovie from "@/components/AddMovie.vue";

describe("AddMovie.vue", () => {
  it("should be an vue instace", () => {
    const addNewMovie = jest.fn();
    const wrapper = shallowMount(AddMovie, {
      propsData: { addNewMovie }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("should match snapshot", () => {
    const addNewMovie = jest.fn();
    const wrapper = shallowMount(AddMovie, {
      propsData: { addNewMovie }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("Check initial state", () => {
    const addNewMovie = jest.fn();
    const wrapper = shallowMount(AddMovie, {
      propsData: { addNewMovie }
    });
    expect(wrapper.vm.movieName).toBe(null);
    expect(wrapper.vm.genre).toBe(null);
    expect(wrapper.vm.rating).toBe(null);
    expect(wrapper.vm.website).toBe(null);
  });
});
