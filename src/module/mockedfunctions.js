const { default: mockItems } = require('./mocks/localstorage');

module.exports = class MockItemsTest {
  constructor(description, id = 0, compl = false) {
    this.description = description;
    this.id = id;
    this.compl = compl;
  }

  getItem() {
    const task = {
      description: this.description,
      id: this.id,
      complete: this.complete,
    };
    return task;
  }

  static addTask(items) {
    mockItems.push(items);
    return mockItems;
  }

  static deleteTask(id) {
    mockItems.splice(id, 1);
    return mockItems;
  }

  clearCompTask() {
    let task = {
      description: this.description,
      id: this.id,
      complete: this.complete,
    };
    const clearTask = (items) => items.filter((task) => !task.complete);
    task = clearTask;
    return task;
  }

  EditTest() {
    mockItems[this.id].description = this.complete;
    return mockItems[this.id];
  }

  IsStatusUpdate() {
    if (mockItems[0].completed === this.complete) {
      mockItems[0].completed = true;
    } else if (mockItems[0].completed) {
      mockItems[0].completed = this.complete;
    }
    return mockItems[0].completed;
  }
};