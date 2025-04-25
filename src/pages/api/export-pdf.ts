/* eslint-disable @typescript-eslint/no-unused-vars */

import type { NextApiRequest, NextApiResponse } from 'next';
import PDFDocument from 'pdfkit';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data } = req.body;

  const doc = new PDFDocument({ margin: 40, size: 'A4', layout: 'landscape' });

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="reporte.pdf"');
  doc.pipe(res);

  const colWidths = [
    80,  // Fecha Emisión
    60,  // Tipo Factura
    130, // Nombre Receptor
    80,  // NIT
    45,  // Tipo
    160, // Descripción
    50,  // Cantidad
    60,  // Unitario
    60,  // Total
    60   // IVA
  ];

  const headers = [
    'Fecha Emisión',
    'Tipo Factura',
    'Nombre Receptor',
    'NIT o CUI',
    'Tipo',
    'Descripción',
    'Cantidad',
    'Unitario',
    'Total',
    'IVA'
  ];

  const startX = doc.page.margins.left;
  let y = doc.y + 20;

  const drawHeader = () => {
    doc.fontSize(9).font('Helvetica-Bold');
    let x = startX;
    headers.forEach((header, i) => {
      const paddingY = 5;
      doc.text(header, x + 5, y + paddingY, { width: colWidths[i] - 10, align: 'center' });
      x += colWidths[i];
    });

    const headerBottomY = y + 24;

    // Dibujar bordes de cada celda de encabezado
    let cx = startX;
    for (let i = 0; i < colWidths.length; i++) {
      doc
        .moveTo(cx, y)
        .lineTo(cx + colWidths[i], y)
        .lineTo(cx + colWidths[i], headerBottomY)
        .lineTo(cx, headerBottomY)
        .lineTo(cx, y)
        .stroke();
      cx += colWidths[i];
    }

    y = headerBottomY;
    doc.font('Helvetica').fontSize(8);
  };

  doc.fontSize(16).font('Helvetica-Bold').text('Reporte Consolidado de Facturas', {
    align: 'center',
  });
  doc.moveDown(2);

  drawHeader();

  const tableLeft = startX;
  const tableRight = tableLeft + colWidths.reduce((a, b) => a + b, 0);

  data.forEach((item: any) => {
    const row = [
      item.fechaEmision,
      item.tipoFactura || '',
      item.nombreReceptor,
      item.nitReceptor,
      item.tipo,
      item.descripcion,
      item.cantidad.toString(),
      `Q${parseFloat(item.precioUnitario).toFixed(2)}`,
      `Q${parseFloat(item.total).toFixed(2)}`,
      `Q${parseFloat(item.iva).toFixed(2)}`
    ];

    let rowHeight = 30;
    row.forEach((cell, i) => {
      const height = doc.heightOfString(cell.toString(), {
        width: colWidths[i] - 10,
      });
      if (height + 10 > rowHeight) rowHeight = height + 10;
    });

    if (y + rowHeight > doc.page.height - 60) {
      doc.addPage();
      y = doc.y + 10;
      drawHeader();
    }

    let cx = startX;
    for (let i = 0; i < row.length; i++) {
      const cellText = row[i].toString();
      const textHeight = doc.heightOfString(cellText, { width: colWidths[i] - 10 });
      const paddingY = (rowHeight - textHeight) / 2;
      doc.text(cellText, cx + 5, y + paddingY, {
        width: colWidths[i] - 10,
        align: i === 5 ? 'left' : 'center',
      });
      cx += colWidths[i];
    }

    // Dibujar bordes de cada celda de la fila
    cx = startX;
    for (let i = 0; i < colWidths.length; i++) {
      doc
        .moveTo(cx, y)
        .lineTo(cx + colWidths[i], y)
        .lineTo(cx + colWidths[i], y + rowHeight)
        .lineTo(cx, y + rowHeight)
        .lineTo(cx, y)
        .stroke();
      cx += colWidths[i];
    }

    y += rowHeight;
  });

  const total = data.reduce((acc: number, item: { total: string }) => acc + parseFloat(item.total), 0);
  const iva = data.reduce((acc: number, item: { iva: string }) => acc + parseFloat(item.iva), 0);

  doc.moveDown(3);
  const totalsX = doc.page.width - 220;
  const labelWidth = 100;
  const valueWidth = 100;

  doc.font('Helvetica-Bold').fontSize(11);

  const printTotalLine = (label: string, value: string) => {
    const currentY = doc.y;
    doc.text(label, totalsX, currentY, { width: labelWidth, align: 'left' });
    doc.text(value, totalsX + labelWidth, currentY, { width: valueWidth, align: 'right' });
    doc.moveDown(1);
  };

  printTotalLine('Total General:', `Q${total.toFixed(2)}`);
  printTotalLine('IVA:', `Q${iva.toFixed(2)}`);

  doc.end();
}
