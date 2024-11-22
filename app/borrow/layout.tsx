export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col justify-center gap-4 py-8 md:py-10">
      <div className="block w-100 text-center justify-center">{children}</div>
    </section>
  );
}
