import mockData from "./mockData.json";

let cursor = -1;
const size = 50;

function delay(time: number) {
  return new Promise((resolve) => setTimeout(() => resolve(), time));
}

export async function apiData() {
  await delay(1000);
  if (Math.random() > 0.7) {
    throw new Error("Something went wrong");
  }
  cursor += 1;
  const start = cursor * size;
  const end = cursor * size + size;
  return mockData.slice(start, end);
}

export default async function apiDataWrapped() {
  return new Promise((resolve, reject) => {
    try {
      const data = apiData();

      resolve(data);
    } catch (e) {
      reject(e);
    }
  });
}
