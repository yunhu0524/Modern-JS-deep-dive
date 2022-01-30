import "regenerator-runtime";
import Queue from "../src/queue";

describe("queue", () => {
  test("queue functions", () => {
    // 큐 생성
    const queue = new Queue();
    expect(queue.size).toBe(0);

    queue.push({ num: 0, str: "a" });
    queue.push({ num: 1, str: "b" });
    queue.push({ num: 2, str: "c" });
    queue.push({ num: 3, str: "d" });
    expect(queue.size).toBe(4);
    expect(queue.isEmpty()).toBe(false);
  });
});
