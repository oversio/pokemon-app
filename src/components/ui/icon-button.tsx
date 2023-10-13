interface IconButtonProps {
  children: React.ReactNode | React.ReactNode[];
  onClick?: () => void;
}

export function IconButton({ children, onClick }: IconButtonProps) {
  return (
    <button onClick={onClick} className=" flex justify-center items-center w-9 h-9 rounded-full hover:bg-teal-100">
      {children}
    </button>
  );
}
