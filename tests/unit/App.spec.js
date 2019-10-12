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

  it("should check initial data", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.vm.movies.length).toBe(0);
    expect(wrapper.vm.onMovieListPage).toBe(false);
  });

  it("should check check button text", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.vm.onMovieListPage).toBe(false);
    expect(wrapper.vm.buttonText).toBe("go to Add Movie");
    wrapper.setData({
      onMovieListPage: true
    });
    expect(wrapper.vm.buttonText).toBe("Go To Movies List");
  });

  it("should check header text", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.vm.onMovieListPage).toBe(false);
    expect(wrapper.vm.headertext).toBe("Movies List");
    wrapper.setData({
      onMovieListPage: true
    });
    expect(wrapper.vm.headertext).toBe("Add Movie");
  });

  it("should toggle the onMovieListPage", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.vm.onMovieListPage).toBe(false);
    wrapper.vm.toggleScreen();
    expect(wrapper.vm.onMovieListPage).toBe(true);
  });

  it("should add movie to movies array", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.vm.movies.length).toBe(0);
    wrapper.vm.addNewMovie({
      movieName: "kaho na pyar he",
      genre: "romantic",
      rating: 5,
      website: "www.random.com"
    });
    expect(wrapper.vm.movies.length).toBe(1);
  });
});
