interface NavButtonProps {
  text: string;
  onClick: () => void;
  isActive: boolean;
}

export function NavButtonDesktop({ text, onClick, isActive }: NavButtonProps) {
  return (
    <div
     className="hidden md:block mr-5 text-violet-100/60 hover:text-violet-200 cursor-pointer"
    >
      {text}
    </div>
  );
}

export function NavButtonMobile({ text, onClick, isActive }: NavButtonProps) {
  return (
    <div
     className="md:hidden mt-5 block text-violet-100/60 hover:text-violet-200 cursor-pointer"
    >
      {text}
    </div>
  );
}
