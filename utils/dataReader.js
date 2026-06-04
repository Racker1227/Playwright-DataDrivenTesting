import path from "path";
import { readCSV } from "../utils/csvReader";
import { readExcel } from "../utils/excelReader";
import fs from "fs";

export function readData(filePath, sheetName) {
  const ext = path.extname(filePath).toLowerCase();

  switch (ext) {
    case ".csv":
      console.log("Rading CSV file ");
      return readCSV(filePath);

    case ".xlsx":
      console.log("Reading Excel file");
      return readExcel(filePath, sheetName || "Sheet1");

    case ".json":
      console.log("Reading JSON file");
      const jsonData = fs.readFileSync(filePath, "utf-8");
      return JSON.parse(jsonData);

    default:
        throw new Error(`Unsupported file format: ${ext}`);
  }
}
