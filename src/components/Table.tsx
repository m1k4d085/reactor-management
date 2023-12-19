import { ReactNode } from "react";
import {
  ThemeType,
  getBgColor,
  getDivideXColor,
  getDivideYColor,
  getTableRowBgColor,
  getTableStyle,
} from "../util";
import { useTheme } from "../hooks/useTheme";

export interface ColumnProps<T> {
  key: string;
  title: string | ReactNode;
  render?: (item: T) => ReactNode;
}

export type TableProps<T> = {
  colorType?: ThemeType;
  columns: Array<ColumnProps<T>>;
  data?: T[] | null;
  onRowClick?: (item: T) => void;
};

function Table<T>({ colorType, data, columns, onRowClick }: TableProps<T>) {
  const theme = useTheme();
  const headers = columns.map((column, index) => {
    return (
      <th key={`headCell-${index}`} scope="col" className="px-6 py-4 font-bold">
        {column.title}
      </th>
    );
  });

  const rows = !data?.length ? (
    <tr>
      <td colSpan={columns.length} className="text-center px-6 py-3">
        Nessun dato
      </td>
    </tr>
  ) : (
    data?.map((row, index) => {
      return (
        <tr
          key={`row-${index}`}
          className={`${getDivideXColor(
            colorType || theme?.themeType || "primary"
          )} ${getTableRowBgColor(
            colorType || theme?.themeType || "primary",
            !!onRowClick
          )}`}
        >
          {columns.map((column, index2) => {
            const value = column.render
              ? column.render(row as T)
              : (row[column.key as keyof typeof row] as string);

            return (
              <td
                key={`cell-${index2}`}
                className="px-6 py-3 whitespace-nowrap text-right"
                onClick={() => !column.render && onRowClick?.(row)}
              >
                {value}
              </td>
            );
          })}
        </tr>
      );
    })
  );

  return (
    <div>
      <table
        className={getTableStyle(colorType || theme?.themeType || "primary")}
      >
        <thead
          className={`uppercase ${getBgColor(
            colorType || theme?.themeType || "primary"
          )}`}
        >
          <tr
            className={getDivideXColor(
              colorType || theme?.themeType || "primary"
            )}
          >
            {headers}
          </tr>
        </thead>

        <tbody
          className={getDivideYColor(
            colorType || theme?.themeType || "primary"
          )}
        >
          {rows}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
