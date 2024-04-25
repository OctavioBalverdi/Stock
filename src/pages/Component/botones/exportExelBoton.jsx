import React from 'react'
import * as XLSX from 'xlsx';
import { Button } from 'keep-react'
import {FileXls } from 'phosphor-react';

export function ExcelExporter({ data, fileName }) {
    const exportToExcel = () => {
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.json_to_sheet(data);
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      XLSX.writeFile(workbook, `${fileName}.xlsx`);
    };
  
    return (
      <Button type="outlineGray" size="sm" onClick={exportToExcel}>
        <span className="pr-2">
          <FileXls size={32} color="#134fc9" />
        </span>
        Excel
      </Button>
    );
  }