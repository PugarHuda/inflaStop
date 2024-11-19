"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  getKeyValue,
} from "@nextui-org/react";
import { users } from "./data";

import { title } from "@/components/primitives";

export default function PricingPage() {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);

  return (
    <div>
      <h1 className={title()}>Proof</h1>
      <div className="w-100 mt-10">
        <Table
          aria-label="Example static collection table"
          bottomContent={
            <div className="flex w-full justify-center">
              <Pagination
                isCompact
                showControls
                showShadow
                color="secondary"
                page={page}
                total={pages}
                onChange={(page) => setPage(page)}
              />
            </div>
          }
          className="w-100"
        >
          <TableHeader>
            <TableColumn>ID</TableColumn>
            <TableColumn>Block Timestamp</TableColumn>
            <TableColumn>User</TableColumn>
            <TableColumn>Status</TableColumn>
            <TableColumn>Transaction Hash</TableColumn>
            <TableColumn>Requested Amount</TableColumn>
            <TableColumn>Real World Amount</TableColumn>
            <TableColumn>Block Number</TableColumn>
            <TableColumn>Channel Account</TableColumn>
            <TableColumn>Channel ID</TableColumn>
            <TableColumn>Fill Block Number</TableColumn>
            <TableColumn>Fill Block Timestamp</TableColumn>
            <TableColumn>Fill Transaction Hash</TableColumn>
            <TableColumn>Proof</TableColumn>
            <TableColumn>Receiver</TableColumn>
            <TableColumn>Reclaim Proof</TableColumn>
          </TableHeader>
          <TableBody items={items}>
            {(item) => (
              <TableRow key={item.name}>
                {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
