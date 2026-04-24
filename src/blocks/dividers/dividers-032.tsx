import type { BlockProps } from "@/blocks/types";
export default function Dividers032(props: BlockProps) {
  const { theme } = props;
  return (
    <section style={{ backgroundColor: theme?.background }} className="px-4 py-8">
      <div className="max-w-5xl mx-auto"><hr style={{ borderColor: theme?.secondary ?? "#e5e7eb" }} /></div>
    </section>
  );
}
