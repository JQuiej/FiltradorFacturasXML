/* eslint-disable @typescript-eslint/no-unused-vars */

import type { NextApiRequest, NextApiResponse } from 'next';
import { CharStreams, CommonTokenStream } from 'antlr4ts';
import { FacturaLexer } from '@/antlr/FacturaLexer';
import { FacturaParser } from '@/antlr/FacturaParser';
import { FacturaVisitorImpl } from '@/lib/visitor';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido. Usa POST.' });
  }

  try {
    const xml = req.body.xml;

    if (!xml || typeof xml !== 'string') {
      return res.status(400).json({ error: 'El campo XML es requerido.' });
    }

    const input = CharStreams.fromString(xml);
    const lexer = new FacturaLexer(input);
    const tokens = new CommonTokenStream(lexer);
    const parser = new FacturaParser(tokens);

    const tree = parser.root();
    const visitor = new FacturaVisitorImpl();
    const result = visitor.visit(tree); // ← contiene { data, meta, errors, accepted }

    return res.status(200).json(result);
  } catch (error) {
    console.error('Error al procesar XML:', error);
    return res.status(500).json({ error: 'Error interno al analizar el XML.' });
  }
}
