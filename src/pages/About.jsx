import React from 'react';

export default function About() {
  return (
    <div className="section-container max-w-4xl py-16">
      {/* Hero */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How FINMENT Started</h1>
        <p className="text-xl text-gray-600">A fridge that broke, an apprenticeship, and six years of fixing things in Windhoek.</p>
      </div>

      {/* Main story */}
      <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">2018: A Broken Fridge Started It All</h2>
          <p>
            My dad's fridge died on a Friday. The repair guy charged him N$800 to replace one part. A part that cost N$120. I was annoyed on his behalf.
          </p>
          <p>
            I decided right then: I'd learn how to fix fridges properly, and I wouldn't rip people off like that. I did a 6-month apprenticeship with a technician in Windhoek, learned plumbing and AC work on the side, and started FINMENT out of a garage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Why FINMENT Works Differently</h2>
          <p>
            Most repair shops work like this: You call. They charge you to "diagnose" the problem (which is just them looking at it). Then they give you a quote. Then you wait. Then if you say yes, they maybe come in a week.
          </p>
          <p>
            That's stupid. Here's how we work:
          </p>
          <ul className="space-y-2 my-4">
            <li>• <strong>We tell you what's wrong over the phone.</strong> No BS diagnostic fee.</li>
            <li>• <strong>We quote a price.</strong> That's the price. No hidden fees.</li>
            <li>• <strong>We come same day if we can.</strong> Usually we can.</li>
            <li>• <strong>We fix it right.</strong> Everything we repair has a 2-year warranty. If it breaks again, we fix it free.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">2,000+ Repairs Later</h2>
          <p>
            Since 2018, we've fixed over 2,000 fridges, geysers, washing machines, ACs, and other appliances across Windhoek. 
          </p>
          <p>
            We've learned:
          </p>
          <ul className="space-y-2 my-4">
            <li>• Most fridge problems are the same 5 things. We fix them fast.</li>
            <li>• Geysers break at night or on weekends. We answer the phone.</li>
            <li>• People don't want to spend money on repairs. But they have to. So we keep prices fair.</li>
            <li>• A lot of repair shops in Windhoek are cowboys. They give us a bad name.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">What We Believe</h2>
          <p>
            Repair work is honest work. You fix something, you don't overcharge, the customer trusts you, they call you again next time something breaks. That's it.
          </p>
          <p>
            I'm not trying to upsell anyone. If your fridge can be fixed, we fix it. If it's dying and replacement is cheaper, we'll tell you that too. 
          </p>
          <p>
            We've turned down jobs where customers insisted on repairs we knew wouldn't last. Not worth it. They'd just come back angrier.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">The Team</h2>
          <p>
            It's me (Martin), two technicians I trained up, and a guy who handles calls and scheduling. We're all in Windhoek. You'll actually talk to one of us when you call — not a call centre overseas.
          </p>
          <p>
            The technicians are good. I wouldn't have trained them if they weren't. They're not just turning screws — they actually understand how this stuff works. That matters when your fridge costs N$8,000.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Right Now</h2>
          <p>
            We're expanding. Opening a second office in Keetmanshoop next year. Still keeping it small though — I want to stay hands-on. The day we become a big impersonal repair chain is the day we sell it off.
          </p>
          <p>
            If you've got a broken appliance, call us. If we can fix it today, we will. If not, we'll be honest about timing. No nonsense.
          </p>
        </section>
      </div>

      {/* CTA */}
      <div className="mt-16 p-8 bg-blue-50 border border-blue-200 rounded-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Got a broken appliance?</h3>
        <p className="text-gray-600 mb-4">
          Call us. Even if you just want to know what's wrong before you commit to a repair. We don't charge for that.
        </p>
        <a 
          href="tel:+264812095555" 
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          📞 +264 812 0955
        </a>
      </div>
    </div>
  );
}
