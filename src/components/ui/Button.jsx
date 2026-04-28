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
    className={`
      /* 1. Base Styles & Gradient */
      bg-text-secondary w-60 text-theme-black px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-sm inline-block text-center
      
      /* 2. Hover Effects (Using brightness instead of swapping gradients) */
      hover:brightness-110 hover:shadow-[0_10px_20px_rgba(250,250,51,0.2)] hover:-translate-y-1
      
      /* 3. The Smooth Transition (Changed to 300ms and ease-out) */
      transition-all duration-300 ease-out
      
      ${props.className}
    `}
  >
    {props.children}
  </ButtonWrapper>
);
// BUTTON 2: Secondary Border (Yellow Border)
export const SecondaryBorder = (props) => (
  <ButtonWrapper
    {...props}
    className={`px-8 py-4 border border-theme-accent text-white text-fluid-p font-bold uppercase tracking-[0.2em] hover:bg-theme-accent-light hover:text-black transition-all duration-300 flex items-center gap-4 w-fit ${props.className}`}
  >
    {props.children}
    <MdOutlineArrowRightAlt size={30} className="text-current" />
  </ButtonWrapper>
);

// BUTTON 3: Text Link (Inline with Icon)
export const TextLink = (props) => (
  <ButtonWrapper
    {...props}
    className={`inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-theme-neutral-light hover:text-yellow-400 transition-colors group/link ${props.className}`}
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
