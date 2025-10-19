import fs from 'fs';
import csvParse from 'csv-parse/sync';

export function readCsv(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf8');
  const records = csvParse.parse(content, { columns: true, skip_empty_lines: true });
  return records;
}
