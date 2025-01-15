import prisma from "@/prisma/client";
import { Issue } from "@prisma/client";
import { notFound } from "next/navigation";

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

  if (!issue) notFound();

  return (
    <div>
      <p>{issue.title}</p>
      <p>{issue.description}</p>
      <p>{issue.status}</p>
      <p>{issue.createdAt.toDateString()}</p>
    </div>
  );
}
