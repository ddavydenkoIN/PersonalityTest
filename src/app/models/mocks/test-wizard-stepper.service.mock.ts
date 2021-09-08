import { of } from 'rxjs';

export const TestWizardStepperServiceMock = {
  navigateToStep: jest.fn(),
  getCurrentStep: jest.fn(() => of({})),
};
