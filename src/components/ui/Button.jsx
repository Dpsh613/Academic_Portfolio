import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { ArrowUpRight, ExternalLink } from "lucide-react";

// This decides whether to render a <Link>, <a>, or <button> based on props
const ButtonWrapper = ({
  to,
  href,
  onClick,
  children,
  className,
  ...props
}) => {
  if (to)
    return (
      <Link to={to} className={className} {...props}>
        {children}
      </Link>
    );
  if (href)
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  return (
    <button onClick={onClick} className={className} {...props}>
      {children}
    </button>
  );
};

// BUTTON 1: Hero Primary (Gradient)
export const HeroPrimary = (props) => (
  <ButtonWrapper
    {...props}
    className={`bg-heading-gradient w-60 text-theme-dark px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-heading-gradient-hover hover:-translate-y-1 hover:shadow-theme-border transition-all duration-300 ease-in-out rounded-sm inline-block text-center ${props.className}`}
  >
    {props.children}
  </ButtonWrapper>
);

// BUTTON 2: Secondary Border (Yellow Border)
export const SecondaryBorder = (props) => (
  <ButtonWrapper
    {...props}
    className={`px-8 py-4 border border-theme-accent text-white text-fluid-p font-bold uppercase tracking-[0.2em] hover:bg-heading-gradient hover:text-black transition-all duration-300 flex items-center gap-4 w-fit ${props.className}`}
  >
    {props.children}
    <MdOutlineArrowRightAlt size={30} className="text-current" />
  </ButtonWrapper>
);

// BUTTON 3: Text Link (Inline with Icon)
export const TextLink = (props) => (
  <ButtonWrapper
    {...props}
    className={`inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-theme-text hover:text-yellow-400 transition-colors group/link ${props.className}`}
  >
    {props.children}
    <ExternalLink
      size={14}
      className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
    />
  </ButtonWrapper>
);

// BUTTON 4: Rounded Sweep
export const RoundSweep = (props) => (
  <ButtonWrapper
    {...props}
    className={`group relative inline-flex items-center gap-3 bg-theme-dark text-white px-8 py-4 rounded-full font-medium tracking-wide overflow-hidden hover:shadow-[0_0_20px_rgba(250,204,21,0.3)] transition-all duration-300 w-fit ${props.className}`}
  >
    <div className="absolute inset-0 bg-yellow-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
    <span className="relative z-10 group-hover:text-stone-900 transition-colors duration-300">
      {props.children}
    </span>
    <ArrowUpRight className="w-4 h-4 relative z-10 group-hover:text-stone-900 group-hover:translate-x-1 transition-all duration-300" />
  </ButtonWrapper>
);

// BUTTON 5: Mono Action (Smallest)
export const MonoLink = (props) => (
  <ButtonWrapper
    {...props}
    className={`shrink-0 text-xs font-mono uppercase tracking-widest text-theme-accent hover:text-yellow-200 transition-colors flex items-center gap-1 ${props.className}`}
  >
    {props.children} <ArrowUpRight className="w-3 h-3" />
  </ButtonWrapper>
);
