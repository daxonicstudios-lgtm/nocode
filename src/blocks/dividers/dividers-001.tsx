import type { BlockProps } from "@/blocks/types";

export default function Dividers001(props: BlockProps) {
  const { theme } = props;

  return (
    <div className="px-5 py-8" style={{ backgroundColor: theme?.background }}>
      <div className="max-w-6xl mx-auto">
        <hr className="border-0 h-px" style={{ backgroundColor: theme?.secondary ?? "#e5e7eb" }} />
      </div>
    </div>
  );
}
