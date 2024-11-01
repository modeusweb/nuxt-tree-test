export default defineEventHandler(async () => {
  const config = useRuntimeConfig();
  const fileUrl = `${config.public.baseURL}/task_json.txt`;

  console.log('Fetching file from URL:', fileUrl);

  try {
    const response = await fetch(fileUrl);
    if (!response.ok)
      throw new Error(`Failed to fetch file: ${response.statusText}`);

    // Предполагается, что файл имеет JSON-формат
    return await response.json();
  } catch (error) {
    console.error('Error fetching file:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'File not found or cannot be read: ' + error.message,
    });
  }
});
