import Link from 'next/link';

export default function Products() {
  const products = [
    {
      name: "Fermamin Pro",
      description: "Advanced Penicillin-Based Antibiotic Manufactured Through Innovative Fermentation Technology Against Gram-Positive Bacteria.",
      features: [
        "Advanced Formulation",
        "High Bioavailability",
        "Extended Shelf Life",
        "Enhanced Stability",
        "WHO Approved"
      ],
      applications: "Respiratory Infections, Skin Infections, Urinary Tract Infections",
      icon: "🧬"
    },
    {
      name: "BioStrep Advanced",
      description: "Next-Generation Streptomycin Derivative Produced Using Our Proprietary Fermentation Process, Particularly Effective In Respiratory Bacterial Studies Effectively.",
      features: [
        "Broad Spectrum Activity",
        "Low Toxicity Profile",
        "Injectable Formulation",
        "Fast-Acting Relief"
      ],
      applications: "Tuberculosis Treatment, Severe Bacterial Infections, Hospital-Acquired Infections",
      icon: "💊"
    },
    {
      name: "TetraCure Elite",
      description: "Premium Tetracycline Antibiotic Manufactured With Minimal Bacterial Resistance And High Range Of Bacterial Infections.",
      features: [
        "Extended Coverage",
        "Enhanced Stability",
        "Multiple Formulations",
        "Minimal Side Effects"
      ],
      applications: "Acne Treatment, Respiratory Infections, Sexually Transmitted Infections",
      icon: "🧪"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-cyan-500">Product</span> Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover Our Range Of High-Quality Antibiotics, Each Manufactured Using Advanced Fermentation 
            Technology And Rigorous Quality Control Processes.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow"
            >
              {/* Product Header */}
              <div className="bg-gradient-to-r from-cyan-50 to-teal-50 p-8 text-center">
                <div className="text-6xl mb-4">{product.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  {product.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <svg className="w-5 h-5 text-cyan-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-2">Applications:</h4>
                  <p className="text-sm text-gray-600">{product.applications}</p>
                </div>

                <Link 
                  href="#contact"
                  className="block w-full bg-cyan-500 hover:bg-cyan-600 text-white text-center font-semibold py-3 rounded-lg transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
