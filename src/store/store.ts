export class Store {
  private subscribers: Function[];
  private reducers: { [key: string]: Function };
  private state: { [key: string]: any };

  constructor(reducers = {}, initialState = {}) {
    this.state = initialState;
  }

  get value() {
    return this.state;
  }

  dispatch(action) {
    this.state = {
      //merges the current state object into the new state
      ...this.state,
      todos: [...this.state.todos, action.payload]
    };
    console.log(this.state);
  }
}
