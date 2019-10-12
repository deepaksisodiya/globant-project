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

  it("should check initial state", () => {
    const addNewMovie = jest.fn();
    const wrapper = shallowMount(AddMovie, {
      propsData: { addNewMovie }
    });
    expect(wrapper.vm.movieName).toBe(null);
    expect(wrapper.vm.genre).toBe(null);
    expect(wrapper.vm.rating).toBe(null);
    expect(wrapper.vm.website).toBe(null);
  });

  it("should add movie to list", () => {
    const addNewMovie = jest.fn();
    const wrapper = shallowMount(AddMovie, {
      propsData: { addNewMovie }
    });
    expect(wrapper.vm.movieName).toBe(null);
    expect(wrapper.vm.genre).toBe(null);
    expect(wrapper.vm.rating).toBe(null);
    expect(wrapper.vm.website).toBe(null);
    wrapper.setData({
      movieName: "kaho na pyar he",
      genre: "romantic",
      rating: 5,
      website: "www.random.com"
    });
    expect(wrapper.vm.movieName).toBe("kaho na pyar he");
    wrapper.vm.addMovieToList();
    expect(addNewMovie).toHaveBeenCalled();
    expect(wrapper.vm.movieName).toBe(null);
  });

  it("should reset data", () => {
    const addNewMovie = jest.fn();
    const wrapper = shallowMount(AddMovie, {
      propsData: { addNewMovie }
    });
    wrapper.setData({
      movieName: "kaho na pyar he",
      genre: "romantic",
      rating: 5,
      website: "www.random.com"
    });
    wrapper.vm.resetData();
    expect(wrapper.vm.movieName).toBe(null);
    expect(wrapper.vm.genre).toBe(null);
    expect(wrapper.vm.rating).toBe(null);
    expect(wrapper.vm.website).toBe(null);
  });
});
