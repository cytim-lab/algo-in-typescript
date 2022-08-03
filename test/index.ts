import path from 'path';
import { Test } from './Test';

const importTestModule = async (
  solutionPath: string
): Promise<{ default: Test }> => {
  const problemDir = path.dirname(solutionPath);
  const testModule = await import(
    path.resolve(process.cwd(), problemDir, 'test')
  );

  if (!(testModule.default instanceof Test)) {
    throw new Error('Unknown test');
  }

  return testModule;
};

const importSolutionModule = async (
  solutionPath: string
): Promise<{ default: (...args: any[]) => any }> => {
  solutionPath = path.resolve(process.cwd(), solutionPath);
  const solutionModule = await import(solutionPath);

  if (typeof solutionModule.default !== 'function') {
    throw new Error('Unknown solution');
  }

  return solutionModule;
};

(async ([solutionPath]: string[]) => {
  if (!solutionPath) {
    console.warn('USAGE: test.ts <SOLUTION_PATH>');
    process.exit(1);
  }

  const { default: test } = await importTestModule(solutionPath);
  const { default: solution } = await importSolutionModule(solutionPath);

  for (const i in test.cases) {
    const testCase = test.cases[i];

    console.log(`[Test Case #${i}]`);
    console.log(`Inputs:          ${JSON.stringify(testCase.inputs)}`);
    console.log(`Expected Output: ${JSON.stringify(testCase.output)}`);

    let actualOutput: any;
    try {
      const inputs = test.transformTestInputsForSolution.apply(
        test,
        testCase.inputs
      );
      actualOutput = solution.apply(null, inputs);
      console.log(
        `Actual Output:   ${JSON.stringify(
          test.transformActualOutputForDisplay(actualOutput)
        )}`
      );
    } catch (e) {
      throw new Error(`Failed to run the solution: ${e}`);
    }

    test.assertEqual(actualOutput, testCase.output);

    console.log();
  }

  console.log('All test cases passed!');
})(process.argv.slice(2));
