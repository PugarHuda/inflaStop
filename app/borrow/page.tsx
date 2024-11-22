"use client";

import React from "react";
import { title } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter, Divider, Input, Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue, } from "@nextui-org/react";
import { users } from "./data";
import { WagmiProvider, useWaitForTransactionReceipt, useWriteContract, useReadContract } from 'wagmi';
import { erc20Abi } from "viem";
import VaultABI from '../abis/VaultABI.json';

export default function DocsPage() {

  const { data: balance } = useReadContract({
    abi: erc20Abi,
    address: '0x4c9EDD5852cd905f086C759E8383e09bff1E68B3',
    functionName: 'balanceOf',
    args: ['0x88a1493366D48225fc3cEFbdae9eBb23E323Ade3'],
  });

  const {
    data: approvalHash,
    isPending: isApprovalPending,
    writeContract: writeApproval
  } = useWriteContract();

  const handleApproval = async () => {
    await writeApproval({
      abi: erc20Abi,
      address: '0x4c9edd5852cd905f086c759e8383e09bff1e68b3',
      functionName: 'approve',
      args: ['0xF62eEc897fa5ef36a957702AA4a45B58fE8Fe312', BigInt(1000)],
    });
  };

  const {
    isLoading: isApprovalLoading, status: statusApproval
  } = useWaitForTransactionReceipt({
    hash: approvalHash,
  });

  const {
    data: depositHash,
    isPending: isDepositPending,
    writeContract: writeDeposit
  } = useWriteContract();

  const handleDeposit = async () => {
    await writeDeposit({
      abi: VaultABI,
      address: '0xF62eEc897fa5ef36a957702AA4a45B58fE8Fe312',
      functionName: 'deposit',
      args: [BigInt(1000)],
    });
  };

  const {
    isLoading: isDepositLoading, status: statusDeposit
  } = useWaitForTransactionReceipt({
    hash: depositHash,
  });

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <div>
            <Card className="w-100">
              <CardHeader className="flex gap-3">
                <div className="flex flex-col text-start">
                  <p className="text-md">Deposit</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <Input type="number" label="Amount" placeholder="0.00" />
                <div className="flex gap-2">
                  <div className="p-4 flex-grow">
                    <p>AICoin</p>
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
          <div>
            <Card className="w-100">
              <CardHeader className="flex gap-3">
                <div className="flex flex-col text-start">
                  <p className="text-md">Borrow</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <Input type="number" label="Amount" placeholder="0.00" />
                <div className="flex gap-2">
                  <div className="p-4 flex-grow">
                    <p>AICoin</p>
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
          <div className="col-span-2">
            <Card className="w-100">
              <CardHeader className="flex gap-3">
                <div className="flex flex-col text-start">
                  <p className="text-md">Deposit</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody>
                <Input type="number" label="Amount" placeholder="0.00" />
                <div className="flex gap-2">
                  <div className="p-4 flex-grow">
                    <p>AICoin</p>
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
            <Button className="mt-3" fullWidth size="md" color="primary" variant="shadow">
              Borrow
            </Button>
          </div>
        </div>
        <div className="text-start">
          <div>Balance: {balance?.toString()}</div>
          <Button onClick={() => handleApproval()} className="mt-4" fullWidth size="md" color="primary" variant="shadow">
            Approve
          </Button>
          <div className="mt-4">Pending: {isApprovalPending ? 'Sedang approve' : 'tidak sedang approve'}</div>
          <div>Approval Hash: {approvalHash}</div>
          { isApprovalLoading ? <div>Status: {statusApproval}</div> : null }
          <div>Status: {statusApproval}</div>
          <Button onClick={() => handleDeposit()} className="mt-4" fullWidth size="md" color="primary" variant="shadow">
            Deposit
          </Button>
          <div className="mt-4">Pending: {isDepositPending ? 'Sedang deposit' : 'tidak sedang deposit'}</div>
          <div>Deposit Hash: {depositHash}</div>
          { isDepositLoading ? <div>Status: {statusDeposit}</div> : null }
          <div>Status: {statusDeposit}</div>
        </div>
      </div>
    </div>
  );
}
