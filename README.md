# 📑 Descriptions

  - This project demonstrates data‑driven testing in Playwright using JavaScript, where test inputs are dynamically read from Excel, json, xlsx files.
  
  - The framework leverages Playwright’s parallel execution and POM structure, combined with external test data sources, to validate multiple scenarios efficiently.
  
  - By integrating Excel‑based datasets, the suite achieves parameterized test execution, reducing code duplication and improving scalability.
  
  - Failed test cases are automatically captured with screenshots and logged in reports, ensuring traceability across different datasets.
  
  - CI/CD integration with Jenkins enables nightly runs of data‑driven suites, ensuring consistent validation across environments.



# 📝 Technical Description

- Implements data‑driven testing in Playwright using JavaScript, with test inputs dynamically sourced from Excel files via the xlsx library.

- Supports parameterized test execution, enabling multiple datasets to be validated without duplicating code.

- Integrates with CI/CD pipelines for automated nightly runs across different environments.



# 🎯 Functional Description

- Validates login workflows against multiple credential sets stored in Excel.

- Ensures analytics dashboards display accurate results across varied datasets.

- Automates regression scenarios by reusing test logic with different input combinations.



# 📊 Value/Impact Description

- Reduces manual effort by converting Excel datasets into automated Playwright test runs.

- Improves scalability and maintainability of test suites by separating test logic from test data.

- Enhances reporting with dataset‑specific results, screenshots, and logs for traceability.
