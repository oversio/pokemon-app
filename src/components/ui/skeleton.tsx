import { cn } from "@/lib/utils";

export const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <span className={cn("animate-pulse rounded-md bg-gray-200 block", className)} {...props} />;
};
