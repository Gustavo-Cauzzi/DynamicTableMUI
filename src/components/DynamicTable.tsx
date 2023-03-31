import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { IconButton, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import React, { Fragment, useState } from "react";

interface DynamicRowConfiguration<T = Record<string, string | number>> {
  group: string;
  result: T;
  inner?: DynamicRowConfiguration<T>[];
}

interface DynamicTableProps {
  config: DynamicRowConfiguration[];
}

const DynamicTable: React.FC<DynamicTableProps> = ({ config }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Group</TableCell>
          {Object.keys(config[0].result).map((columnName) => (
            <TableCell key={columnName}>{columnName} </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {config.map((rowConfig) => (
          <DynamicTableRow config={rowConfig} key={rowConfig.group} />
        ))}
      </TableBody>
    </Table>
  );
};

interface DynamicTableRowProps {
  config: DynamicRowConfiguration;
  level?: number;
}

const DynamicTableRow: React.FC<DynamicTableRowProps> = ({ config, level = 1 }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell style={{ paddingLeft: `${16 * level + (!config.inner ? 34 : 0)}px` }}>
          {config.inner && (
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </IconButton>
          )}
          {config.group}
        </TableCell>
        {Object.values(config.result).map((columnName) => (
          <Fragment key={columnName}>
            <TableCell>{columnName}</TableCell>
          </Fragment>
        ))}
      </TableRow>
      {config.inner &&
        open &&
        config.inner.map((rowConfig) => <DynamicTableRow level={level + 1} config={rowConfig} key={rowConfig.group} />)}
    </>
  );
};

export default DynamicTable;
