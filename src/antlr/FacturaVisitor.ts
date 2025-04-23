// Generated from grammar/Factura.g4 by ANTLR 4.9.0-SNAPSHOT
/* eslint-disable @typescript-eslint/no-unused-vars, prefer-const, @typescript-eslint/no-explicit-any */


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { RootContext } from "./FacturaParser";
import { ElementContext } from "./FacturaParser";
import { AttrContext } from "./FacturaParser";
import { ContentContext } from "./FacturaParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FacturaParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface FacturaVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `FacturaParser.root`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoot?: (ctx: RootContext) => Result;

	/**
	 * Visit a parse tree produced by `FacturaParser.element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElement?: (ctx: ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `FacturaParser.attr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttr?: (ctx: AttrContext) => Result;

	/**
	 * Visit a parse tree produced by `FacturaParser.content`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContent?: (ctx: ContentContext) => Result;
}

