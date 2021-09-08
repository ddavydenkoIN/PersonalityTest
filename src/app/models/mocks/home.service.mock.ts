import { of } from 'rxjs';

export const HomeServiceMock = {
  selectTest: jest.fn(),
  retrieveTestsPreview: jest.fn(() => of([])),
  loadTestsPreview: jest.fn()
}
