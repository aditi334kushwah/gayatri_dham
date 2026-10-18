"use client";

import React, { useState, useMemo } from 'react';

export interface TreatmentItem {
    id: string | number;
    name: string;
    hindiName: string;
    duration: string;
    element: string;
    image: string;
    fullDesc?: string;
    benefits?: string[];
    contraindications?: string;
    vaidyaTip?: string;
    sevaContribution?: string;
}

import {
    Sparkles,
    Droplet,
    Flame,
    Wind,
    Sun,
    Layers,
    Heart,
    Calendar,
    Clock,
    CheckCircle2,
    ChevronRight,
    ChevronDown,
    Info,
    ArrowRight,
    Filter,
    Search,
    MessageCircle,
    Phone,
    Mail,
    ShieldCheck,
    Activity,
    X,
    User,
    Compass,
    FileText,
    AlertCircle,
    Check,
    Star
} from 'lucide-react';

const TREATMENTS_DATA = [
    {
        id: 'therapeutic-yoga',
        name: 'Therapeutic Yoga & Shatkarma',
        hindiName: 'चिकित्सीय योग एवं षट्कर्म',
        element: 'Aakash & Vayu',
        elementKey: 'aakash',
        elementColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
        elementGlow: 'hover:border-indigo-400',
        duration: '60 - 90 Mins',
        sessions: 'Daily 6:30 AM & 5:00 PM',
        summary: 'Customised Asana, Pranayama, Neti, Kunjal Kriya, and Trataka designed to detox respiratory passages and soothe the autonomic nervous system.',
        fullDesc: 'Conducted under certified resident Yogacharyas inside the sacred Brahmavarchas Yogasala. We prioritize spinal alignment, rhythmic diaphragmatic breathing, and Shatkarma kriyas that expel accumulated morbid phlegm (Kapha) and gastric toxin load.',
        image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800',
        ailments: ['stress', 'cervical', 'digestive', 'diabetes'],
        benefits: [
            'Normalizes sympathetic blood pressure',
            'Releases deep cervical & lumbar tightness',
            'Clears sinus mucosal congestions through Jala Neti',
            'Harmonizes neuro-endocrine secretion'
        ],
        contraindications: 'Acute abdominal surgery within 3 months, severe vertigo, or high fever.',
        vaidyaTip: 'Practiced on an empty stomach after warm lemon water and triphala tea.',
        sevaContribution: '₹350 / Single Session (Included in Camp Package)'
    },
    {
        id: 'mud-therapy',
        name: 'Full Body Mud Bath & Earthen Poultice',
        hindiName: 'मृत्तिका चिकित्सा (मिट्टी स्नान व लेप)',
        element: 'Prithvi (Earth)',
        elementKey: 'prithvi',
        elementColor: 'bg-amber-50 text-amber-800 border-amber-200',
        elementGlow: 'hover:border-amber-400',
        duration: '45 - 60 Mins',
        sessions: 'Mid-Morning (9:00 AM - 11:30 AM)',
        summary: 'Sun-energized medicinal anthill earth application that absorbs internal visceral toxins, soothes chronic inflammation, and cools the digestive fire.',
        fullDesc: 'We dig pure anthill soil from 8 feet beneath unpolluted forest grounds of the Satpura range. The earth is sieved, sterilized with sun rays for 72 hours, and steeped with neem and tulsi decoction. When applied to the abdomen or whole body, it pulls out chronic inflammation through radiant osmotic cooling.',
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800',
        ailments: ['digestive', 'stress', 'diabetes'],
        benefits: [
            'Relieves hyper-acidity, ulcers, and chronic constipation',
            'Cools nervous hyper-arousal and improves restful sleep',
            'Regulates skin psoriasis, chronic eczema, and hives',
            'Aids pancreatic microcirculation for glycemic control'
        ],
        contraindications: 'Severe acute asthma during monsoon, open unhealed lesions, or severe hypothermia.',
        vaidyaTip: 'Keep a cool wet towel on forehead while mud is drying naturally under the morning sun.',
        sevaContribution: '₹450 / Session'
    },
    {
        id: 'hydrotherapy',
        name: 'Hydrotherapy: Hip Bath & Spinal Spray',
        hindiName: 'कटि स्नान एवं मेरुदंड जल फुहार (जल चिकित्सा)',
        element: 'Jal (Water)',
        elementKey: 'jal',
        elementColor: 'bg-blue-50 text-blue-700 border-blue-200',
        elementGlow: 'hover:border-blue-400',
        duration: '30 - 45 Mins',
        sessions: 'Morning & Post-Noon',
        summary: 'Alternating warm and chilled water streams directed at the pelvic floor and vertebral column to tone the spinal chord and stimulate sluggish bowels.',
        fullDesc: 'Utilizes revitalized spring water in specialized German-grade porcelain tubs. The friction hip bath strengthens pelvic tone, stimulates peristalsis in lazy intestines, and the pressurized spinal spray activates the autonomic sympathetic chain lying along vertebrae.',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800',
        ailments: ['digestive', 'cervical', 'stress'],
        benefits: [
            'Relieves stubborn constipation and haemorrhoidal congestion',
            'Alleviates pelvic organ congestion and menstrual irregularities',
            'Decompresses lumbar nervous tension',
            'Tones the vegetative vagus nervous system'
        ],
        contraindications: 'Acute cystitis during active bleeding, severe cardiac decompensation.',
        vaidyaTip: 'A 5-minute brisk walk is prescribed immediately following a cold friction hip bath.',
        sevaContribution: '₹400 / Session'
    },
    {
        id: 'herbal-steam',
        name: 'Medicinal Herbal Steam Chamber',
        hindiName: 'औषधीय जड़ी-बूटी वाष्प स्वेदन',
        element: 'Agni & Vayu',
        elementKey: 'agni',
        elementColor: 'bg-orange-50 text-orange-700 border-orange-200',
        elementGlow: 'hover:border-orange-400',
        duration: '20 - 30 Mins',
        sessions: 'Daily 10:00 AM - 1:00 PM',
        summary: 'Aromatic medicinal steam chamber infused with Nirgundi, Dashamoola, and Eucalyptus to induce therapeutic sweating and melt joint stiffness.',
        fullDesc: 'Patients sit comfortably inside handcrafted cedar wood steam cabinets where the head remains outside in room air with a cool wet pack on the crown. Fresh forest leaves (Nirgundi, Rasna, Tulsi) boiled in brass boilers deliver natural volatile essential oils directly to cutaneous pores.',
        image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800',
        ailments: ['cervical', 'diabetes', 'stress'],
        benefits: [
            'Eliminates uric acid crystals and rheumatic joint tenderness',
            'Expels deep subcutaneous environmental micro-toxins',
            'Improves peripheral capillary dilation and skin radiance',
            'Loosens stiff paraspinal lumbar and shoulder muscles'
        ],
        contraindications: 'Uncontrolled high BP (>160/100), advanced cardiac conditions, active pregnancy.',
        vaidyaTip: 'Drink 2 glasses of lukewarm water with tulsi extract before stepping inside.',
        sevaContribution: '₹500 / Session'
    },
    {
        id: 'sun-chromotherapy',
        name: 'Atap Snana & Color Solarized Therapy',
        hindiName: 'आतप स्नान एवं सूर्यकिरण चिकित्सा',
        element: 'Agni & Aakash',
        elementKey: 'agni',
        elementColor: 'bg-amber-50 text-amber-700 border-amber-200',
        elementGlow: 'hover:border-amber-400',
        duration: '35 - 45 Mins',
        sessions: 'Early Morning Sun (7:00 AM - 8:30 AM)',
        summary: 'Natural helio-therapy utilizing early solar ultraviolet/infrared spectra through colored glass filters and energizing water bottles.',
        fullDesc: 'Based on Pandit Shriram Sharma Acharya Ji’s deep research on Pragya Sun Science. Sunlight passed through blue and amber optical filters produces distinct metabolic vibrations that rebalance pituitary signaling, synthesize bioactive Vitamin D, and burn sluggish visceral fat.',
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800',
        ailments: ['stress', 'diabetes', 'cervical'],
        benefits: [
            'Recharges cellular mitochondrial energy production',
            'Promotes bone remineralization and natural Vitamin D3 synthesis',
            'Calms seasonal affective mood distress and depressive anxiety',
            'Stimulates sluggish thyroid and metabolic rates'
        ],
        contraindications: 'Sun allergies (polymorphous light eruption) or acute active dermatitis.',
        vaidyaTip: 'Always cover head and eyes with fresh green banana leaves during Atap Snana.',
        sevaContribution: '₹300 / Session'
    },
    {
        id: 'shirodhara-taila',
        name: 'Shirodhara & Herbal Oil Massage',
        hindiName: 'शिरोधारा एवं जड़ी-बूटी अभ्यंग',
        element: 'Aakash & Jal',
        elementKey: 'aakash',
        elementColor: 'bg-teal-50 text-teal-700 border-teal-200',
        elementGlow: 'hover:border-teal-400',
        duration: '50 - 60 Mins',
        sessions: 'Daily By Appointment',
        summary: 'Rhythmic, warm medicated herbal oil cascade over the Ajna chakra forehead accompanied by therapeutic Marma massage.',
        fullDesc: 'Continuous oscillating stream of warm Brahmi, Shankhpushpi, and pure cold-pressed sesame oil poured from a bronze dharapatra. The rhythmic physical oscillation triggers deep alpha-wave brain states, dissolving intractable migraine headaches, anxiety, and hypertension.',
        image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=800',
        ailments: ['stress', 'cervical'],
        benefits: [
            'Profound relief from insomnia, anxiety, and panic tendencies',
            'Relieves neurological tension and chronic vascular migraines',
            'Nourishes the optic nerves and enhances mental focus',
            'Normalizes elevated cortisol and pituitary hormone release'
        ],
        contraindications: 'Active sinusitis flare-up with yellow nasal discharge, recent concussion.',
        vaidyaTip: 'Avoid direct air-conditioners or cold wind exposure for 4 hours following Shirodhara.',
        sevaContribution: '₹850 / Session'
    }
];

