import { Box, Card, Flex } from "@radix-ui/themes";
import { Skeleton } from "@/app/components";

export default function LoadingIssueDetailPage() {
  return (
    <Box>
      <Skeleton className="max-w-xl" />
      <Flex gap="5" my="2">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose" mt="4">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
}
