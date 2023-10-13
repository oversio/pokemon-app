import Link, { LinkProps } from "next/link";

interface IconLinkProps extends LinkProps {
  children: React.ReactNode | React.ReactNode[];
}

export function IconLink({ children, href }: IconLinkProps) {
  return (
    <Link href={href} className=" flex justify-center items-center w-9 h-9 rounded-full hover:bg-teal-100">
      {children}
    </Link>
  );
}
