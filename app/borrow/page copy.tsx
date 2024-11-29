"use client";

import React from "react";
import { title } from "@/components/primitives";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Input,
  Button,
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

export default function DocsPage() {
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
      <div className="w-100 flex justify-center">
        <Card className="min-w-[500px]">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col text-start">
              <p className="text-md">
                Withdraw <strong>INFLASTOP</strong>
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <Input type="number" label="Amount" placeholder="0.00" />
            <div className="flex gap-2">
              <div className="p-4 flex-grow">
                <p>INFLASTOP</p>
                <p className="text-sm opacity-50">Realtime</p>
                <p className="text-sm opacity-50">Rate 1-1</p>
              </div>
              <div className="p-4 flex-grow">
                <p>Available Soon</p>
                <p className="text-sm opacity-50">-</p>
                <p className="text-sm opacity-50">Rate -</p>
              </div>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Est. processing time</p>
              <p className="text-sm text-end">~20 seconds</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Network fee</p>
              <p className="text-sm text-end">-</p>
            </div>
          </CardBody>
          <Divider />
          <CardFooter>
            <Button fullWidth size="md" color="primary" variant="shadow">
              Withdraw
            </Button>
          </CardFooter>
        </Card>
      </div>
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
            <TableColumn>Block Number</TableColumn>
            <TableColumn>Timestamp</TableColumn>
            <TableColumn>Transaction Hash</TableColumn>
            <TableColumn>Ammount</TableColumn>
            <TableColumn>User</TableColumn>
          </TableHeader>
          <TableBody items={items}>
            {(item) => (
              <TableRow key={item.name}>
                {(columnKey) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
