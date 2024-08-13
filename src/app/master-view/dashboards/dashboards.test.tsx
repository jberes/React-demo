import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import Dashboards from './dashboards';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);


test('renders Dashboards component', () => {
  const wrapper = render(<Dashboards />);
  expect(wrapper).toBeTruthy();
});