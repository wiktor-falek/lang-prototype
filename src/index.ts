import { readFileSync } from "fs";
import path from "path";
import * as url from "url";
import Lexer from "./lexer.js";
import { isNumeric } from "./utils/index.js";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

// const source = readFileSync(path.join(__dirname, "../source.txt"), "utf-8");
const source = "      9 + 10;";
console.log({source});

const lexer = new Lexer(source);
const tokens = lexer.tokenize();
console.log({ tokens });
// const output = "21";
// console.log({output});
