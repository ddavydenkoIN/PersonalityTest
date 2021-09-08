import { LabelValue, NameId, Id } from './primitive';

export interface TestData extends Id<number> {
  question: string;
  options: LabelValue<string, number>[];
}

export interface Test extends TestPreview {
  questions: TestData[];
}

export interface TestPreview extends NameId {
  description: string;
}

export interface TestResult extends Id<number> {
  overlapResult: string;
  noOverlapResult: string;
  overlapDescription: string;
  noOverlapDescription: string;
  answers: Record<number, number>;
}

export interface TestEvaluation {
  result: string;
  description: string;
}
