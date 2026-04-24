import type { BlockProps } from "@/blocks/types";
export default function Dividers087(props: BlockProps) {
  const { theme } = props;
  return (
    <section style={{ backgroundColor: theme?.background }}>
      <svg viewBox="0 0 1440 60" className="w-full h-10" preserveAspectRatio="none">
        <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,25 1440,30 L1440,60 L0,60 Z" fill={theme?.accent ?? "#f8fafc"} />
      </svg>
    </section>
  );
}
