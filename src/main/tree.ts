export interface TreeNode<T = any> {
  value: T;
  left?: TreeNode<T>;
  right?: TreeNode<T>;
}

export function generate(inputs: (number | undefined)[]) {
  const root: TreeNode = { value: inputs.shift() };
  let deepth = 1;
  let trees: TreeNode[] = [root];
  while (inputs.length) {
    const queue: number[] = [];
    for (let i = 0; i < 2 ** deepth; i++) {
      queue.push(inputs.shift() as number);
    }
    deepth++;
    const tempQueue: TreeNode[] = [];
    for (const node of queue) {
      tempQueue.push({ value: node });
    }
    for (let j = 0; j < trees.length; j++) {
      trees[j].left = tempQueue[j * 2];
      trees[j].right = tempQueue[j * 2 + 1];
    }
    trees = tempQueue;
  }
  return root;
}

export function preOrder(root?: TreeNode): number[] {
  if (!root) { return []; }
  const arr: number[] = [];
  root.value && arr.push(root.value);
  arr.push(...preOrder(root.left));
  arr.push(...preOrder(root.right));
  return arr;
}

export function midOrder(root?: TreeNode) {
  if (!root) { return []; }
  const arr: number[] = [];
  arr.push(...midOrder(root.left));
  root.value && arr.push(root.value);
  arr.push(...midOrder(root.right));
  return arr;
}

export function postOrder(root?: TreeNode) {
  if (!root) { return []; }
  const arr: number[] = [];
  arr.push(...postOrder(root.left));
  arr.push(...postOrder(root.right));
  root.value && arr.push(root.value);
  return arr;
}

export function bfs(root: TreeNode) {
  let deepth = -1; // 去除最后一层 [], 去除倒数第二层 [undefined, undefined, ...]
  const result: number[] = [];
  let queue: (TreeNode | undefined)[] = [root];
  while (queue.length) {
    const temp: (TreeNode | undefined)[] = [];
    for (const node of queue) {
      if (!node) { continue; }
      result.push(node.value || 'undefined');
      temp.push(node.left);
      temp.push(node.right);
    }
    queue = temp;
    deepth++;
  }
  return { result, deepth };
}

const inputValue = [1, 2, 3, 4, 5, undefined, 7];
const treeRoot = generate(inputValue);

console.log(`Input: ${inputValue}`);

console.log(`Pre-order : ${preOrder(treeRoot)}`);
console.log(`Mid-order : ${midOrder(treeRoot)}`);
console.log(`Post-order: ${postOrder(treeRoot)}`);

console.log(`BFS: ${bfs(treeRoot).deepth} | ${bfs(treeRoot).result}`);
