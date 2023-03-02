import mockItems from '../mocks/localstorage.js';
import MockItemsTest from './mockedfunctions.js';

describe('Test for Task Addition', () => {
  const testItems = new MockItemsTest('task123', 1, false);
  const testItems2 = new MockItemsTest('task23', 2, false);
  test('add items to list', () => {
    expect(MockItemsTest.addTask(testItems.getItem()).length).toBe(mockItems.length);
    expect(MockItemsTest.addTask(testItems2.getItem()).length).toBe(mockItems.length);
  });
});

describe('Test for Task Deletion', () => {
  test('delete items to list', () => {
    expect(MockItemsTest.deleteTask(0).length).toBe(mockItems.length);
    expect(MockItemsTest.deleteTask(1).length).toBe(mockItems.length);
  });
});