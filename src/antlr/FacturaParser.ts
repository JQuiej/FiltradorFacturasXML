// Generated from grammar/Factura.g4 by ANTLR 4.9.0-SNAPSHOT
/* eslint-disable @typescript-eslint/no-unused-vars, prefer-const, @typescript-eslint/no-explicit-any */


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { FacturaListener } from "./FacturaListener";
import { FacturaVisitor } from "./FacturaVisitor";


export class FacturaParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly OPEN = 2;
	public static readonly CLOSE = 3;
	public static readonly END_OPEN = 4;
	public static readonly SLASH_CLOSE = 5;
	public static readonly NAME = 6;
	public static readonly STRING = 7;
	public static readonly TEXT = 8;
	public static readonly WS = 9;
	public static readonly RULE_root = 0;
	public static readonly RULE_element = 1;
	public static readonly RULE_attr = 2;
	public static readonly RULE_content = 3;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"root", "element", "attr", "content",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='", "'<'", "'>'", "'</'", "'/>'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "OPEN", "CLOSE", "END_OPEN", "SLASH_CLOSE", "NAME", 
		"STRING", "TEXT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FacturaParser._LITERAL_NAMES, FacturaParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FacturaParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Factura.g4"; }

	// @Override
	public get ruleNames(): string[] { return FacturaParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return FacturaParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(FacturaParser._ATN, this);
	}
	// @RuleVersion(0)
	public root(): RootContext {
		let _localctx: RootContext = new RootContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, FacturaParser.RULE_root);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 9;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 8;
				this.element();
				}
				}
				this.state = 11;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FacturaParser.OPEN);
			this.state = 13;
			this.match(FacturaParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public element(): ElementContext {
		let _localctx: ElementContext = new ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, FacturaParser.RULE_element);
		let _la: number;
		try {
			this.state = 42;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 15;
				this.match(FacturaParser.OPEN);
				this.state = 16;
				this.match(FacturaParser.NAME);
				this.state = 20;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FacturaParser.NAME) {
					{
					{
					this.state = 17;
					this.attr();
					}
					}
					this.state = 22;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 23;
				this.match(FacturaParser.SLASH_CLOSE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 24;
				this.match(FacturaParser.OPEN);
				this.state = 25;
				this.match(FacturaParser.NAME);
				this.state = 29;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FacturaParser.NAME) {
					{
					{
					this.state = 26;
					this.attr();
					}
					}
					this.state = 31;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 32;
				this.match(FacturaParser.CLOSE);
				this.state = 36;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === FacturaParser.OPEN || _la === FacturaParser.TEXT) {
					{
					{
					this.state = 33;
					this.content();
					}
					}
					this.state = 38;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 39;
				this.match(FacturaParser.END_OPEN);
				this.state = 40;
				this.match(FacturaParser.NAME);
				this.state = 41;
				this.match(FacturaParser.CLOSE);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attr(): AttrContext {
		let _localctx: AttrContext = new AttrContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, FacturaParser.RULE_attr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 44;
			this.match(FacturaParser.NAME);
			this.state = 45;
			this.match(FacturaParser.T__0);
			this.state = 46;
			this.match(FacturaParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public content(): ContentContext {
		let _localctx: ContentContext = new ContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FacturaParser.RULE_content);
		try {
			this.state = 50;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FacturaParser.OPEN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 48;
				this.element();
				}
				break;
			case FacturaParser.TEXT:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 49;
				this.match(FacturaParser.TEXT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\v7\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x06\x02\f\n\x02" +
		"\r\x02\x0E\x02\r\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x07\x03\x15\n" +
		"\x03\f\x03\x0E\x03\x18\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\x1E" +
		"\n\x03\f\x03\x0E\x03!\v\x03\x03\x03\x03\x03\x07\x03%\n\x03\f\x03\x0E\x03" +
		"(\v\x03\x03\x03\x03\x03\x03\x03\x05\x03-\n\x03\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x05\x03\x05\x05\x055\n\x05\x03\x05\x02\x02\x02\x06\x02\x02" +
		"\x04\x02\x06\x02\b\x02\x02\x02\x028\x02\v\x03\x02\x02\x02\x04,\x03\x02" +
		"\x02\x02\x06.\x03\x02\x02\x02\b4\x03\x02\x02\x02\n\f\x05\x04\x03\x02\v" +
		"\n\x03\x02\x02\x02\f\r\x03\x02\x02\x02\r\v\x03\x02\x02\x02\r\x0E\x03\x02" +
		"\x02\x02\x0E\x0F\x03\x02\x02\x02\x0F\x10\x07\x02\x02\x03\x10\x03\x03\x02" +
		"\x02\x02\x11\x12\x07\x04\x02\x02\x12\x16\x07\b\x02\x02\x13\x15\x05\x06" +
		"\x04\x02\x14\x13\x03\x02\x02\x02\x15\x18\x03\x02\x02\x02\x16\x14\x03\x02" +
		"\x02\x02\x16\x17\x03\x02\x02\x02\x17\x19\x03\x02\x02\x02\x18\x16\x03\x02" +
		"\x02\x02\x19-\x07\x07\x02\x02\x1A\x1B\x07\x04\x02\x02\x1B\x1F\x07\b\x02" +
		"\x02\x1C\x1E\x05\x06\x04\x02\x1D\x1C\x03\x02\x02\x02\x1E!\x03\x02\x02" +
		"\x02\x1F\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \"\x03\x02\x02\x02!" +
		"\x1F\x03\x02\x02\x02\"&\x07\x05\x02\x02#%\x05\b\x05\x02$#\x03\x02\x02" +
		"\x02%(\x03\x02\x02\x02&$\x03\x02\x02\x02&\'\x03\x02\x02\x02\')\x03\x02" +
		"\x02\x02(&\x03\x02\x02\x02)*\x07\x06\x02\x02*+\x07\b\x02\x02+-\x07\x05" +
		"\x02\x02,\x11\x03\x02\x02\x02,\x1A\x03\x02\x02\x02-\x05\x03\x02\x02\x02" +
		"./\x07\b\x02\x02/0\x07\x03\x02\x0201\x07\t\x02\x021\x07\x03\x02\x02\x02" +
		"25\x05\x04\x03\x0235\x07\n\x02\x0242\x03\x02\x02\x0243\x03\x02\x02\x02" +
		"5\t\x03\x02\x02\x02\b\r\x16\x1F&,4";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FacturaParser.__ATN) {
			FacturaParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FacturaParser._serializedATN));
		}

		return FacturaParser.__ATN;
	}

}

export class RootContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(FacturaParser.EOF, 0); }
	public element(): ElementContext[];
	public element(i: number): ElementContext;
	public element(i?: number): ElementContext | ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElementContext);
		} else {
			return this.getRuleContext(i, ElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FacturaParser.RULE_root; }
	// @Override
	public enterRule(listener: FacturaListener): void {
		if (listener.enterRoot) {
			listener.enterRoot(this);
		}
	}
	// @Override
	public exitRule(listener: FacturaListener): void {
		if (listener.exitRoot) {
			listener.exitRoot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FacturaVisitor<Result>): Result {
		if (visitor.visitRoot) {
			return visitor.visitRoot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ElementContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(FacturaParser.OPEN, 0); }
	public NAME(): TerminalNode[];
	public NAME(i: number): TerminalNode;
	public NAME(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FacturaParser.NAME);
		} else {
			return this.getToken(FacturaParser.NAME, i);
		}
	}
	public SLASH_CLOSE(): TerminalNode | undefined { return this.tryGetToken(FacturaParser.SLASH_CLOSE, 0); }
	public attr(): AttrContext[];
	public attr(i: number): AttrContext;
	public attr(i?: number): AttrContext | AttrContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttrContext);
		} else {
			return this.getRuleContext(i, AttrContext);
		}
	}
	public CLOSE(): TerminalNode[];
	public CLOSE(i: number): TerminalNode;
	public CLOSE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FacturaParser.CLOSE);
		} else {
			return this.getToken(FacturaParser.CLOSE, i);
		}
	}
	public END_OPEN(): TerminalNode | undefined { return this.tryGetToken(FacturaParser.END_OPEN, 0); }
	public content(): ContentContext[];
	public content(i: number): ContentContext;
	public content(i?: number): ContentContext | ContentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ContentContext);
		} else {
			return this.getRuleContext(i, ContentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FacturaParser.RULE_element; }
	// @Override
	public enterRule(listener: FacturaListener): void {
		if (listener.enterElement) {
			listener.enterElement(this);
		}
	}
	// @Override
	public exitRule(listener: FacturaListener): void {
		if (listener.exitElement) {
			listener.exitElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FacturaVisitor<Result>): Result {
		if (visitor.visitElement) {
			return visitor.visitElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttrContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(FacturaParser.NAME, 0); }
	public STRING(): TerminalNode { return this.getToken(FacturaParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FacturaParser.RULE_attr; }
	// @Override
	public enterRule(listener: FacturaListener): void {
		if (listener.enterAttr) {
			listener.enterAttr(this);
		}
	}
	// @Override
	public exitRule(listener: FacturaListener): void {
		if (listener.exitAttr) {
			listener.exitAttr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FacturaVisitor<Result>): Result {
		if (visitor.visitAttr) {
			return visitor.visitAttr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ContentContext extends ParserRuleContext {
	public element(): ElementContext | undefined {
		return this.tryGetRuleContext(0, ElementContext);
	}
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(FacturaParser.TEXT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FacturaParser.RULE_content; }
	// @Override
	public enterRule(listener: FacturaListener): void {
		if (listener.enterContent) {
			listener.enterContent(this);
		}
	}
	// @Override
	public exitRule(listener: FacturaListener): void {
		if (listener.exitContent) {
			listener.exitContent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FacturaVisitor<Result>): Result {
		if (visitor.visitContent) {
			return visitor.visitContent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


