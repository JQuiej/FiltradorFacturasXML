// Generated from grammar/Factura.g4 by ANTLR 4.9.0-SNAPSHOT
/* eslint-disable @typescript-eslint/no-unused-vars, prefer-const, @typescript-eslint/no-explicit-any */


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class FacturaLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly OPEN = 2;
	public static readonly CLOSE = 3;
	public static readonly END_OPEN = 4;
	public static readonly SLASH_CLOSE = 5;
	public static readonly NAME = 6;
	public static readonly STRING = 7;
	public static readonly TEXT = 8;
	public static readonly WS = 9;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "OPEN", "CLOSE", "END_OPEN", "SLASH_CLOSE", "NAME", "STRING", 
		"TEXT", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='", "'<'", "'>'", "'</'", "'/>'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, "OPEN", "CLOSE", "END_OPEN", "SLASH_CLOSE", "NAME", 
		"STRING", "TEXT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FacturaLexer._LITERAL_NAMES, FacturaLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FacturaLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(FacturaLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Factura.g4"; }

	// @Override
	public get ruleNames(): string[] { return FacturaLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return FacturaLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return FacturaLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return FacturaLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\v=\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x07\x07$\n\x07\f\x07\x0E\x07\'\v\x07\x03\b\x03\b\x07\b+\n\b\f" +
		"\b\x0E\b.\v\b\x03\b\x03\b\x03\t\x06\t3\n\t\r\t\x0E\t4\x03\n\x06\n8\n\n" +
		"\r\n\x0E\n9\x03\n\x03\n\x02\x02\x02\v\x03\x02\x03\x05\x02\x04\x07\x02" +
		"\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x03\x02" +
		"\x07\x06\x02<<C\\aac|\x07\x02/02<C\\aac|\x04\x02$$^^\x04\x02>>@@\x05\x02" +
		"\v\f\x0F\x0F\"\"\x02@\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02" +
		"\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02" +
		"\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02" +
		"\x13\x03\x02\x02\x02\x03\x15\x03\x02\x02\x02\x05\x17\x03\x02\x02\x02\x07" +
		"\x19\x03\x02\x02\x02\t\x1B\x03\x02\x02\x02\v\x1E\x03\x02\x02\x02\r!\x03" +
		"\x02\x02\x02\x0F(\x03\x02\x02\x02\x112\x03\x02\x02\x02\x137\x03\x02\x02" +
		"\x02\x15\x16\x07?\x02\x02\x16\x04\x03\x02\x02\x02\x17\x18\x07>\x02\x02" +
		"\x18\x06\x03\x02\x02\x02\x19\x1A\x07@\x02\x02\x1A\b\x03\x02\x02\x02\x1B" +
		"\x1C\x07>\x02\x02\x1C\x1D\x071\x02\x02\x1D\n\x03\x02\x02\x02\x1E\x1F\x07" +
		"1\x02\x02\x1F \x07@\x02\x02 \f\x03\x02\x02\x02!%\t\x02\x02\x02\"$\t\x03" +
		"\x02\x02#\"\x03\x02\x02\x02$\'\x03\x02\x02\x02%#\x03\x02\x02\x02%&\x03" +
		"\x02\x02\x02&\x0E\x03\x02\x02\x02\'%\x03\x02\x02\x02(,\x07$\x02\x02)+" +
		"\n\x04\x02\x02*)\x03\x02\x02\x02+.\x03\x02\x02\x02,*\x03\x02\x02\x02," +
		"-\x03\x02\x02\x02-/\x03\x02\x02\x02.,\x03\x02\x02\x02/0\x07$\x02\x020" +
		"\x10\x03\x02\x02\x0213\n\x05\x02\x0221\x03\x02\x02\x0234\x03\x02\x02\x02" +
		"42\x03\x02\x02\x0245\x03\x02\x02\x025\x12\x03\x02\x02\x0268\t\x06\x02" +
		"\x0276\x03\x02\x02\x0289\x03\x02\x02\x0297\x03\x02\x02\x029:\x03\x02\x02" +
		"\x02:;\x03\x02\x02\x02;<\b\n\x02\x02<\x14\x03\x02\x02\x02\x07\x02%,49" +
		"\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FacturaLexer.__ATN) {
			FacturaLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FacturaLexer._serializedATN));
		}

		return FacturaLexer.__ATN;
	}

}

