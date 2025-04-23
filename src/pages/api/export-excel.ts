/* eslint-disable @typescript-eslint/no-unused-vars */

import type { NextApiRequest, NextApiResponse } from 'next';
import ExcelJS from 'exceljs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data } = req.body;
  const wb = new ExcelJS.Workbook();
  const ws = wb.addWorksheet('Reporte');

  const offset = 1; // Iniciar desde columna B

  // Título
  ws.mergeCells(1, offset + 0, 1, offset + 9);
  const titleCell = ws.getCell(1, offset + 0);
  titleCell.value = 'Reporte Consolidado de Facturas';
  titleCell.font = { size: 14, bold: true };
  titleCell.alignment = { horizontal: 'center' };

  ws.addRow([]);

  // Encabezados
  const headers = [
    'Fecha Emisión',
    'Tipo Factura',
    'Nombre Receptor',
    'NIT o CUI',
    'Tipo',
    'Descripción',
    'Cantidad',
    'Precio Unitario',
    'Total',
    'IVA'
  ];

  const headerRow = ws.addRow([...Array(offset).fill(''), ...headers]);

  headerRow.eachCell((cell, colNumber) => {
    if (colNumber > offset) {
      cell.font = { bold: true };
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' },
      };
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
    }
  });

  let totalGlobal = 0;
  let ivaGlobal = 0;

  data.forEach((row: any) => {
    const total = parseFloat(row.total);
    const iva = parseFloat(row.iva);
    totalGlobal += total;
    ivaGlobal += iva;

    const dataRow = ws.addRow([
      ...Array(offset).fill(''),
      row.fechaEmision,
      row.tipoFactura,
      row.nombreReceptor,
      row.nitReceptor,
      row.tipo,
      row.descripcion,
      row.cantidad,
      row.precioUnitario,
      total,
      iva,
    ]);

    dataRow.eachCell((cell, colNumber) => {
      if (colNumber > offset) {
        cell.border = {
          top: { style: 'thin' },
          left: { style: 'thin' },
          bottom: { style: 'thin' },
          right: { style: 'thin' },
        };
        cell.alignment = { vertical: 'middle', horizontal: 'left' };
      }
    });
  });

  // Totales (en columna I)
  ws.addRow([]);
  const totalRow = ws.addRow([
    ...Array(offset + 7).fill(''),
    'Total General',
    totalGlobal.toFixed(2),
    ivaGlobal.toFixed(2),
  ]);
  totalRow.font = { bold: true };

  // Ajuste de ancho de columnas
  const colStart = offset + 1;

  for (let i = 0; i < headers.length; i++) {
    const colIndex = colStart + i;
    const headerText = headers[i];
  
    if (headerText === 'Fecha Emisión' || headerText === 'Nombre Receptor') {
      ws.getColumn(colIndex).width = 28;
    } else if (headerText === 'Descripción') {
      ws.getColumn(colIndex).width = 40;
    } else {
      ws.getColumn(colIndex).width = 14;
    }
  }
  

  const buffer = await wb.xlsx.writeBuffer();
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', 'attachment; filename="reporte.xlsx"');
  res.send(Buffer.from(buffer));
}
