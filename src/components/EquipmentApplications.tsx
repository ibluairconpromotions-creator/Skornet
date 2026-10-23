import React from 'react';
import {
  Snowflake,
  Wind,
  Fan,
  Building,
  Server,
  Droplets,
  Cpu,
  Layers,
} from 'lucide-react';

export const EquipmentApplications: React.FC = () => {
  const equipmentCategories = [
    {
      name: 'Chillers',
      type: 'Centralized Plant Systems',
      icon: Snowflake,
      image: '/images/equipment-chiller.webp',
      fallbackImage: '/images/equipment-chiller.jpg',
      alt: 'Commercial industrial water-cooled and air-cooled chiller system in central mechanical plant room',
      description:
        'Water-cooled and air-cooled centrifugal, screw, and scroll chiller plants powering commercial complexes, hospitals, and industrial facilities.',
      workflows: ['Compressor overhaul logs', 'Chilled water delta-T tracking', 'Refrigerant circuit checks'],
    },
    {
      name: 'VRF / VRV Systems',
      icon: Cpu,
      type: 'Multi-Split Inverter Systems',
      image: '/images/equipment-vrf.webp',
      fallbackImage: '/images/equipment-vrf.jpg',
      alt: 'Commercial rooftop VRF VRV multi-split inverter outdoor condensing units',
      description:
        'Variable Refrigerant Flow and Volume modular installations designed for energy-efficient zoned temperature control in commercial buildings.',
      workflows: ['Branch selector inspections', 'Inverter error code diagnostics', 'Piping leak testing'],
    },
    {
      name: 'Air Handling Units (AHUs)',
      icon: Wind,
      type: 'Central Air Delivery',
      image: '/images/equipment-ahu.webp',
      fallbackImage: '/images/equipment-ahu.jpg',
      alt: 'Heavy-duty commercial air handling unit with ductwork in mechanical equipment room',
      description:
        'Large-scale primary air circulation units conditioning supply air across commercial floors, production halls, and cleanrooms.',
      workflows: ['Filter pressure drop checks', 'Belt alignment & motor testing', 'Chilled water coil flushing'],
    },
    {
      name: 'Fan Coil Units (FCUs)',
      icon: Fan,
      type: 'Terminal Zoned Cooling',
      image: '/images/equipment-fcu.webp',
      fallbackImage: '/images/equipment-fcu.jpg',
      alt: 'Ceiling mounted commercial fan coil unit terminal cooling system with insulated piping',
      description:
        'Individual room terminal conditioning units common across hotels, office cabins, and residential commercial developments.',
      workflows: ['Motor capacitor testing', 'Condensate drain cleaning', 'Thermostat & actuator servicing'],
    },
    {
      name: 'Rooftop Packaged Units',
      icon: Building,
      type: 'Self-Contained Systems',
      image: '/images/equipment-rooftop.webp',
      fallbackImage: '/images/equipment-rooftop.jpg',
      alt: 'Commercial heavy-duty rooftop packaged air conditioning units with duct supply',
      description:
        'Heavy-duty all-in-one unitary rooftop installations serving shopping malls, multiplexes, supermarkets, and warehouses.',
      workflows: ['Refrigerant charge validation', 'Damper actuator calibration', 'Condenser coil cleaning'],
    },
    {
      name: 'Cooling Towers',
      icon: Droplets,
      type: 'Heat Rejection Infrastructure',
      image: '/images/equipment-cooling-tower.webp',
      fallbackImage: '/images/equipment-cooling-tower.jpg',
      alt: 'Industrial induced draft cooling towers for commercial central HVAC water loop',
      description:
        'Induced and forced draft open/closed circuit cooling towers rejecting condenser heat from central water-cooled chiller plants.',
      workflows: ['Fill pack descaling', 'Fan blade pitch adjustment', 'Water drift eliminator servicing'],
    },
    {
      name: 'Ventilation & Exhaust Systems',
      icon: Layers,
      type: 'Air Quality & Extraction',
      image: '/images/equipment-ventilation.webp',
      fallbackImage: '/images/equipment-ventilation.jpg',
      alt: 'Industrial ventilation and exhaust ductwork with centrifugal air blowers',
      description:
        'Basement ventilation, kitchen scrubber exhaust, industrial fume extraction, and dedicated stairwell pressurization systems.',
      workflows: ['CFM flow rate measurements', 'Belt tensioning & balancing', 'Fire damper testing'],
    },
    {
      name: 'Precision Air Conditioning (PAC)',
      icon: Server,
      type: 'Mission-Critical Cooling',
      image: '/images/equipment-pac.webp',
      fallbackImage: '/images/equipment-pac.jpg',
      alt: 'Precision air conditioning PAC computer room cooling units in mission critical server room',
      description:
        'High-sensible heat ratio environmental conditioning units dedicated to data centers, server rooms, labs, and telecom shelters.',
      workflows: ['Microprocessor control checks', 'Humidity level calibration', 'Continuous runtime diagnostics'],
    },
  ];

  return (
    <section id="equipment" className="py-20 md:py-28 bg-[#F4F6FA] border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F20A78]" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-wider uppercase text-slate-600">
              Domain Scope & Hardware Context
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B162B] tracking-tight leading-tight mb-5">
            Built Around the HVAC Service Ecosystem
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            SKORNET workflows, technician skill matrix taxonomies, and service call logs are structured specifically to address the mechanical complexities of modern commercial, industrial, and specialized HVAC equipment.
          </p>
        </div>

        {/* 8 Equipment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipmentCategories.map((eq, idx) => {
            const Icon = eq.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-[#F20A78]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Equipment Visual */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0B162B]/5 border-b border-slate-100">
                    <picture>
                      <source srcSet={eq.image} type="image/webp" />
                      <img
                        src={eq.fallbackImage}
                        alt={eq.alt}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        width="800"
                        height="600"
                      />
                    </picture>
                    <div className="absolute top-3 left-3 p-2 rounded-lg bg-white/95 backdrop-blur-xs text-[#F20A78] shadow-sm border border-slate-200/60">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-[10px] font-poppins font-semibold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        {eq.type}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#0B162B] mb-2 leading-snug group-hover:text-[#F20A78] transition-colors">
                      {eq.name}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {eq.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-slate-100 space-y-1.5 bg-slate-50/50">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500">
                    Relevant Workflows
                  </p>
                  {eq.workflows.map((wf, wIdx) => (
                    <div key={wIdx} className="text-[11px] text-slate-700 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#F20A78] shrink-0" />
                      <span className="truncate">{wf}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Domain Scope Clarification */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-500 leading-relaxed">
            Note: The equipment categories listed represent standard industrial HVAC configurations managed within the SKORNET service ecosystem and do not constitute specific manufacturer endorsements.
          </p>
        </div>
      </div>
    </section>
  );
};
