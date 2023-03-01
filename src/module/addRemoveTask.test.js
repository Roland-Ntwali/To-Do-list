/* eslint-disable no-unused-expressions */

import { addTask, removeTask } from './addRemoveTask.js';

describe('Ading and Removing a function', () => {
  test('adding to do task', () => {
    expect(addTask).not.toBeNull();
  });

  test('remove a task task', () => {
    expect(removeTask).not.toBeDefined;
  });

  test('remove a task task', () => {
    expect(removeTask.parentElement).not.toBe('');
  });
});
