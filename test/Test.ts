import { assert } from 'chai';

type TestInput = any;
type TestOutput = any;

type TestCase = {
  inputs: TestInput[];
  output: TestOutput;
};

export abstract class Test {
  cases: TestCase[];

  constructor(cases: TestCase[]) {
    this.cases = cases;
  }

  transformTestInputsForSolution(inputs: TestInput[]): any[] {
    return inputs;
  }

  transformActualOutputForDisplay(actualOutput: any): any {
    return actualOutput;
  }

  assertEqual(actualOutput: any, testOutput: any): void {
    assert.strictEqual(actualOutput, testOutput);
  }
}
