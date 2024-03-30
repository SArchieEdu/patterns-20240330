export const userService = {
  getUsers() {
    return [];
  },

  getCurrentUSer() {
    return {};
  },
};

const userServiceWithCache = {
  service: userService,
  cache: {},

  getUsers() {
    if (!this.cache.users) {
      this.cache.users = userService.getUsers();
    }

    return this.cache.users;
  },

  getCurrentUSer() {
    return {};
  },
};
