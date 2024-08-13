import { useCallback, useEffect, useState } from 'react';
import { Customer } from '../models/NorthwindCustomers/customer';
import { getCustomerList } from '../services/northwind-customers';

export const useGetCustomerList = () => {
  const [customer, setCustomer] = useState<Customer[]>([]);

  const requestCustomer = useCallback(() => {
    let ignore = false;
    getCustomerList()
      .then((data) => {
        if (!ignore) {
          setCustomer(data);
        }
      })
    return () => {
      ignore = true;
    }
  }, []);

  useEffect(() => {
    requestCustomer();
  }, [requestCustomer]);

  return { requestNorthwindCustomersCustomer: requestCustomer, northwindCustomersCustomer: customer, setNorthwindCustomersCustomer: setCustomer };
}
