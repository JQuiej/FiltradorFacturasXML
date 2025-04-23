'use client';
import React, { useState } from 'react';

export default function Home() {
  const [files, setFiles] = useState<FileList | null>(null);
  const [combinedData, setCombinedData] = useState<any[]>([]);
  const [log, setLog] = useState<string[]>([]);
  const [mostrarIVA, setMostrarIVA] = useState(true);
  const [tipoFiltro, setTipoFiltro] = useState<'Todos' | 'B' | 'S'>('Todos');
  const [fechaFiltro, setFechaFiltro] = useState('');
  const [ordenTotal, setOrdenTotal] = useState<'none' | 'asc' | 'desc'>('none');

  const filteredData = combinedData
    .filter(item =>
      tipoFiltro === 'Todos' ? true : item.tipo === tipoFiltro
    )
    .filter(item => {
      if (!fechaFiltro) return true;
      const xmlDate = item.fechaEmision?.substring(0, 10); // e.g. "2025-04-05"
      const filtro = fechaFiltro.length === 7
        ? xmlDate?.startsWith(fechaFiltro) // e.g. "2025-04"
        : xmlDate === fechaFiltro;         // e.g. "2025-04-05"
      return filtro;
    })
    .sort((a, b) => {
      if (ordenTotal === 'asc') return parseFloat(a.total) - parseFloat(b.total);
      if (ordenTotal === 'desc') return parseFloat(b.total) - parseFloat(a.total);
      return 0;
    });

  async function handleParse() {
    if (!files) return;
    const allData = [];
    const messages = [];

    for (const file of Array.from(files)) {
      const xmlText = await file.text();
      const res = await fetch('/api/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ xml: xmlText })
      });
      const json = await res.json();
      if (json.data.length) {
        allData.push(...json.data);
      }
      messages.push(`📄 ${file.name}: ${json.data.length} ítem(s) válidos${json.errors.length ? ' ⚠️ con errores' : ''}`);
    }

    setCombinedData(allData);
    setLog(messages);
  }

  async function exportExcel() {
    const res = await fetch('/api/export-excel', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: filteredData })
    });
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url;
    a.download = 'facturas_filtradas.xlsx'; a.click();
  }

  async function exportPdf() {
    const res = await fetch('/api/export-pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: filteredData })
    });
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url;
    a.download = 'facturas_filtradas.pdf'; a.click();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-slate-100 p-10 text-gray-800 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Filtrado de Facturas XML</h1>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6 space-y-4">
          <input
            type="file"
            multiple
            accept=".xml"
            onChange={e => setFiles(e.target.files)}
            className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />

          <button
            onClick={handleParse}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-medium shadow"
          >
            Procesar archivos XML
          </button>

          <div className="flex flex-wrap gap-6 items-center">
            <label className="inline-flex items-center gap-2">
              <input type="checkbox" checked={mostrarIVA} onChange={e => setMostrarIVA(e.target.checked)} />
              Mostrar IVA
            </label>

            <label className="inline-flex items-center gap-2">
              Filtrar tipo:
              <select
                className="border rounded px-2 py-1"
                value={tipoFiltro}
                onChange={e => setTipoFiltro(e.target.value as 'Todos' | 'B' | 'S')}
              >
                <option value="Todos">Todos</option>
                <option value="B">Bienes (B)</option>
                <option value="S">Servicios (S)</option>
              </select>
            </label>

            <label className="inline-flex items-center gap-2">
              Fecha emisión:
              <input
                type="text"
                className="border rounded px-2 py-1"
                placeholder="YYYY-MM o YYYY-MM-DD"
                value={fechaFiltro}
                onChange={e => setFechaFiltro(e.target.value)}
              />
            </label>

            <label className="inline-flex items-center gap-2">
              Ordenar por total:
              <select
                className="border rounded px-2 py-1"
                value={ordenTotal}
                onChange={e => setOrdenTotal(e.target.value as 'none' | 'asc' | 'desc')}
              >
                <option value="none">Sin orden</option>
                <option value="asc">Menor a mayor</option>
                <option value="desc">Mayor a menor</option>
              </select>
            </label>
          </div>
        </div>

        {filteredData.length > 0 && (
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">📊 Total de ítems procesados: {filteredData.length}</h2>

            <div className="overflow-x-auto">
              <table className="min-w-full border text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2">Fecha Emisión</th>
                    <th className="border px-4 py-2">Tipo Factura</th>
                    <th className="border px-4 py-2">Receptor</th>
                    <th className="border px-4 py-2">NIT o CUI</th>
                    <th className="border px-4 py-2">Tipo</th>
                    <th className="border px-4 py-2">Descripción</th>
                    <th className="border px-4 py-2">Cantidad</th>
                    <th className="border px-4 py-2">Precio Unitario</th>
                    <th className="border px-4 py-2">Total</th>
                    {mostrarIVA && <th className="border px-4 py-2">IVA</th>}
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="border px-4 py-1 text-center">{item.fechaEmision}</td>
                      <td className="border px-4 py-1 text-center">{item.tipoFactura}</td>
                      <td className="border px-4 py-1">{item.nombreReceptor}</td>
                      <td className="border px-4 py-1 text-center">{item.nitReceptor}</td>
                      <td className="border px-4 py-1 text-center">{item.tipo}</td>
                      <td className="border px-4 py-1">{item.descripcion}</td>
                      <td className="border px-4 py-1 text-center">{item.cantidad}</td>
                      <td className="border px-4 py-1 text-right">Q{item.precioUnitario}</td>
                      <td className="border px-4 py-1 text-right">Q{item.total}</td>
                      {mostrarIVA && (
                        <td className="border px-4 py-1 text-right">Q{item.iva}</td>
                      )}
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="font-bold">
                    <td colSpan={mostrarIVA ? 8 : 7} className="text-right px-4 py-2">Totales:</td>
                    <td className="text-right px-4 py-2">
                      Q{filteredData.reduce((a, b) => a + parseFloat(b.total), 0).toFixed(2)}
                    </td>
                    {mostrarIVA && (
                      <td className="text-right px-4 py-2">
                        Q{filteredData.reduce((a, b) => a + parseFloat(b.iva), 0).toFixed(2)}
                      </td>
                    )}
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="mt-6 flex gap-4 justify-center">
              <button onClick={exportExcel} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow">
                Exportar a Excel
              </button>
              <button onClick={exportPdf} className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded shadow">
                Exportar a PDF
              </button>
            </div>
          </div>
        )}

        {log.length > 0 && (
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h2 className="text-xl font-semibold mb-2">Resumen de procesamiento</h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
              {log.map((msg, idx) => <li key={idx}>{msg}</li>)}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
