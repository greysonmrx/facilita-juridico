import { tv } from "tailwind-variants";

const variants = tv({
  base: "w-full relative flex items-center justify-center rounded border-none cursor-pointer transition-all duration-300 ease disabled:cursor-not-allowed",
  variants: {
    size: {
      sm: "text-xs space-x-1.5 font-bold py-1.5 px-3",
      md: "text-sm font-bold py-2.5 px-3.5 space-x-2 leading-4",
      lg: "py-3.5 px-5 max-h-12 space-x-3 text-base font-bold",
    },
    variant: {
      primary:
        "bg-blue-500 text-white focus-visible:shadow-[0_0_0_5px] focus-visible:outline focus-visible:shadow-blue-300 focus-visible:outline-2 focus-visible:outline-blue-50 hover:bg-blue-450 disabled:bg-gray-100 active:bg-blue-400",
      outline:
        "bg-white border border-solid border-gray-200 text-blue-500 focus-visible:shadow-[0_0_0_5px] focus-visible:shadow-blue-300 hover:bg-gray-50 active:bg-gray-100 disabled:text-gray-250 disabled:border-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-50",
    },
  },
});

export { variants };
