export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center">
      <div className="inline-block text-center">{children}</div>
    </section>
  );
}
