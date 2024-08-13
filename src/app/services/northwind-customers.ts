import { Customer } from '../models/NorthwindCustomers/customer';
import { FetchApi } from './fetch-api';

const API_ENDPOINT = 'https://northwindcloud.azurewebsites.net';

export async function getCustomerList(): Promise<Customer[]> {
  return await FetchApi.fetchApiResponse<Customer[]>(`${API_ENDPOINT}/api/customers`, []);
}
