import { shallowMount } from "@vue/test-utils";
import ListMovie from "@/components/ListMovie.vue";

describe("ListMovie.vue", () => {
  it("should be an vue instace", () => {
    const movies = [];
    const wrapper = shallowMount(ListMovie, {
      propsData: { movies }
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it("should match snapshot with empty movies list", () => {
    const movies = [];
    const wrapper = shallowMount(ListMovie, {
      propsData: { movies }
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should match snapshot with movies list", () => {
    const movies = [
      {
        movieName: "movieName",
        genre: "genre",
        rating: "rating",
        website: "website"
      }
    ];
    const wrapper = shallowMount(ListMovie, {
      propsData: { movies }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
