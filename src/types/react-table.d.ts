/**
 * This file is used to extend the types of react-table
 * Must re-export type RowData as the same as default export from react-table
 * to make the module '@tanstack/table-core' extension works
 */

export type RowData = unknown | object | any[]
declare module '@tanstack/table-core' {
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: any) => void
  }
}
