import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const data = [
    {
      q: "Kitna time lagta hai painting me?",
      a: "Room size ke hisab se 1-3 din lagte hain.",
    },
    {
      q: "Material include hota hai?",
      a: "Material optional hai, aap choose kar sakte ho.",
    },
    {
      q: "Payment kaise hota hai?",
      a: "Advance + completion basis pe payment hota hai.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 bg-white">

      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-semibold text-center text-slate-900">
          FAQs
        </h2>

        <div className="mt-10 space-y-4">
          {data.map((item, i) => (
            <div
              key={i}
              className="border border-slate-200 rounded-xl p-4 cursor-pointer"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <h3 className="font-medium text-slate-900">
                {item.q}
              </h3>

              {open === i && (
                <p className="mt-2 text-sm text-slate-600">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}