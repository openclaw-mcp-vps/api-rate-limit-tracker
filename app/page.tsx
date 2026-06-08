export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium tracking-wide uppercase">
          API Monitoring
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track API Rate Limits{" "}
          <span className="text-[#58a6ff]">Before They Break You</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Monitor rate limit usage across multiple APIs in real time. Get webhook
          alerts before you hit limits and keep your services running smoothly.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Get Started — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No lock-in.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            "Multi-API polling",
            "Rate header parsing",
            "Webhook alerts",
            "Usage dashboards",
            "Threshold config",
          ].map((f) => (
            <span
              key={f}
              className="px-4 py-1.5 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]"
            >
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-medium uppercase tracking-wide mb-2">
            Pro Plan
          </p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#6e7681] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited API endpoints",
              "Polling every 60 seconds",
              "Webhook & email alerts",
              "30-day usage history",
              "Priority support",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors duration-150"
          >
            Subscribe Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which APIs does it support?",
              a: "Any REST API that returns standard rate limit headers (X-RateLimit-*, Retry-After). Works with GitHub, Stripe, Twilio, OpenAI, and more.",
            },
            {
              q: "How do alerts work?",
              a: "Configure a usage threshold (e.g. 80%). When any tracked API crosses it, we fire a webhook to your Slack, PagerDuty, or any HTTP endpoint.",
            },
            {
              q: "Is my API key safe?",
              a: "Keys are stored encrypted at rest and never logged. We only use them to make the polling requests you configure.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-5 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} API Rate Limit Tracker. All rights reserved.
      </footer>
    </main>
  );
}
