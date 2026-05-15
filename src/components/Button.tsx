import Link from 'next/link';

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'primary' | 'ghost';
  children: React.ReactNode;
}

export default function Button({ href, variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseClasses = "inline-flex items-center gap-[10px] px-[26px] py-4 rounded-none font-space font-semibold text-[15px] border border-transparent transition-all duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] group cursor-pointer";
  
  const variants = {
    primary: "bg-yellow text-black hover:bg-yellow-hover hover:-translate-y-0.5",
    ghost: "bg-transparent text-white border-border-strong hover:border-white hover:bg-white/5 hover:-translate-y-0.5",
  };

  return (
    <Link 
      href={href} 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export function ButtonArrow() {
  return (
    <span className="inline-block transition-transform duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1" aria-hidden="true">
      →
    </span>
  );
}
