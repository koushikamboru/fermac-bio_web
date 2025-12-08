type Director = {
  name: string;
  title: string;
  profile: string;
  expertise: string[];
};

const directors: Director[] = [
  {
    name: 'Mr. Suneel Kumar Battula',
    title: 'Director & CEO',
    profile:
      'Over 25 years of experience in fermentation technology across India and overseas. Founder of Bransun Labs. Leads R&D and key strategic partnerships for fermentation‑based APIs.',
    expertise: ['Fermentation Process Development', 'API Innovation', 'Vitamins & Statins R&D'],
  },
  {
    name: 'Mr. Jeyamurga Prakash',
    title: 'Director',
    profile:
      'Strong pharma operations leader. Former Head of Operations. Expert in large‑scale API manufacturing and lean management.',
    expertise: ['Operations', 'Process Optimization', 'Team Leadership', 'Cost Control'],
  },
  {
    name: 'Mr. B. Shivakumar',
    title: 'Director',
    profile:
      '30+ years in pharma sales, marketing & global business leadership. Founder of Shiva’s Farma Casa, leading API marketing in Latin America.',
    expertise: ['Global Marketing', 'Brand Strategy', 'Pharma Sales'],
  },
  {
    name: 'Mr. Brahmaji Valiveti',
    title: 'Director',
    profile:
      'Renowned pharma entrepreneur with major leadership roles across multiple global pharma companies including Verdant Pharma, Ricon Pharma, Ingenus Pharmaceuticals and more.',
    expertise: ['Pharma Strategy', 'Global Expansions', 'High‑Value API Businesses'],
  },
];

export default function DirectorsGrid() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {directors.map((d) => (
            <div key={d.name} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-400 text-2xl mb-4 mx-auto">🧑‍🔬</div>
              <h3 className="text-center font-semibold text-gray-900">{d.name}</h3>
              <p className="text-center text-sm text-gray-500 mb-4">{d.title}</p>
              <div className="text-sm text-gray-700 leading-relaxed mb-4">{d.profile}</div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Expertise:</h4>
                <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  {d.expertise.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
