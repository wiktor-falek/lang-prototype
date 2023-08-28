type TokenKind =
  | "OP_ADD"
  | "COMMENT"
  | "SEMICOLON"
  | "STRING_LITERAL"
  | "INT_LITERAL";

export class Token {
  constructor(public kind: TokenKind, public value?: string) {}
}

export default class TokenFactory {
  static OP_ADD() {
    return new Token("OP_ADD");
  }
  static COMMENT() {
    return new Token("COMMENT");
  }
  static SEMICOLON() {
    return new Token("SEMICOLON");
  }
  static STRING_LITERAL(value: string) {
    return new Token("STRING_LITERAL", value);
  }
  static INT_LITERAL(value: string) {
    return new Token("INT_LITERAL", value);
  }
}
