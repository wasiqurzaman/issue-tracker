import prisma from "@/prisma/client";
import IssueActions from "./IssueActions";
import { Status } from "@prisma/client";
import Pagination from "../components/Pagination";
import IssueTable, { columnNames, IssueQuery } from "./IssueTable";
import { Flex } from "@radix-ui/themes";

interface Props {
  searchParams: Promise<IssueQuery>;
}

export default async function IssuesPage({ searchParams }: Props) {
  const { status, orderBy, page } = await searchParams;

  const pageNum = parseInt(page) || 1;
  const pageSize = 10;

  const statuses = Object.values(Status);
  const validStatus = statuses.includes(status) ? status : undefined;
  const validOrderBy = columnNames.includes(orderBy)
    ? { [orderBy]: "asc" }
    : undefined;

  const issues = await prisma.issue.findMany({
    where: {
      status: validStatus,
    },
    orderBy: validOrderBy,
    skip: (pageNum - 1) * pageSize,
    take: pageSize,
  });

  const issueCount = await prisma.issue.count({
    where: { status: validStatus },
  });

  return (
    <Flex direction="column" gap="4">
      <IssueActions />
      <IssueTable searchParams={searchParams} issues={issues} />
      <Pagination
        pageSize={pageSize}
        currentPage={pageNum}
        itemCount={issueCount}
      />
    </Flex>
  );
}
