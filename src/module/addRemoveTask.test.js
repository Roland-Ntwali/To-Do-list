import { addTask, removeTask } from './addRemoveTask.js';

describe('Adding and Removing a function', () => {
  test('adding to do task', () => {
    expect(addTask).not.toBeNull();
  });

  test('remove a task task', () => {
    expect(removeTask).not.toBe('');
  });
  test('remove a task task', () => {
    expect(removeTask.parentElement).not.toBe('');
  });
});