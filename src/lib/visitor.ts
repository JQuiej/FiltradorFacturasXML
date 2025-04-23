/* eslint-disable @typescript-eslint/no-unused-vars */

import { AbstractParseTreeVisitor } from 'antlr4ts/tree';
import { FacturaVisitor } from '../antlr/FacturaVisitor';
import { RootContext } from '../antlr/FacturaParser';

interface VisitResult {
  accepted: string[];
  errors: string[];
  data: {
    tipo: string;
    descripcion: string;
    cantidad: string;
    precioUnitario: string;
    total: string;
    iva: string;
    fechaEmision: string;
    nombreReceptor: string;
    nitReceptor: string;
    tipoFactura: string;
  }[];
}

export class FacturaVisitorImpl
  extends AbstractParseTreeVisitor<VisitResult>
  implements FacturaVisitor<VisitResult> {

  protected defaultResult(): VisitResult {
    return {
      accepted: [],
      errors: [],
      data: []
    };
  }

  visitRoot(ctx: RootContext): VisitResult {
    const result = this.defaultResult();

    const text = ctx.text;

    // Extraer desde atributos
    const fechaMatch = text.match(/<dte:DatosGenerales[^>]*FechaHoraEmision="([^"]+)"/);
    const tipoMatch = text.match(/<dte:DatosGenerales[^>]*Tipo="([^"]+)"/);
    const nombreMatch = text.match(/<dte:Receptor[^>]*NombreReceptor="([^"]+)"/);
    const nitMatch = text.match(/<dte:Receptor[^>]*IDReceptor="([^"]+)"/);

    const fechaEmision = fechaMatch?.[1] || '';
    const tipoFactura = tipoMatch?.[1] || '';
    const nombreReceptor = nombreMatch?.[1] || '';
    const nitReceptor = nitMatch?.[1] || '';

    // Extraer items
    const matches = [...text.matchAll(
      /<dte:Item[^>]*BienOServicio="(.*?)"[^>]*>.*?<dte:Cantidad>(.*?)<\/dte:Cantidad>.*?<dte:Descripcion>(.*?)<\/dte:Descripcion>.*?<dte:PrecioUnitario>(.*?)<\/dte:PrecioUnitario>.*?<dte:Total>(.*?)<\/dte:Total>/gs
    )];

    for (const match of matches) {
      const [_, tipo, cantidad, descripcion, precioUnitario, total] = match;
      result.data.push({
        tipo,
        descripcion,
        cantidad,
        precioUnitario,
        total,
        iva: (parseFloat(total) * 0.12).toFixed(2),
        fechaEmision,
        nombreReceptor,
        tipoFactura,
        nitReceptor
      });
      result.accepted.push(`✔ ${descripcion} Q${total}`);
    }

    if (result.data.length === 0) {
      result.errors.push('❌ No se encontraron ítems válidos.');
    }

    return result;
  }

  visit(tree: any) {
    return this.visitRoot(tree);
  }
}
