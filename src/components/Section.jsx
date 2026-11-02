export default function Section({ id, title, children, bg = "bg-transparent" }) {
  return (
    <section id={id} className={`py-20 ${bg}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {title && (
          <h2 className="text-3xl font-bold text-corporate mb-10 border-b-2 border-corporate-primary inline-block pb-2">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}