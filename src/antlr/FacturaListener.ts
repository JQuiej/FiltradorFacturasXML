// Generated from grammar/Factura.g4 by ANTLR 4.9.0-SNAPSHOT
/* eslint-disable @typescript-eslint/no-unused-vars, prefer-const, @typescript-eslint/no-explicit-any */


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { RootContext } from "./FacturaParser";
import { ElementContext } from "./FacturaParser";
import { AttrContext } from "./FacturaParser";
import { ContentContext } from "./FacturaParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `FacturaParser`.
 */
export interface FacturaListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `FacturaParser.root`.
	 * @param ctx the parse tree
	 */
	enterRoot?: (ctx: RootContext) => void;
	/**
	 * Exit a parse tree produced by `FacturaParser.root`.
	 * @param ctx the parse tree
	 */
	exitRoot?: (ctx: RootContext) => void;

	/**
	 * Enter a parse tree produced by `FacturaParser.element`.
	 * @param ctx the parse tree
	 */
	enterElement?: (ctx: ElementContext) => void;
	/**
	 * Exit a parse tree produced by `FacturaParser.element`.
	 * @param ctx the parse tree
	 */
	exitElement?: (ctx: ElementContext) => void;

	/**
	 * Enter a parse tree produced by `FacturaParser.attr`.
	 * @param ctx the parse tree
	 */
	enterAttr?: (ctx: AttrContext) => void;
	/**
	 * Exit a parse tree produced by `FacturaParser.attr`.
	 * @param ctx the parse tree
	 */
	exitAttr?: (ctx: AttrContext) => void;

	/**
	 * Enter a parse tree produced by `FacturaParser.content`.
	 * @param ctx the parse tree
	 */
	enterContent?: (ctx: ContentContext) => void;
	/**
	 * Exit a parse tree produced by `FacturaParser.content`.
	 * @param ctx the parse tree
	 */
	exitContent?: (ctx: ContentContext) => void;
}

