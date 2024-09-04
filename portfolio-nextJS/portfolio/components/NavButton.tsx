import Link from "next/link";

interface NavButtonProps {
  text: string;
  onClick: () => void;
  isActive: boolean;
}

export function NavButtonDesktop({ text, onClick, isActive }: NavButtonProps) {
  return (
    <Link href={`#${text}`}>
    <div
     className="hidden md:block mr-5 text-violet-100/60 hover:text-violet-200 cursor-pointer"
    >
      {text}
    </div>
    </Link>
  );
}

export function NavButtonMobile({ text, onClick, isActive }: NavButtonProps) {
  return (
    <Link href={`#${text}Mobile`}>
    <div
    onClick={onClick}
     className="md:hidden mt-5 block text-violet-100/60 hover:text-violet-200 cursor-pointer"
    >
      {text}
    </div>
    </Link>
  );
}
