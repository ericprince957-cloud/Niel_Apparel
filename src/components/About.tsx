import { Award, Scissors, Heart, Clock } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Scissors,
      title: 'Custom Tailoring',
      description: 'Every piece is made-to-measure, ensuring a perfect fit for your body type.'
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We source only the finest fabrics and materials for lasting elegance.'
    },
    {
      icon: Heart,
      title: 'Cultural Heritage',
      description: 'Celebrating African craftsmanship with modern design sensibilities.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We respect your time with reliable delivery schedules.'
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-3">Our Story</p>
            <h2 id="about-heading" className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
              Crafting Elegance,<br />
              <span className="text-gold">One Stitch at a Time</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold mb-8" aria-hidden="true"></div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At Niel's Apparel, we believe fashion is a form of self-expression. Founded with a passion for blending 
              traditional African artistry with contemporary urban aesthetics, we create bespoke pieces that tell your story.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              From custom Agbadas to modern bridal ensembles, each garment is meticulously handcrafted by skilled 
              artisans who understand the importance of detail, quality, and cultural significance.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-semibold rounded-sm hover:bg-gold hover:text-black transition-colors duration-200 text-sm tracking-wide"
            >
              Get in Touch
            </a>
          </div>

          {/* Image / Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-sm border border-gray-100 hover:border-gold/30 transition-colors duration-200"
              >
                <feature.icon className="w-8 h-8 text-gold mb-3" aria-hidden="true" />
                <h3 className="font-semibold text-black mb-2 text-sm">{feature.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
