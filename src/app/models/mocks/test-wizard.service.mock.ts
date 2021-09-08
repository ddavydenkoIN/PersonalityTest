import { of } from 'rxjs';

export const TestWizardServiceMock = {
  loadTest: jest.fn(),
  retrieveTest: jest.fn(() => of({})),
  evaluateResult: jest.fn(),
  doAllAnswersMatch: jest.fn(
    (answers: Record<number, number>, resultFromBe: Record<number, number>) => true
  ),
  retrieveTestEvaluation: jest.fn(() => of({})),
};
