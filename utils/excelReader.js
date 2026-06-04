import * as XLSX from "xlsx";
import path from "path";

export function readExcel(filePath, sheetName) {
  const fullPath = path.resolve(filePath);
  console.log("fULL PATH IS: ", fullPath);

  const workbook = XLSX.readFile(fullPath);
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);
  return data;
}
