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
});
