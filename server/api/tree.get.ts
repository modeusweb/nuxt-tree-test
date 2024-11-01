import { readFile } from 'fs/promises';
import { join } from 'path';

export default defineEventHandler(async () => {
  const filePath = join(process.cwd(), 'public/task_json.txt');
  console.log('Looking for file at:', filePath);

  try {
    const data = await readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading file:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'File not found or cannot be read',
    });
  }
});
