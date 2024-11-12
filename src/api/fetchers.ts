import { endpoints } from './endpoints';
import http from './http';

export async function fetchHomeData() {
  const response: any = await http(endpoints.saavn.home);
  return response;
}
