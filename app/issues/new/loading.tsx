import { Skeleton } from "@/app/components";
import { Box } from "@radix-ui/themes";

export default function LoadingNewIssuePage() {
  return (
    <Box>
      <Skeleton />
      <Skeleton height="20rem" />
    </Box>
  );
}
