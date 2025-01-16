import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Issue } from "@prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
// import delay from "delay";

interface Props {
  params: Promise<{ id: string }>;
  issue: Issue;
}

export default async function IssueDeatailPage({ params }: Props) {
  const { id } = await params;

  // if (typeof id !== "number") notFound();

  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  // await delay(2000);

  if (!issue) notFound();

  return (
    <div>
      <Heading as="h1">{issue.title}</Heading>
      <Flex gap="5" my="2">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose" mt="4">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </div>
  );
}