const HEALING_STAGES = [
    {
        step: '01',
        title: 'Nadi & Prakriti Parikshan',
        hindi: 'नाड़ी व प्रकृति परीक्षण',
        tag: 'Day 1: Clinical Assessment',
        desc: 'Resident Naturopathy Vaidya assesses your bio-energetic Dosha profile (Vata, Pitta, Kapha), toxic load (Ama), blood glucose, and lifestyle stressors.'
    },
    {
        step: '02',
        title: 'Panchamahabhuta Detox',
        hindi: 'पंचमहाभूत शरीर शोधन',
        tag: 'Days 2 - 4: Elimination',
        desc: 'Targeted applications of medicinal earth wraps, friction hip baths, fasting on wheatgrass and bitter ash gourd juice to dislodge cellular toxins.'
    },
    {
        step: '03',
        title: 'Nerve & Spine Rejuvenation',
        hindi: 'मेरुदंड व स्नायु पुनरुत्थान',
        tag: 'Days 4 - 6: Therapy',
        desc: 'Pressurized warm spinal showers, Shatkarma sinus flushing, solarized chromotherapy, and deep herbal steam to restore musculoskeletal vitality.'
    },
    {
        step: '04',
        title: 'Sattvic Ahara & Swadhyaya',
        hindi: 'सात्विक आहार व स्वाध्याय',
        tag: 'Day 7: Integration',
        desc: 'Establishment of personalized home diet charts, daily Gayatri Yagya smoke inhalation (Yagyopathy), and mental calm guidance from Gurudev’s literature.'
    }
];

