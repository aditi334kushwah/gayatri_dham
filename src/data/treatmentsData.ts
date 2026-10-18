export interface Treatment {
  slug: string;
  name: string;
  hindiName: string;
  tagline: string;
  element: string;
  elementColor: string;
  duration: string;
  sessions: string;
  sevaContribution: string;
  heroImage: string;
  overview: string;
  howItWorks: string;
  benefits: string[];
  conditions: string[];
  contraindications: string;
  vaidyaTip: string;
  steps: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

const TREATMENTS: Treatment[] = [
  {
    slug: 'yoga',
    name: 'Therapeutic Yoga & Shatkarma',
    hindiName: 'चिकित्सीय योग एवं षट्कर्म',
    tagline: 'Align the spine. Calm the mind. Restore the breath.',
    element: 'Aakash & Vayu',
    elementColor: 'indigo',
    duration: '60 – 90 Minutes',
    sessions: 'Daily 6:30 AM & 5:00 PM',
    sevaContribution: '₹350 / Session (Included in Camp Package)',
    heroImage: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=1600',
    overview:
      'Conducted under certified resident Yogacharyas inside the sacred Brahmavarchas Yogasala. We prioritize spinal alignment, rhythmic diaphragmatic breathing, and Shatkarma kriyas that expel accumulated morbid phlegm (Kapha) and gastric toxin load.',
    howItWorks:
      'Customised Asana sequences are prescribed after Nadi Parikshan (pulse diagnosis). Pranayama techniques like Nadi Shodhana, Bhramari, and Kapalbhati are layered with Shatkarma practices — Jala Neti, Kunjal Kriya, and Trataka — to systematically cleanse the six major body channels.',
    benefits: [
      'Normalizes sympathetic blood pressure',
      'Releases deep cervical & lumbar tightness',
      'Clears sinus mucosal congestion through Jala Neti',
      'Harmonizes neuro-endocrine secretion',
      'Improves lung capacity and oxygen absorption',
      'Reduces cortisol and anxiety markers',
    ],
    conditions: ['Stress & Anxiety', 'Cervical Spondylosis', 'Digestive Disorders', 'Diabetes', 'Insomnia', 'High BP'],
    contraindications: 'Acute abdominal surgery within 3 months, severe vertigo, or high fever.',
    vaidyaTip: 'Practiced on an empty stomach after warm lemon water and triphala tea.',
    steps: [
      { title: 'Sukshma Vyayama', desc: 'Gentle joint loosening and micro-movements to warm up the body.' },
      { title: 'Shatkarma Kriya', desc: 'Jala Neti, Kunjal, or Trataka as prescribed by Vaidya.' },
      { title: 'Asana Practice', desc: 'Customized posture sequence targeting your specific ailment.' },
      { title: 'Pranayama', desc: 'Nadi Shodhana, Bhramari, and Kapalbhati for nervous system balance.' },
      { title: 'Yoga Nidra', desc: 'Deep conscious relaxation to integrate the session.' },
    ],
    faqs: [
      { q: 'Do I need prior yoga experience?', a: 'No. All sessions are adapted to your current physical condition after Vaidya assessment.' },
      { q: 'Can elderly patients join?', a: 'Yes. Chair-supported and gentle bed yoga is available for senior patients.' },
      { q: 'How many sessions are recommended?', a: 'Minimum 7 consecutive days for chronic conditions. OPD patients can attend daily.' },
    ],
  },
  {
    slug: 'mud-therapy',
    name: 'Full Body Mud Bath & Earthen Poultice',
    hindiName: 'मृत्तिका चिकित्सा (मिट्टी स्नान व लेप)',
    tagline: 'Let the Earth absorb what the body cannot release.',
    element: 'Prithvi (Earth)',
    elementColor: 'amber',
    duration: '45 – 60 Minutes',
    sessions: 'Mid-Morning (9:00 AM – 11:30 AM)',
    sevaContribution: '₹450 / Session',
    heroImage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1600',
    overview:
      'Sun-energized medicinal anthill earth application that absorbs internal visceral toxins, soothes chronic inflammation, and cools the digestive fire. Pure anthill soil from 8 feet beneath unpolluted Satpura forest grounds is used.',
    howItWorks:
      'The earth is sieved, sterilized with sun rays for 72 hours, and steeped with neem and tulsi decoction. When applied to the abdomen or whole body, it pulls out chronic inflammation through radiant osmotic cooling and draws out metabolic waste through the skin pores.',
    benefits: [
      'Relieves hyper-acidity, ulcers, and chronic constipation',
      'Cools nervous hyper-arousal and improves restful sleep',
      'Regulates skin psoriasis, chronic eczema, and hives',
      'Aids pancreatic microcirculation for glycemic control',
      'Reduces joint inflammation and arthritic swelling',
      'Detoxifies the liver and digestive tract',
    ],
    conditions: ['Acidity & Gastritis', 'Constipation', 'Diabetes', 'Skin Disorders', 'Stress', 'Arthritis'],
    contraindications: 'Severe acute asthma during monsoon, open unhealed lesions, or severe hypothermia.',
    vaidyaTip: 'Keep a cool wet towel on forehead while mud is drying naturally under the morning sun.',
    steps: [
      { title: 'Soil Preparation', desc: 'Medicinal anthill earth is mixed with neem-tulsi decoction to therapeutic consistency.' },
      { title: 'Body Preparation', desc: 'Patient lies on a wooden plank in the open sun therapy area.' },
      { title: 'Mud Application', desc: 'Warm mud is applied to abdomen, joints, or full body as prescribed.' },
      { title: 'Sun Drying', desc: 'Patient rests under morning sun for 30–40 minutes while mud dries.' },
      { title: 'Warm Water Wash', desc: 'Mud is removed with lukewarm water. No soap used.' },
    ],
    faqs: [
      { q: 'Is the mud hygienic and safe?', a: 'Yes. Soil is collected from deep unpolluted forest ground and sterilized with 72-hour sun exposure before use.' },
      { q: 'Can it be applied to the face?', a: 'Yes, facial mud packs are available separately for skin conditions.' },
      { q: 'What should I eat before the session?', a: 'Light fruit or nothing. Avoid heavy meals 2 hours before therapy.' },
    ],
  },
  {
    slug: 'hydrotherapy',
    name: 'Hydrotherapy: Hip Bath & Spinal Spray',
    hindiName: 'कटि स्नान एवं मेरुदंड जल फुहार',
    tagline: 'Water heals what medicine cannot reach.',
    element: 'Jal (Water)',
    elementColor: 'blue',
    duration: '30 – 45 Minutes',
    sessions: 'Morning & Post-Noon',
    sevaContribution: '₹400 / Session',
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1600',
    overview:
      'Alternating warm and chilled water streams directed at the pelvic floor and vertebral column to tone the spinal cord and stimulate sluggish bowels. Utilizes revitalized spring water in specialized German-grade porcelain tubs.',
    howItWorks:
      'The friction hip bath strengthens pelvic tone, stimulates peristalsis in lazy intestines, and the pressurized spinal spray activates the autonomic sympathetic chain lying along vertebrae. Temperature contrast creates a pumping effect in blood vessels, flushing stagnant toxins.',
    benefits: [
      'Relieves stubborn constipation and haemorrhoidal congestion',
      'Alleviates pelvic organ congestion and menstrual irregularities',
      'Decompresses lumbar nervous tension',
      'Tones the vegetative vagus nervous system',
      'Improves kidney and bladder function',
      'Reduces lower back pain and sciatica',
    ],
    conditions: ['Constipation', 'Sciatica & Back Pain', 'Menstrual Disorders', 'Stress', 'Kidney Issues', 'Piles'],
    contraindications: 'Acute cystitis during active bleeding, severe cardiac decompensation.',
    vaidyaTip: 'A 5-minute brisk walk is prescribed immediately following a cold friction hip bath.',
    steps: [
      { title: 'Warm Foot Bath', desc: 'Feet soaked in warm water to dilate peripheral vessels and prepare the body.' },
      { title: 'Hip Bath', desc: 'Patient sits in cold or alternating temperature tub targeting pelvic region.' },
      { title: 'Spinal Spray', desc: 'Pressurized water stream applied along the vertebral column.' },
      { title: 'Friction Rub', desc: 'Wet friction towel massage to stimulate skin circulation.' },
      { title: 'Brisk Walk', desc: '5-minute walk to activate the therapeutic response.' },
    ],
    faqs: [
      { q: 'Is cold water used throughout?', a: 'No. Temperature is alternated or adjusted based on your condition and Vaidya prescription.' },
      { q: 'Is it suitable for women?', a: 'Yes. Separate therapy areas are available for female patients.' },
      { q: 'How soon will I see results for constipation?', a: 'Most patients experience relief within 2–3 sessions.' },
    ],
  },
  {
    slug: 'steam-care',
    name: 'Medicinal Herbal Steam Chamber',
    hindiName: 'औषधीय जड़ी-बूटी वाष्प स्वेदन',
    tagline: 'Breathe in the forest. Sweat out the toxins.',
    element: 'Agni & Vayu',
    elementColor: 'orange',
    duration: '20 – 30 Minutes',
    sessions: 'Daily 10:00 AM – 1:00 PM',
    sevaContribution: '₹500 / Session',
    heroImage: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=1600',
    overview:
      'Aromatic medicinal steam chamber infused with Nirgundi, Dashamoola, and Eucalyptus to induce therapeutic sweating and melt joint stiffness. Patients sit in handcrafted cedar wood steam cabinets with head outside in cool air.',
    howItWorks:
      'Fresh forest leaves (Nirgundi, Rasna, Tulsi) boiled in brass boilers deliver natural volatile essential oils directly to cutaneous pores. The steam opens skin channels, dissolves uric acid crystals in joints, and expels deep subcutaneous environmental micro-toxins through sweat.',
    benefits: [
      'Eliminates uric acid crystals and rheumatic joint tenderness',
      'Expels deep subcutaneous environmental micro-toxins',
      'Improves peripheral capillary dilation and skin radiance',
      'Loosens stiff paraspinal lumbar and shoulder muscles',
      'Relieves chronic sinusitis and respiratory congestion',
      'Boosts immunity through thermal stimulation',
    ],
    conditions: ['Arthritis & Joint Pain', 'Cervical Spondylosis', 'Sinusitis', 'Diabetes', 'Skin Disorders', 'Obesity'],
    contraindications: 'Uncontrolled high BP (>160/100), advanced cardiac conditions, active pregnancy.',
    vaidyaTip: 'Drink 2 glasses of lukewarm water with tulsi extract before stepping inside.',
    steps: [
      { title: 'Herbal Preparation', desc: 'Nirgundi, Rasna, Tulsi, and Eucalyptus boiled in brass vessel for 20 minutes.' },
      { title: 'Pre-hydration', desc: 'Patient drinks 2 glasses of warm tulsi water before entering.' },
      { title: 'Steam Session', desc: 'Patient sits in cedar cabinet with head outside. Cool wet pack on crown.' },
      { title: 'Cool Down', desc: 'Gentle cool water splash on face and neck after exiting.' },
      { title: 'Rest Period', desc: '15-minute rest in shade before resuming activity.' },
    ],
    faqs: [
      { q: 'Will I feel claustrophobic inside the cabinet?', a: 'No. The head remains fully outside the cabinet in open air throughout the session.' },
      { q: 'Can diabetic patients take steam therapy?', a: 'Yes, with Vaidya supervision. It improves peripheral circulation beneficial for diabetes.' },
      { q: 'How often can I take steam therapy?', a: 'Daily during residential camp. OPD patients can take it 3–4 times per week.' },
    ],
  },
  {
    slug: 'diet',
    name: 'Sattvic Diet & Therapeutic Fasting',
    hindiName: 'सात्विक आहार एवं उपवास चिकित्सा',
    tagline: 'Food is the first medicine. Fasting is the deepest cure.',
    element: 'Prithvi & Jal',
    elementColor: 'green',
    duration: 'Ongoing (Daily Meal Plan)',
    sessions: 'Breakfast 7:30 AM | Lunch 12:30 PM | Dinner 7:00 PM',
    sevaContribution: 'Included in Camp Package',
    heroImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1600',
    overview:
      'A scientifically designed Sattvic nutrition protocol based on Pt. Shriram Sharma Acharya Ji\'s Ahara Shastra. Combines therapeutic fasting, raw food phases, and alkaline diet to systematically eliminate Ama (metabolic toxins) from the body.',
    howItWorks:
      'The program begins with a 1–2 day juice fast using bitter gourd, wheatgrass, and amla to flush the digestive tract. This is followed by a raw fruit phase, then cooked Sattvic meals with no oil, spice, or processed food. Each meal is timed to align with the body\'s natural digestive rhythms.',
    benefits: [
      'Eliminates accumulated Ama (metabolic waste) from intestines',
      'Normalizes blood sugar and insulin sensitivity',
      'Reduces systemic inflammation and joint pain',
      'Restores healthy gut microbiome balance',
      'Promotes natural weight loss without starvation',
      'Improves mental clarity and emotional stability',
    ],
    conditions: ['Diabetes & Obesity', 'Acidity & IBS', 'High Cholesterol', 'Fatty Liver', 'Arthritis', 'Mental Fatigue'],
    contraindications: 'Severe anemia, active tuberculosis, or underweight patients (BMI < 17).',
    vaidyaTip: 'Chew each morsel 32 times. Eat in silence. Leave one-quarter of the stomach empty.',
    steps: [
      { title: 'Juice Fasting Phase', desc: 'Day 1–2: Bitter gourd, wheatgrass, amla, and coconut water only.' },
      { title: 'Raw Fruit Phase', desc: 'Day 3–4: Seasonal fruits, soaked nuts, and sprouts.' },
      { title: 'Sattvic Cooked Meals', desc: 'Day 5–7: Oil-free khichdi, steamed vegetables, and herbal teas.' },
      { title: 'Home Diet Chart', desc: 'Personalized long-term diet plan given at discharge.' },
      { title: 'Follow-up Guidance', desc: 'Monthly WhatsApp consultation with Vaidya for diet adherence.' },
    ],
    faqs: [
      { q: 'Will I feel weak during fasting?', a: 'Mild fatigue on day 1 is normal. Coconut water and fruit juices maintain energy. Most patients feel lighter and energized by day 3.' },
      { q: 'Is the food prepared at the ashram?', a: 'Yes. All meals are prepared in the Gaushala kitchen using organic produce and cow ghee from our own Gaushala.' },
      { q: 'Can I continue my medications during diet therapy?', a: 'Consult the resident Vaidya. Medications are never abruptly stopped but may be gradually tapered under supervision.' },
    ],
  },
];

export default TREATMENTS;
