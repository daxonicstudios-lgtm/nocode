import type { BlockProps } from "@/blocks/types";

export default function Dividers003(props: BlockProps) {
  const { theme } = props;

  return (
    <div className="relative" style={{ backgroundColor: theme?.background }}>
      <svg className="w-full h-16 md:h-24" viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,50 C240,100 480,0 720,50 C960,100 1200,0 1440,50 L1440,100 L0,100 Z"
          fill={theme?.secondary ?? "#f3f4f6"}
        />
      </svg>
    </div>
  );
}