const AILMENTS_FILTER = [
    { id: 'all', label: 'All Therapies', hindi: 'समस्त उपचार' },
    { id: 'digestive', label: 'Acidity, Gas & Constipation', hindi: 'अम्लपित्त व उदर विकार' },
    { id: 'cervical', label: 'Back, Sciatica & Joint Pain', hindi: 'कमर, सायटिका व जोड़ दर्द' },
    { id: 'stress', label: 'Stress, Insomnia & BP', hindi: 'अनिद्रा, तनाव व उच्च रक्तचाप' },
    { id: 'diabetes', label: 'Diabetes & Metabolism', hindi: 'मधुमेह व चयापचय' }
];

export default function App() {

    const [detailModalItem, setDetailModalItem] = useState<TreatmentItem | null>(null);
    const [selectedElement, setSelectedElement] = useState('all');
    const [selectedAilment, setSelectedAilment] = useState('all');
    const [activeStage, setActiveStage] = useState(0);
    const [consultModalOpen, setConsultModalOpen] = useState(false);
    const [consultPreselectedTreatment, setConsultPreselectedTreatment] = useState('');
    const [consultFormSuccess, setConsultFormSuccess] = useState<boolean>(false);
    const [expandedFaq, setExpandedFaq] = useState(0);

    // Form State
    const [consultFormData, setConsultFormData] = useState({
        name: '',
        phone: '',
        city: '',
        date: '',
        ailment: 'Acidity & Digestion',
        notes: ''
    });

    const filteredTreatments = useMemo(() => {
        return TREATMENTS_DATA.filter((item) => {
            const matchElement =
                selectedElement === 'all' ||
                item.elementKey === selectedElement ||
                (selectedElement === 'yoga' && item.id === 'therapeutic-yoga');

            const matchAilment =
                selectedAilment === 'all' || item.ailments.includes(selectedAilment);

            return matchElement && matchAilment;
        });
    }, [selectedElement, selectedAilment]);

    const handleOpenConsultation = (treatmentName = '') => {
        setConsultPreselectedTreatment(treatmentName);
        setConsultModalOpen(true);
        setConsultFormSuccess(false);
    };

    const handleConsultSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setConsultFormSuccess(true);
        // Optional: 4 second baad success alert hide karne ke liye
        // setTimeout(() => setConsultFormSuccess(false), 4000);
    };

    return (
        <div className="min-h-screen bg-[#FDFBF7] text-stone-800 font-sans selection:bg-amber-200 selection:text-amber-900">

            {/* =========================================================================
          1. TOP UTILITY BAR (Consistent deep royal blue #1b3d75)
         ========================================================================= */}
            <div className="bg-[#1b3d75] text-blue-100 text-xs py-2 px-4 border-b border-blue-900/60 sticky top-0 z-40">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
                    <div className="flex items-center space-x-4 overflow-x-auto text-[11px] sm:text-xs">
                        <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
                            <Sun className="w-3.5 h-3.5 animate-spin-slow" />
                            <span>वेदमूर्ति पं. श्रीराम शर्मा आचार्य प्रणीत युग निर्माण योजना</span>
                        </span>
                        <span className="text-blue-300/40 hidden md:inline">|</span>
                        <span className="hidden md:inline text-blue-200">
                            Gayatri Dham, Sendhwa (NH-52, Dist. Barwani, M.P.)
                        </span>
                    </div>
                    <div className="flex items-center space-x-3 text-[11px] ml-auto">
                        <span className="flex items-center gap-1 text-emerald-300 font-medium">
                            <Activity className="w-3 h-3" /> Vaidya OPD: 7:00 AM - 6:00 PM
                        </span>
                        <span className="text-blue-300/40">|</span>
                        <a href="tel:+919425088219" className="hover:text-amber-300 transition text-amber-200 font-bold">
                            +91 94250 88219
                        </a>
                    </div>
                </div>
            </div>

            {/* =========================================================================
          2. BRAND HEADER & NAVIGATION (Consistent royal blue #244c8c + orange CTA)
         ========================================================================= */}
            <header className="bg-[#244c8c] text-white py-3.5 px-4 sm:px-8 border-b border-blue-950/40 shadow-sm">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-3 cursor-pointer">
                        <div className="w-11 h-11 bg-white/10 rounded-lg p-1 border border-white/20 flex items-center justify-center shrink-0 shadow-inner">
                            <div className="w-full h-full rounded bg-white flex flex-col items-center justify-center text-[#244c8c]">
                                <Sparkles className="w-5 h-5 text-amber-600" />
                                <span className="text-[8px] font-bold text-[#1b3d75] -mt-0.5 font-serif">गायत्री</span>
                            </div>
                        </div>
                        <div>
                            <div className="text-[10px] uppercase tracking-wider text-amber-300 font-semibold">
                                माँ भगवती योगनिसर्गोपचार केंद्र
                            </div>
                            <h1 className="text-base sm:text-xl font-serif font-black tracking-tight leading-tight text-white uppercase">
                                GAYATRI DHAM, SENDHWA
                            </h1>
                            <div className="text-[11px] text-blue-200 font-medium">
                                Panchamahabhuta Vedic Naturopathy & Yoga Sanctuary
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <button
                            onClick={() => handleOpenConsultation('General Vaidya Consultation')}
                            className="bg-[#ea7b11] hover:bg-[#d66e0b] text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md transition transform active:scale-95 border-2 border-amber-300/40 flex items-center gap-1.5"
                        >
                            <Calendar className="w-4 h-4 text-white" />
                            <span>Book Consultation</span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Secondary Subnav Strip */}
            <div className="bg-white border-b border-stone-200 shadow-xs px-4">
                <div className="max-w-7xl mx-auto flex items-center text-xs font-bold uppercase tracking-wider text-stone-700 overflow-x-auto py-2.5 space-x-6">
                    <span className="text-[#ea7b11] border-b-2 border-[#ea7b11] pb-1 font-black">
                        TREATMENTS & THERAPIES
                    </span>
                    <a href="#ailment-finder" className="hover:text-[#244c8c] whitespace-nowrap transition">
                        Ailment Finder
                    </a>
                    <a href="#healing-journey" className="hover:text-[#244c8c] whitespace-nowrap transition">
                        4-Stage Process
                    </a>
                    <a href="#comparison-matrix" className="hover:text-[#244c8c] whitespace-nowrap transition">
                        Treatment Comparison
                    </a>
                    <a href="#faqs" className="hover:text-[#244c8c] whitespace-nowrap transition">
                        Patient FAQs
                    </a>
                </div>
            </div>

            {/* =========================================================================
          3. HERO SECTION (Dynamic Vedic Nature Atmosphere & Elemental Filter Tabs)
         ========================================================================= */}
            <div className="relative overflow-hidden bg-gradient-to-b from-[#0F281E] via-[#143D2C] to-[#0A1F16] text-white py-14 sm:py-20 px-4">
                {/* Subtle geometric particles background */}
                <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#5eead4_1px,transparent_1px)] [background-size:24px_24px]" />
                <div className="absolute -right-24 top-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -left-20 bottom-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative max-w-5xl mx-auto text-center space-y-4">
                    <div className="inline-flex items-center gap-2 bg-emerald-950/80 text-emerald-300 border border-emerald-500/40 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>पंचमहाभूत प्राकृतिक चिकित्सा • 100% Drugless Healing</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-white leading-tight">
                        Divine Panchamahabhuta Therapies
                    </h2>

                    <p className="text-xs sm:text-sm text-emerald-100/90 max-w-2xl mx-auto leading-relaxed">
                        "मनुष्य भटके तो प्रकृति की शरण में जाए; प्रकृति ही सर्वोच्च वैद्य है।" — परम पूज्य पं. श्रीराम शर्मा आचार्य जी।
                        Realign body tissues through pure Earth, Water, Sun, Air, and Ether at our 50-acre Sendhwa sanctuary.
                    </p>

                    {/* Elemental Filter Buttons */}
                    <div className="pt-4 flex flex-wrap justify-center gap-2 sm:gap-2.5">
                        {[
                            { id: 'all', label: 'All Elements', icon: Layers },
                            { id: 'prithvi', label: 'Prithvi (Earth)', icon: ShieldCheck },
                            { id: 'jal', label: 'Jal (Water)', icon: Droplet },
                            { id: 'agni', label: 'Agni (Sun & Fire)', icon: Flame },
                            { id: 'aakash', label: 'Aakash & Vayu (Space & Air)', icon: Wind }
                        ].map((btn) => {
                            const Icon = btn.icon;
                            const isActive = selectedElement === btn.id;
                            return (
                                <button
                                    key={btn.id}
                                    onClick={() => setSelectedElement(btn.id)}
                                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${isActive
                                        ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)] scale-105'
                                        : 'bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-xs'
                                        }`}
                                >
                                    <Icon className="w-3.5 h-3.5" />
                                    <span>{btn.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* =========================================================================
          4. INTERACTIVE AILMENT FINDER WIDGET
         ========================================================================= */}
            <section id="ailment-finder" className="max-w-7xl mx-auto px-4 -mt-7 relative z-20">
                <div className="bg-white rounded-xl shadow-lg border border-amber-900/10 p-5 sm:p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-stone-100">
                        <div>
                            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#ea7b11]">
                                PERSONALIZED TREATMENT SELECTOR
                            </span>
                            <h3 className="font-serif font-bold text-lg text-stone-900">
                                What health concern would you like to treat naturally?
                            </h3>
                        </div>
                        <span className="text-xs text-stone-500">
                            Showing <strong>{filteredTreatments.length}</strong> matching therapies
                        </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 pt-4">
                        {AILMENTS_FILTER.map((item) => {
                            const active = selectedAilment === item.id;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setSelectedAilment(item.id)}
                                    className={`p-3 rounded-lg border text-left transition duration-150 flex flex-col justify-between ${active
                                        ? 'bg-[#1b3d75] text-white border-[#1b3d75] shadow-md'
                                        : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                                        }`}
                                >
                                    <span className="text-[10px] font-bold opacity-80 uppercase">{item.hindi}</span>
                                    <span className="text-xs font-bold mt-1 leading-snug">{item.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =========================================================================
          5. TREATMENT CARDS GRID (Rich Aesthetics & Extra Interactive Effects)
         ========================================================================= */}
            <section className="max-w-7xl mx-auto px-4 py-14">
                <div className="flex justify-between items-end mb-8 border-b border-stone-200 pb-3">
                    <div>
                        <span className="text-xs font-bold text-[#ea7b11] uppercase tracking-wider">
                            NATURAL PHARMACOPOEIA
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mt-0.5">
                            Available Clinical Therapies
                        </h2>
                    </div>
                    <span className="text-xs text-stone-500 hidden sm:inline">
                        Each treatment is customized according to Vaidya pulse reading (Nadi Parikshan)
                    </span>
                </div>

                {filteredTreatments.length === 0 ? (
                    <div className="text-center py-16 bg-white rounded-lg border border-dashed border-stone-300">
                        <Info className="w-10 h-10 text-stone-400 mx-auto mb-2" />
                        <p className="text-sm font-bold text-stone-700">No therapies match the exact filter combination.</p>
                        <button
                            onClick={() => {
                                setSelectedElement('all');
                                setSelectedAilment('all');
                            }}
                            className="mt-3 text-xs bg-[#244c8c] text-white px-4 py-1.5 rounded font-bold uppercase"
                        >
                            Reset All Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {filteredTreatments.map((treatment) => (
                            <div
                                key={treatment.id}
                                className={`bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${treatment.elementGlow}`}
                            >
                                <div>
                                    {/* Card Image Banner */}
                                    <div className="h-52 overflow-hidden relative">
                                        <img
                                            src={treatment.image}
                                            alt={treatment.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                                            <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border shadow-xs ${treatment.elementColor}`}>
                                                {treatment.element}
                                            </span>
                                        </div>
                                        <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded flex items-center gap-1">
                                            <Clock className="w-3 h-3 text-amber-300" />
                                            <span>{treatment.duration}</span>
                                        </div>
                                    </div>

                                    {/* Body Info */}
                                    <div className="p-5 space-y-3">
                                        <span className="text-xs font-bold text-[#ea7b11] uppercase tracking-wider block">
                                            {treatment.hindiName}
                                        </span>
                                        <h3 className="font-serif font-bold text-lg text-stone-900 group-hover:text-[#244c8c] transition-colors leading-snug">
                                            {treatment.name}
                                        </h3>
                                        <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                                            {treatment.summary}
                                        </p>

                                        {/* Key Benefits Bullet Chips */}
                                        <div className="space-y-1.5 pt-1">
                                            {treatment.benefits.slice(0, 2).map((benefit, i) => (
                                                <div key={i} className="flex items-start gap-1.5 text-xs text-stone-700">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                                    <span className="line-clamp-1">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Card Action Buttons */}
                                <div className="p-5 pt-0 border-t border-stone-100 flex items-center gap-2 mt-2">
                                    <button
                                        onClick={() => setDetailModalItem(treatment)}
                                        className="flex-1 text-center py-2.5 border border-stone-300 hover:border-stone-800 text-stone-800 text-xs font-bold rounded-lg transition uppercase tracking-wider"
                                    >
                                        Clinical Protocol
                                    </button>
                                    <button
                                        onClick={() => handleOpenConsultation(treatment.name)}
                                        className="py-2.5 px-4 bg-[#244c8c] hover:bg-[#1b3d75] text-white text-xs font-bold rounded-lg transition uppercase shadow-xs flex items-center gap-1"
                                    >
                                        <span>Book</span>
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* =========================================================================
          6. INTERACTIVE 4-STAGE HEALING PROCESS (Step Visualizer)
         ========================================================================= */}
            <section id="healing-journey" className="bg-[#FAF5ED] border-y border-amber-900/10 py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <span className="text-xs font-bold text-[#ea7b11] uppercase tracking-widest">
                            STEP-BY-STEP WELLNESS JOURNEY
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#1b3d75] mt-1">
                            How Nature-Cure Works at Gayatri Dham
                        </h2>
                        <p className="text-xs text-stone-600 mt-2">
                            Unlike temporary symptomatic suppression, we systematically dislodge and eliminate metabolic waste using non-invasive Vedic methods.
                        </p>
                    </div>

                    {/* Interactive Steps Bar */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                        {HEALING_STAGES.map((st, idx) => {
                            const isActive = activeStage === idx;
                            return (
                                <button
                                    key={st.step}
                                    onClick={() => setActiveStage(idx)}
                                    className={`p-4 rounded-xl border text-left transition-all duration-200 ${isActive
                                        ? 'bg-white border-[#ea7b11] shadow-md scale-102 ring-2 ring-amber-400/30'
                                        : 'bg-white/60 hover:bg-white border-stone-200 opacity-80'
                                        }`}
                                >
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-2xl font-black font-serif text-[#ea7b11]">{st.step}</span>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 bg-stone-100 px-2 py-0.5 rounded">
                                            {st.tag}
                                        </span>
                                    </div>
                                    <h4 className="font-bold text-sm text-stone-900 mt-1">{st.title}</h4>
                                    <p className="text-[11px] text-[#244c8c] font-semibold">{st.hindi}</p>
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Step Detailed Card */}
                    <div className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="space-y-2 max-w-2xl">
                            <span className="text-xs font-bold text-[#ea7b11] uppercase tracking-wider">
                                Stage {HEALING_STAGES[activeStage].step} Details
                            </span>
                            <h3 className="font-serif font-bold text-xl text-stone-900">
                                {HEALING_STAGES[activeStage].title} ({HEALING_STAGES[activeStage].hindi})
                            </h3>
                            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                                {HEALING_STAGES[activeStage].desc}
                            </p>
                        </div>
                        <button
                            onClick={() => handleOpenConsultation(`Inquiry for Stage ${HEALING_STAGES[activeStage].step}`)}
                            className="bg-[#244c8c] hover:bg-[#1b3d75] text-white font-bold text-xs uppercase px-6 py-3 rounded-lg shadow whitespace-nowrap transition"
                        >
                            Consult Resident Vaidya
                        </button>
                    </div>
                </div>
            </section>

            {/* =========================================================================
          7. TREATMENT COMPARISON MATRIX (Tabular Overview)
         ========================================================================= */}
            <section id="comparison-matrix" className="max-w-7xl mx-auto px-4 py-16">
                <div className="mb-6">
                    <span className="text-xs font-bold text-[#ea7b11] uppercase tracking-wider">
                        AT A GLANCE
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mt-0.5">
                        Therapy Comparison & Prescription Guide
                    </h2>
                </div>

                <div className="overflow-x-auto bg-white border border-stone-200 rounded-xl shadow-xs">
                    <table className="w-full text-left text-xs text-stone-700">
                        <thead className="bg-[#1b3d75] text-white uppercase text-[11px] tracking-wider">
                            <tr>
                                <th className="p-3.5 font-bold">Therapy</th>
                                <th className="p-3.5 font-bold">Element</th>
                                <th className="p-3.5 font-bold">Duration</th>
                                <th className="p-3.5 font-bold">Primary Indications</th>
                                <th className="p-3.5 font-bold">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100">
                            {TREATMENTS_DATA.map((item) => (
                                <tr key={item.id} className="hover:bg-amber-50/50 transition">
                                    <td className="p-3.5 font-bold text-stone-900">
                                        <div>{item.name}</div>
                                        <div className="text-[10px] text-stone-500 font-normal">{item.hindiName}</div>
                                    </td>
                                    <td className="p-3.5">
                                        <span className="font-semibold text-stone-800">{item.element}</span>
                                    </td>
                                    <td className="p-3.5 font-mono text-stone-600">{item.duration}</td>
                                    <td className="p-3.5 max-w-xs text-stone-600">
                                        {item.benefits[0]}, {item.benefits[1]}
                                    </td>
                                    <td className="p-3.5">
                                        <button
                                            onClick={() => setDetailModalItem(item)}
                                            className="text-[#244c8c] hover:underline font-bold"
                                        >
                                            View Protocol
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* =========================================================================
          8. PATIENT FAQS ACCORDION
         ========================================================================= */}
            <section id="faqs" className="bg-[#FAF8F5] border-t border-stone-200 py-16 px-4">
                <div className="max-w-4xl mx-auto space-y-6">
                    <div className="text-center">
                        <span className="text-xs font-bold text-[#ea7b11] uppercase tracking-widest">
                            FREQUENTLY ASKED QUESTIONS
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-serif font-black text-stone-900 mt-1">
                            Common Questions About Naturopathy
                        </h2>
                    </div>

                    <div className="space-y-3 pt-4">
                        {[
                            {
                                q: 'What is the philosophy behind Naturopathy at Gayatri Dham, Sendhwa?',
                                a: 'Rooted in Vedamurti Pandit Shriram Sharma Acharya Ji’s Yug Nirman Yojana, our center treats root causes without synthetic medicines. We believe the human body is formed of the Panchamahabhutas (Earth, Water, Fire, Air, Space) and whenever any imbalance occurs, applying these natural elements stimulates innate self-healing powers.'
                            },
                            {
                                q: 'Are treatments outpatient (OPD) or do I need to register for residential stay?',
                                a: 'Both are available. Local patients can take OPD consultations and individual therapies between 7:00 AM and 6:00 PM. For deep chronic diseases (Arthritis, Chronic Gastritis, Diabetes, Sciatica), we strongly recommend our 7-Day Residential Kaya Kalpa Shibir with Sattvic Ashram stay and Gaushala diet.'
                            },
                            {
                                q: 'What preparations are required prior to Mud Therapy or Hydrotherapy?',
                                a: 'Patients should drink 1-2 glasses of pure water. All digestive therapies are performed either early morning fasting or at least 2.5 hours after light fruit intake. We provide clean natural cotton towels and wrappers.'
                            },
                            {
                                q: 'Are treatments safe for elderly individuals with joint pain?',
                                a: 'Yes. Every treatment protocol is individually tuned by qualified Vaidyas. Frail elderly patients receive gentle warm herbal steam, localized earthen knee wraps, and mild spinal hydro sprays without any strenuous physical stress.'
                            }
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-white border border-stone-200 rounded-lg overflow-hidden shadow-xs">
                                <button
                                    onClick={() => setExpandedFaq(expandedFaq === idx ? -1 : idx)}
                                    className="w-full text-left p-4 sm:p-5 flex justify-between items-center gap-3 hover:bg-stone-50 transition"
                                >
                                    <span className="font-serif font-bold text-sm text-stone-900">{faq.q}</span>
                                    <ChevronDown
                                        className={`w-4 h-4 text-stone-500 transition-transform duration-200 shrink-0 ${expandedFaq === idx ? 'transform rotate-180 text-[#ea7b11]' : ''
                                            }`}
                                    />
                                </button>
                                {expandedFaq === idx && (
                                    <div className="p-4 sm:p-5 pt-0 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 bg-stone-50/50">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =========================================================================
          9. DETAIL PROTOCOL MODAL (Comprehensive Clinical Information)
         ========================================================================= */}
            {detailModalItem && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-white max-w-2xl w-full rounded-xl border border-stone-200 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
                        {/* Header */}
                        <div className="bg-[#1b3d75] text-white p-5 flex justify-between items-start">
                            <div>
                                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                                    {detailModalItem.hindiName}
                                </span>
                                <h3 className="font-serif font-bold text-xl text-white mt-0.5">
                                    {detailModalItem.name}
                                </h3>
                                <span className="text-xs text-blue-200 font-medium">
                                    Associated Element: {detailModalItem.element} • {detailModalItem.duration}
                                </span>
                            </div>
                            <button
                                onClick={() => setDetailModalItem(null)}
                                className="text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Scrollable Body */}
                        <div className="p-6 space-y-4 overflow-y-auto text-xs sm:text-sm text-stone-700 leading-relaxed">
                            <div className="h-44 w-full rounded-lg overflow-hidden">
                                <img
                                    src={detailModalItem.image}
                                    alt={detailModalItem.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div>
                                <h4 className="font-bold text-stone-900 text-xs uppercase tracking-wider mb-1">
                                    Therapy Description & Method
                                </h4>
                                <p className="text-stone-600 text-xs">{detailModalItem.fullDesc}</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-stone-50 p-4 rounded-lg border border-stone-200 text-xs">
                                <div>
                                    <span className="font-bold text-stone-900 block mb-1">Clinical Benefits:</span>
                                    <ul className="space-y-1 text-stone-600 list-disc list-inside">
                                        {detailModalItem.benefits && detailModalItem.benefits.length > 0 ? (
                                            detailModalItem.benefits.map((b: string, i: number) => (
                                                <li key={i}>{b}</li>
                                            ))
                                        ) : (
                                            <li>Natural rejuvenation and holistic metabolic balance.</li>
                                        )}
                                    </ul>
                                </div>
                                <div>
                                    <span className="font-bold text-rose-800 block mb-1">Contraindications:</span>
                                    <p className="text-stone-600">{detailModalItem.contraindications}</p>

                                    <span className="font-bold text-emerald-800 block mt-3 mb-1">Vaidya's Regimen Advice:</span>
                                    <p className="text-stone-600 italic">"{detailModalItem.vaidyaTip}"</p>
                                </div>
                            </div>

                            <div className="flex justify-between items-center text-xs border-t border-stone-100 pt-3">
                                <span className="text-stone-500">
                                    Standard Seva Contribution: <strong className="text-stone-900">{detailModalItem.sevaContribution}</strong>
                                </span>
                            </div>
                        </div>

                        {/* Footer Buttons */}
                        <div className="bg-stone-50 p-4 border-t border-stone-200 flex justify-end gap-3">
                            <button
                                onClick={() => setDetailModalItem(null)}
                                className="px-4 py-2 border border-stone-300 text-stone-700 font-bold text-xs uppercase rounded-lg hover:bg-stone-100"
                            >
                                Close
                            </button>
                            <button
                                onClick={() => {
                                    const item = detailModalItem;
                                    setDetailModalItem(null);
                                    handleOpenConsultation(item.name);
                                }}
                                className="px-5 py-2 bg-[#ea7b11] hover:bg-[#d66e0b] text-white font-bold text-xs uppercase rounded-lg shadow"
                            >
                                Book This Treatment
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* =========================================================================
          10. CONSULTATION & APPOINTMENT MODAL
         ========================================================================= */}
            {consultModalOpen && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
                    <div className="bg-white max-w-lg w-full rounded-xl border border-stone-200 shadow-2xl p-6 space-y-4 animate-in fade-in zoom-in-95 duration-200">
                        <div className="flex justify-between items-start border-b border-stone-200 pb-3">
                            <div>
                                <span className="text-[10px] font-bold text-[#ea7b11] uppercase tracking-wider">
                                    OPD & RESIDENTIAL RETREAT REGISTRATION
                                </span>
                                <h3 className="font-serif font-bold text-lg text-stone-900">
                                    Schedule Vaidya Consultation
                                </h3>
                            </div>
                            <button
                                onClick={() => setConsultModalOpen(false)}
                                className="text-stone-400 hover:text-stone-700"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {consultFormSuccess ? (
                            <div className="text-center py-8 space-y-3">
                                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
                                <h4 className="font-serif font-bold text-xl text-stone-900">
                                    Pranam! Appointment Request Received
                                </h4>
                                <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
                                    Our reception desk at Gayatri Dham Sendhwa will connect via WhatsApp/Call at{' '}
                                    <strong>{consultFormData.phone || '+91 94250 88219'}</strong> to confirm your pulse reading slot.
                                </p>
                                <button
                                    onClick={() => setConsultModalOpen(false)}
                                    className="mt-4 bg-[#244c8c] text-white text-xs font-bold px-6 py-2.5 rounded-lg uppercase"
                                >
                                    Done
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleConsultSubmit} className="space-y-3.5 text-xs">
                                {consultPreselectedTreatment && (
                                    <div className="p-2.5 bg-amber-50 border border-amber-200 rounded text-amber-900 font-semibold text-xs">
                                        Inquiring for: {consultPreselectedTreatment}
                                    </div>
                                )}

                                <div>
                                    <label className="block font-bold text-stone-700 mb-1 uppercase">Patient Full Name *</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Sri / Smt. ..."
                                        value={consultFormData.name}
                                        onChange={(e) => setConsultFormData({ ...consultFormData, name: e.target.value })}
                                        className="w-full p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#244c8c]"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block font-bold text-stone-700 mb-1 uppercase">WhatsApp Phone *</label>
                                        <input
                                            type="tel"
                                            required
                                            placeholder="+91 ..."
                                            value={consultFormData.phone}
                                            onChange={(e) => setConsultFormData({ ...consultFormData, phone: e.target.value })}
                                            className="w-full p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#244c8c]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-bold text-stone-700 mb-1 uppercase">City / State *</label>
                                        <input
                                            type="text"
                                            required
                                            placeholder="e.g. Indore / Sendhwa"
                                            value={consultFormData.city}
                                            onChange={(e) => setConsultFormData({ ...consultFormData, city: e.target.value })}
                                            className="w-full p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#244c8c]"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <div>
                                        <label className="block font-bold text-stone-700 mb-1 uppercase">Preferred Date</label>
                                        <input
                                            type="date"
                                            required
                                            value={consultFormData.date}
                                            onChange={(e) => setConsultFormData({ ...consultFormData, date: e.target.value })}
                                            className="w-full p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#244c8c]"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-bold text-stone-700 mb-1 uppercase">Primary Ailment</label>
                                        <select
                                            value={consultFormData.ailment}
                                            onChange={(e) => setConsultFormData({ ...consultFormData, ailment: e.target.value })}
                                            className="w-full p-2.5 border border-stone-300 rounded-lg font-semibold focus:outline-none focus:border-[#244c8c]"
                                        >
                                            <option>Acidity & Digestion</option>
                                            <option>Back, Lumbar & Sciatica</option>
                                            <option>Stress, Insomnia & BP</option>
                                            <option>Diabetes / Obesity</option>
                                            <option>General 7-Day Detox</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-bold text-stone-700 mb-1 uppercase">Health Notes (Optional)</label>
                                    <textarea
                                        rows={2}
                                        placeholder="Briefly describe your symptoms or medical history..."
                                        value={consultFormData.notes}
                                        onChange={(e) => setConsultFormData({ ...consultFormData, notes: e.target.value })}
                                        className="w-full p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#244c8c]"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#ea7b11] hover:bg-[#d66e0b] text-white py-3 rounded-lg font-bold uppercase tracking-wider text-xs shadow-md transition"
                                >
                                    Confirm Appointment Request
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            )}

            {/* =========================================================================
          11. FLOATING WHATSAPP BUTTON (Exact Reference at bottom-left)
         ========================================================================= */}
            <a
                href="https://wa.me/919425088219?text=Namaste%20Gayatri%20Dham%20Sendhwa,%20I%20want%20information%20about%20Naturopathy%20Treatments"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact on WhatsApp"
                className="fixed bottom-6 left-6 z-40 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 rounded-full shadow-2xl transition transform hover:scale-110 flex items-center justify-center group"
            >
                <MessageCircle className="w-7 h-7 fill-white" />
                <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold pl-0 group-hover:pl-2">
                    Naturopathy Helpdesk
                </span>
            </a>

            {/* =========================================================================
          12. COMPREHENSIVE VEDIC FOOTER (Screenshot 360 Style)
         ========================================================================= */}
            <footer className="bg-[#121619] text-stone-400 pt-14 pb-8 text-xs border-t-4 border-[#ea7b11]">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h4 className="text-white font-bold tracking-wider uppercase mb-3 text-xs border-b border-stone-800 pb-2">
                            Patron-Guide
                        </h4>
                        <p className="font-serif font-bold text-amber-200 text-sm">
                            वेदमूर्ति पं. श्रीराम शर्मा आचार्य जी
                        </p>
                        <p className="text-[11px] text-stone-400 mt-1 leading-relaxed">
                            Founder of Yug Nirman Yojana and All World Gayatri Pariwar. Pioneer of nature-based drugless rejuvenation.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold tracking-wider uppercase mb-3 text-xs border-b border-stone-800 pb-2">
                            Kendra Address
                        </h4>
                        <p className="text-white font-semibold">माँ भगवती योगनिसर्गोपचार केंद्र</p>
                        <p className="text-[11px] text-stone-400 mt-1 leading-relaxed">
                            Gayatri Dham, Mumbai-Agra Highway (NH-52),<br />
                            Sendhwa, Dist. Barwani - 451666 (M.P.), India
                        </p>
                        <p className="text-amber-300 font-bold mt-2">Helpline: +91 94250 88219</p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold tracking-wider uppercase mb-3 text-xs border-b border-stone-800 pb-2">
                            OPD & Clinic Hours
                        </h4>
                        <div className="space-y-1 text-[11px] text-stone-300">
                            <p>• Morning Shatkarma & Yoga: 6:00 AM - 7:30 AM</p>
                            <p>• Elemental Therapies: 8:30 AM - 1:00 PM</p>
                            <p>• Doctor Pulse Consultation: 4:00 PM - 6:30 PM</p>
                            <p>• Evening Sandhya Yagya: 6:30 PM - 7:15 PM</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold tracking-wider uppercase mb-3 text-xs border-b border-stone-800 pb-2">
                            Quick Portals
                        </h4>
                        <div className="space-y-2">
                            <button
                                onClick={() => handleOpenConsultation('OPD Pulse Check')}
                                className="w-full text-left bg-[#1b3d75] hover:bg-[#244c8c] text-white p-2 rounded text-xs font-bold transition"
                            >
                                Instant Doctor Appointment
                            </button>
                            <a
                                href="#ailment-finder"
                                className="block text-center border border-stone-700 hover:border-amber-400 text-stone-300 hover:text-white p-2 rounded text-xs transition"
                            >
                                Ailment Finder Tool
                            </a>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 mt-10 pt-6 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center text-[11px] text-stone-500 gap-2">
                    <span>© 2026 माँ भगवती योगनिसर्गोपचार केंद्र, गायत्री धाम सेंधवा. All rights reserved.</span>
                    <span className="italic text-stone-400">"प्रकृति के साथ सम्पूर्ण स्वास्थ्य"</span>
                </div>
            </footer>

        </div>
    );
}