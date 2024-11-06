import { promises as fs } from 'fs';
import { join } from 'path';

const readFileFromLocal = async (filePath) => {
  const fileContent = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(fileContent);
};

const readFileFromUrl = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Ошибка HTTP: ${response.status}`);
  }
  const fileContent = await response.text();
  return JSON.parse(fileContent);
};

const handleError = (error) => {
  console.error('Ошибка при получении данных:', error);
  return { error: 'Не удалось загрузить данные дерева' };
};

export default defineEventHandler(async () => {
  try {
    const isDevelopment = process.env.NODE_ENV === 'development';
    const filePath = isDevelopment
      ? join(process.cwd(), 'public', 'task_json.txt')
      : 'https://nuxt-tree-test.vercel.app/task_json.txt';

    return isDevelopment
      ? await readFileFromLocal(filePath)
      : await readFileFromUrl(filePath);
  } catch (error) {
    return handleError(error);
  }
});
