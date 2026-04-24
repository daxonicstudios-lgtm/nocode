import type { BlockProps } from "@/blocks/types";
export default function EcomStores053(props: BlockProps) {
  const { theme, heading = "Store locator section", subheading = "Manage your store locator section" } = props;
  return (
    <section style={{ backgroundColor: theme?.background, color: theme?.foreground }} className="px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold">{heading}</h2>
        <p className="mt-3 opacity-60">{subheading}</p>
        <div className="mt-8 rounded-2xl border p-8" style={{ borderColor: theme?.secondary ?? "#e5e7eb" }}>
          <p className="text-sm opacity-40 text-center">Store locator section content area</p>
        </div>
      </div>
    </section>
  );
}
