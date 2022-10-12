import React from 'react'
import { useTable } from 'react-table'
import { styled } from '../../../stitches.config'
type Props = {
  data: Array<any>
  columns: {
    Header: string
    accessor: string
  }[]
}
export function List({ data, columns }: Props) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data })

  return (
    <Table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={index}>
            {headerGroup.headers.map((column, index) => (
              <TableHeader key={index} {...column.getHeaderProps()}>
                {column.render('Header')}
              </TableHeader>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()} key={index}>
              {row.cells.map((cell, index) => {
                return (
                  <TableItem key={index} {...cell.getCellProps()} style={{}}>
                    {cell.render('Cell')}
                  </TableItem>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

const Table = styled('table', {
  width: '90%',
  marginTop: '2rem',
  marginLeft: '2rem',
  fontFamily: 'Mulish',
  fontWeight: 700,
  fontSize: 14,
  color: '$text_gray',
  textAlign: 'left'
})

const TableHeader = styled('th', {
  textAlign: 'left',
  height: 30
})

const TableItem = styled('td', {
  color: 'Black',
  height: 40,
  borderTop: '1px solid',
  borderColor: '#DFE0EB'
})
