import { values } from "mobx";
import { types, getSnapshot } from "mobx-state-tree";

// todo modal for providind shape to mst
const Todo = types
  .model({
    name: types.optional(types.string, ""),
    done: types.optional(types.boolean, false),
  })
  //   these are actions associated with the modal
  .actions((self) => ({
    setName(newName) {
      self.name = newName;
    },
    toggle() {
      self.done = !self.done;
    },
  }));
// user modal
const User = types.model({
  name: types.optional(types.string, ""),
});

// root store
const RootStore = types
  .model("RootModal", {
    users: types.map(User),
    todos: types.map(Todo),
  })
  .actions((self) => ({
    addTodo(id, name) {
      self.todos.set(id, Todo.create({ name }));
    },
  }))
  //   computed properties
  .views((self) => ({
    get pendingCount() {
      return values(self.todos).filter((todo) => !todo.done).length;
    },

    get completedCounts() {
      return values(self.todos).filter((todo) => todo.done).length;
    },
  }));

const store = RootStore.create({ users: {} });

// * creating instances of modals
const eat = Todo.create({ name: "eat", done: true });
const john = User.create({ name: "john" });

console.log(getSnapshot(eat)); // returns -> { name: 'eat', done: true }
console.log(getSnapshot(john)); // returns -> {name: "john"}

store.addTodo(1, "Eat Cake");
console.log(getSnapshot({ name: "eat", done: true }));
