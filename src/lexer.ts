import type { Token } from "./token.js";
import TokenFactory from "./token.js";
import { isAlpha, isAlphaNumeric, isNumeric } from "./utils/index.js";

class Lexer {
  cursor: number;
  tokens: Array<Token>;
  constructor(public source: string) {
    this.cursor = 0;
    this.tokens = [];
  }

  trimLeft() {
    let char = this.peek();
    while (char !== undefined && [" "].includes(char)) {
      char = this.chop();
    }
  }

  get curr() {
    return this.source[this.cursor];
  }

  peek(ahead = 1) {
    return this.source[this.cursor + ahead - 1];
  }

  chop(amount = 1) {
    this.cursor += amount;
    return this.peek();
  }

  tokenize() {
    let c = this.peek();
    while (c !== undefined) {
      this.trimLeft();
      c = this.peek();

      if (this.curr === ";") {
        this.tokens.push(TokenFactory.SEMICOLON());
      } else if (this.curr === "+") {
        this.tokens.push(TokenFactory.OP_ADD());
      } else if (isNumeric(c)) {
        // look ahead for more digits
        let next = this.peek(1);
        let digitLen = 1;
        while (isNumeric(next)) {
          digitLen++;
          next = this.peek(digitLen);
        }
        const start = this.cursor;
        const end = this.cursor + digitLen - 2; // last digit of the int literal

        const value = this.source.slice(start, end + 1);
        this.tokens.push(TokenFactory.INT_LITERAL(value));

        this.chop(digitLen - 2); // chop to the last subsequent digit
      } else if (isAlpha(c)) {
      }
      this.chop();
    }

    return this.tokens;
  }
}

export default Lexer;
