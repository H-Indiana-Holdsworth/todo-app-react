import { client, checkError } from './client.js';

export async function getTasks() {
  const resp = await client.from('todos').select('*');
  return checkError(resp);
}
