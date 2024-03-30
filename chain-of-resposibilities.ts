interface Middleware {
  next: Middleware | undefined;
  setNext(middleware: Middleware): Middleware;
  handle();
}

export const middleware = (next) => (action) => {
  // ...
  if (action) {
    next(action);
  }
};

const middleware5 = (next) => (action) => {
  // ...
  if (action) {
    next(action);
  }
};
const middleware6 = (next?: (action: unknown) => unknown) => (action) => {
  // ...
  if (action) {
    next?.(action);
  }
};

const middleware2: Middleware = {
  next: undefined,

  setNext(middleware: Middleware) {
    this.next = middleware;
    return this.next;
  },

  handle() {
    if (true) {
      this.next?.handle();
    }
  },
};

const middleware3: Middleware = {
  next: undefined,

  setNext(middleware: Middleware) {
    this.next = middleware;
    return this.next;
  },

  handle() {
    if (true) {
      this.next?.handle();
    }
  },
};

// middleware.setNext(middleware2).setNext(middleware3);

// middleware.handle();

const store = createStore({
  middlewares: [middleware, middleware5, middleware6],
});

function createStore({ middlewares }) {
  const rootMiddleware = middlewares.reduceRight(
    (prevMiddleware, middleware) => {
      return middleware(prevMiddleware);
    }
  );

  return {
    rootMiddleware,
    state: {},
    rootReducer: (state, action) => {
      return {
        // user: userReducer(state.user, action),
      };
    },
    dispatch(action) {
      action = this.rootMiddleware(action);
      if (action) {
        this.state = this.rootReducer(this.state, action);
      }
    },
  };
}

middleware(middleware5(middleware6()));
