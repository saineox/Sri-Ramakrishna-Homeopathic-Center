export type Locale = 'en' | 'mr';

export const translations = {
  en: {
    // Navigation
    nav_home: "Home",
    nav_about: "About Dr. Gavde",
    nav_services: "Services",
    nav_diabetes: "Diabetes Care",
    nav_clinics: "Find Clinic",
    nav_contact: "Contact",
    nav_book: "Book Appointment ✨",
    nav_portal: "Patient Portal",
    
    // Bottom Bar
    bottom_call: "Call Now",
    bottom_whatsapp: "WhatsApp",
    bottom_book: "Book Slot",

    // Hero Section
    hero_badge: "25+ Years of Natural Healing",
    hero_say_no: "Say NO to",
    hero_diabetes: "Diabetes",
    hero_medicines: "Unwanted Medicines",
    hero_insulin: "Insulin Injections",
    hero_say_yes: "Say YES to",
    hero_health: "Healthy Life with Proper Diet",
    hero_discipline: "Exercise & Discipline",
    hero_homeopathy: "Rediscovered Homeopathy",
    hero_tagline: "Complete Homeopathic Treatment & Consultation",
    hero_cta_primary: "Book Free Consultation →",
    hero_cta_secondary: "Watch Success Stories ▶",
    hero_experience: "25+ Years Experience",
    hero_healed: "15,000+ Lives Transformed",
    hero_certified: "AYUSH Certified",

    // Trust strip
    trust_exp_desc: "Dedicated clinical practice",
    trust_healed_desc: "Patients treated successfully",
    trust_rating_desc: "Google review average",
    trust_success_desc: "In chronic lifestyle cases",
    trust_certified_desc: "Govt of India standards",

    // About Section
    about_title: "The Healer's Journey",
    about_subtitle: "About Dr. Nandkumar Krishna Gavde",
    about_text_1: "For 25 years, Dr. Nandkumar Krishna Gavde has walked a different path. While modern medicine often prescribed endless pills and rising dosages, he dedicated his life to rediscovering the deep healing power of constitutional homeopathy.",
    about_text_2: "His approach combines precise natural remedies, tailored regional nutrition (Bajra, Karela, Jamun), and structured physical discipline to stimulate the body's self-healing mechanisms. He believes that chronic diseases like diabetes are not life sentences, but imbalances that can be corrected.",
    about_quote: "The body is capable of healing itself — when given the right guidance.",
    about_quote_author: "Dr. N. K. Gavde, M.D. (Hom)",

    // Services Section
    services_badge: "What We Heal",
    services_title: "Comprehensive Homeopathic Care",
    services_subtitle: "Scientific, constitutional treatment targeting root causes, not just symptom suppression.",
    services_learn_more: "Learn More",
    
    specialties: {
      skin: {
        title: "Skin Disorders (त्वचा रोग)",
        desc: "Complete natural cure for eczema, psoriasis, chronic allergies, and acne without steroids."
      },
      ent: {
        title: "ENT & Throat (कान, नाक व घसा)",
        desc: "Effective management of chronic sinusitis, tonsillitis, allergic rhinitis, and hearing issues."
      },
      lungs: {
        title: "Respiratory Care (छातीचे विकार)",
        desc: "Treatment for asthma, chronic bronchitis, dry cough, and seasonal lung congestion."
      },
      women: {
        title: "Women & Child (स्त्री-बालरोग)",
        desc: "Specialized care for PCOD, menstrual irregularities, thyroid disorders, and pediatric immunity."
      },
      mental: {
        title: "Mental Wellness (मानसिक विकार)",
        desc: "Support for anxiety, depression, insomnia, migraine, and chronic stress management."
      },
      digestive: {
        title: "Digestive Health (पोटाचे विकार)",
        desc: "Relief from chronic acidity, IBS, peptic ulcers, constipation, and fatty liver issues."
      },
      kidney: {
        title: "Kidney & Urinary (मूत्रपिंड विकार)",
        desc: "Treatment for kidney stones, recurrent UTIs, prostate enlargement, and urinary issues."
      },
      joints: {
        title: "Bones & Joints (सांध्यांचे विकार)",
        desc: "Natural relief for osteoarthritis, rheumatoid arthritis, gout, sciatica, and back pain."
      },
      diabetes: {
        title: "Diabetes Care (मधुमेह नियंत्रण)",
        desc: "Our flagship program designed to reduce insulin dependence and manage sugar levels naturally."
      }
    },

    // Food Science Section
    food_title: "Healing Food Science",
    food_subtitle: "Every dietary recommendation in our program is backed by published scientific evidence and traditional clinical wisdom.",
    food_evidence_level: "Evidence Strength",
    food_how_to_use: "How we use it:",
    food_research_source: "View Scientific Studies",
    food_disclaimer: "Disclaimer: This information is for educational purposes. Consult Dr. Gavde for personalized guidelines.",
    
    // Patient Timeline
    timeline_title: "A Typical Reversal Timeline",
    timeline_subtitle: "A standard 9-month journey of a patient recovering from high blood sugar under our 3D program.",
    timeline_m0: "Month 0: The Starting Point",
    timeline_m0_desc: "HbA1c: 9.2% | Insulin: 30 units/day. Patient joins the 3D program reporting fatigue, high blood glucose, and dependence on multiple medications.",
    timeline_m3: "Month 3: Foundation",
    timeline_m3_desc: "HbA1c: 7.8% | Insulin: 20 units/day. Integration of low-GI diet, simple daily yoga, and initial constitutional homeopathic remedies. Energy levels improve.",
    timeline_m6: "Month 6: Consolidation",
    timeline_m6_desc: "HbA1c: 6.5% | Insulin: 10 units/day. Insulin dosage reduced by 66% under medical guidance. Body mass index normalizes, and sugar spikes stabilize.",
    timeline_m9: "Month 9: Reversal Reached",
    timeline_m9_desc: "HbA1c: 5.9% | Insulin: 0 units. Insulin-free life achieved! Blood sugar maintained purely through diet, exercise, and occasional maintenance homeopathy.",

    // Testimonials
    test_title: "Voices of Recovery",
    test_subtitle: "Real stories from verified patients who reclaimed their health and reversed chronic conditions.",
    test_verified: "Verified Patient",
    test_condition: "Condition:",
    test_duration: "Duration:",
    test_months: "months",

    // Booking Widget
    book_title: "Secure Your Consultation Slot",
    book_subtitle: "Choose a convenient date and time slot. We will confirm your appointment instantly via WhatsApp.",
    book_date_label: "1. Select Date",
    book_time_label: "2. Select Time Slot",
    book_morning_session: "Morning Session (9:00 AM - 2:00 PM)",
    book_evening_session: "Evening Session (5:00 PM - 10:00 PM)",
    book_details_label: "3. Enter Your Details",
    book_name_placeholder: "Your Full Name *",
    book_phone_placeholder: "WhatsApp Number (10 digits) *",
    book_concern_label: "Primary Health Concern *",
    book_concern_placeholder: "Select your primary concern",
    book_summary_title: "Booking Summary",
    book_summary_date: "Date:",
    book_summary_time: "Time:",
    book_summary_doctor: "Consultant:",
    book_summary_dr_name: "Dr. N. K. Gavde",
    book_btn_confirm: "Confirm & Request via WhatsApp",
    book_success_note: "Clicking will open WhatsApp to send your booking message directly to the clinic.",
    book_closed: "Closed",

    // Clinic locator
    clinic_title: "Visit Our Clinic",
    clinic_subtitle: "Visit Sri Ramakrishna Homeopathic Center in Gadhinglaj for in-person consultation and treatment.",
    clinic_name: "Sri Ramakrishna Homeopathic Center",
    clinic_dr: "Dr. Nandkumar Krishna Gavde",
    clinic_qual: "M.D. (Hom) • Homeopathic Consultant",
    clinic_address_label: "Address:",
    clinic_address_val: "Om Ganesha Sakul, Near Bank of Baroda, Tilak Path, Gadhinglaj, Kolhapur, Maharashtra - 416502",
    clinic_hours_label: "Hours:",
    clinic_hours_val: "By Appointment Only (Mon-Fri, Sun: 9 AM-2 PM, 5 PM-10 PM. Sat: Closed)",
    clinic_directions: "Get Directions on Google Maps",

    // Contact form
    contact_title: "Get Personalized Guidance",
    contact_subtitle: "Have a question? Send us a direct message and our team will get back to you immediately.",
    contact_urgency_label: "Urgency Level",
    contact_urgency_normal: "Normal Consultation",
    contact_urgency_urgent: "Urgent Review",
    contact_urgency_emergency: "Emergency Consultation",
    contact_message_placeholder: "Describe your symptoms, current medications, or questions...",
    contact_send: "Send Query via WhatsApp",

    // Notice
    notice_bold: "Important Notice:",
    notice_text: "Please call or message to confirm your appointment before visiting the clinic in person.",
    notice_call: "Call Clinic",
    notice_whatsapp: "WhatsApp Chat",

    // Blog Preview
    blog_title: "Health & Wellness Insights",
    blog_subtitle: "Educational resources on natural healing, diabetes control, and constitutional lifestyle.",
    blog_read_more: "Read Article",

    // Footer
    footer_desc: "Dedicated to holistic healing and natural lifestyle restoration through clinical homeopathy for over two decades.",
    footer_quick_links: "Quick Links",
    footer_specialties: "Specialties",
    footer_contact_support: "Contact & Support",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Service",
    footer_disclaimer: "Medical Disclaimer: Homeopathy supports natural healing. Always coordinate treatment changes with your doctor.",
    footer_rights: "All rights reserved."
  },
  mr: {
    // Navigation
    nav_home: "मुख्यपृष्ठ",
    nav_about: "डॉ. गावडे यांच्याबद्दल",
    nav_services: "सेवा",
    nav_diabetes: "मधुमेह उपचार",
    nav_clinics: "क्लिनिक शोधा",
    nav_contact: "संपर्क",
    nav_book: "अपॉइंटमेंट बुक करा ✨",
    nav_portal: "पेशंट पोर्टल",

    // Bottom Bar
    bottom_call: "कॉल करा",
    bottom_whatsapp: "व्हॉट्सॲप",
    bottom_book: "स्लॉट बुक करा",

    // Hero Section
    hero_badge: "२५+ वर्षे नैसर्गिक उपचार",
    hero_say_no: "नाही म्हणा",
    hero_diabetes: "मधुमेहाला",
    hero_medicines: "अनावश्यक गोळ्यांना",
    hero_insulin: "इन्सुलिन इंजेक्शनला",
    hero_say_yes: "हो म्हणा",
    hero_health: "योग्य आहारासह निरोगी आयुष्याला",
    hero_discipline: "व्यायाम आणि शिस्तीला",
    hero_homeopathy: "नव्याने शोधलेल्या होमिओपॅथीला",
    hero_tagline: "संपूर्ण होमिओपॅथी उपचार आणि समुपदेशन",
    hero_cta_primary: "मोफत सल्ला बुक करा →",
    hero_cta_secondary: "यशस्वी कथा पहा ▶",
    hero_experience: "२५+ वर्षे अनुभव",
    hero_healed: "१५,०००+ यशस्वी पेशंट",
    hero_certified: "AYUSH प्रमाणित",

    // Trust strip
    trust_exp_desc: "समर्पित वैद्यकीय सराव",
    trust_healed_desc: "यशस्वीरित्या बरे झालेले पेशंट",
    trust_rating_desc: "गूगल रिव्ह्यू सरासरी",
    trust_success_desc: "जुनाट जीवनशैली आजारांमध्ये",
    trust_certified_desc: "भारत सरकारचे निकष",

    // About Section
    about_title: "आरोग्य प्रवासाची कहाणी",
    about_subtitle: "डॉ. नंदकुमार कृष्ण गावडे",
    about_text_1: "गेल्या २५ वर्षांपासून डॉ. नंदकुमार कृष्ण गावडे यांनी एक वेगळी वाट निवडली आहे. जेथे आधुनिक औषधोपचार वारंवार गोळ्यांचे प्रमाण वाढवण्याचा सल्ला देतात, तेथे त्यांनी होमिओपॅथीच्या सखोल नैसर्गिक उपचार पद्धतीला समर्पित केले.",
    about_text_2: "त्यांच्या उपचार पद्धतीत अचूक नैसर्गिक औषधे, घरगुती पोषक आहार (बाजरी, कारले, जांभूळ) आणि नियमित शारीरिक व्यायाम यांचा समावेश असतो. मधुमेह हा जन्मठेप नसून शरीराचे संतुलन बिघडल्यामुळे होतो आणि तो दुरुस्त केला जाऊ शकतो, असा त्यांचा ठाम विश्वास आहे.",
    about_quote: "शरीर स्वतःच बरे होण्यास सक्षम आहे — योग्य मार्गदर्शन मिळाले तर.",
    about_quote_author: "डॉ. एन. के. गावडे, एम.डी. (होमिओपॅथी)",

    // Services Section
    services_badge: "आम्ही काय बरे करतो",
    services_title: "सर्वसमावेशक होमिओपॅथी उपचार",
    services_subtitle: "मूळ कारणावर उपचार करणारी वैज्ञानिक पद्धती, केवळ लक्षणे दाबणे नव्हे.",
    services_learn_more: "अधिक वाचा",
    
    specialties: {
      skin: {
        title: "त्वचा रोग",
        desc: "एक्झिमा, सोरायसिस, ॲलर्जी आणि पुरळ यावर विना-स्टेरॉइड नैसर्गिक आणि शाश्वत उपचार."
      },
      ent: {
        title: "कान, नाक व घसा",
        desc: "जुनाट सायनस, टॉन्सिल, ॲलर्जिक सर्दी आणि घशाच्या इन्फेक्शनवर प्रभावी उपचार."
      },
      lungs: {
        title: "छातीचे विकार",
        desc: "दमा, ब्रॉन्कायटिस, खोकला आणि फुफ्फुसाच्या त्रासांवर नैसर्गिक उपचार."
      },
      women: {
        title: "स्त्री-बालरोग",
        desc: "PCOD, मासिक पाळीच्या समस्या, थायरॉईड आणि लहान मुलांची प्रतिकारशक्ती वाढवणे."
      },
      mental: {
        title: "मानसिक आरोग्य",
        desc: "चिंता, नैराश्य, निद्रानाश, मायग्रेन आणि मानसिक तणाव यावर समुपदेशन व उपचार."
      },
      digestive: {
        title: "पोटाचे विकार",
        desc: "ॲसिडिटी, आयबीएस (IBS), अल्सर, बद्धकोष्ठता आणि फॅटी लिव्हरच्या त्रासांवर मात."
      },
      kidney: {
        title: "मूत्रपिंड विकार",
        desc: "मुतखडा (किडनी स्टोन), युरिन इन्फेक्शन आणि प्रोस्टेट वाढण्यावर यशस्वी उपचार."
      },
      joints: {
        title: "सांध्यांचे विकार",
        desc: "संधिवात, आमवात, सायटिका, मणक्याचे आजार आणि कंबरदुखीवर नैसर्गिक आराम."
      },
      diabetes: {
        title: "मधुमेह नियंत्रण",
        desc: "इन्सुलिनचे प्रमाण कमी करण्यासाठी आणि साखर नियंत्रित करण्यासाठी आमचा मुख्य ३D कार्यक्रम."
      }
    },

    // Food Science Section
    food_title: "आहार आणि विज्ञान",
    food_subtitle: "आमच्या कार्यक्रमातील प्रत्येक आहाराची शिफारस वैज्ञानिक पुरावे आणि क्लिनिकल अनुभवावर आधारित आहे.",
    food_evidence_level: "वैज्ञानिक पुरावा पातळी",
    food_how_to_use: "वापरण्याची पद्धत:",
    food_research_source: "वैज्ञानिक संशोधन पहा",
    food_disclaimer: "टीप: ही माहिती केवळ शैक्षणिक हेतूने आहे. वैयक्तिक सल्ल्यासाठी डॉ. गावडे यांच्याशी संपर्क साधा.",

    // Patient Timeline
    timeline_title: "मधुमेहमुक्तीचा प्रवास",
    timeline_subtitle: "आमच्या ३D कार्यक्रमांतर्गत पेशंटचा ९ महिन्यांचा यशस्वी साखरेवर नियंत्रण मिळवण्याचा प्रवास.",
    timeline_m0: "महिना ०: सुरुवात",
    timeline_m0_desc: "HbA1c: ९.२% | इन्सुलिन: ३० युनिट्स/दिवस. पेशंट थकवा, उच्च रक्तशर्करा आणि औषधांवरील अति-अवलंबित्व घेऊन कार्यक्रमात दाखल होतो.",
    timeline_m3: "महिना ३: पायाभरणी",
    timeline_m3_desc: "HbA1c: ७.८% | इन्सुलिन: २० युनिट्स/दिवस. कमी-GI आहार, नियमित सोपे योग आणि प्राथमिक होमिओपॅथी औषधांची सुरुवात.",
    timeline_m6: "महिना ६: प्रगती",
    timeline_m6_desc: "HbA1c: ६.५% | इन्सुलिन: १० युनिट्स/दिवस. वैद्यकीय देखरेखीखाली इन्सुलिनचे प्रमाण ६६% ने कमी झाले. वजन आणि शरीराची ऊर्जा सुधारली.",
    timeline_m9: "महिना ९: मधुमेहमुक्ती",
    timeline_m9_desc: "HbA1c: ५.९% | इन्सुलिन: ० युनिट्स. इन्सुलिन पूर्ण बंद! केवळ घरगुती आहार, नियमित व्यायाम आणि अल्प होमिओपॅथी औषधांद्वारे साखर पूर्ण नियंत्रणात.",

    // Testimonials
    test_title: "यशस्वी पेशंटचे अनुभव",
    test_subtitle: "औषधांशिवाय निरोगी आयुष्य जगणाऱ्या आणि मधुमेहमुक्त झालेल्या पेशंटचे प्रत्यक्ष अनुभव.",
    test_verified: "प्रमाणित पेशंट",
    test_condition: "आजार:",
    test_duration: "उपचार कालावधी:",
    test_months: "महिने",

    // Booking Widget
    book_title: "तुमचा भेटीचा वेळ बुक करा",
    book_subtitle: "सोयीस्कर तारीख आणि वेळ निवडा. आम्ही व्हॉट्सॲपवर त्वरित अपॉइंटमेंटची खात्री करू.",
    book_date_label: "१. तारीख निवडा",
    book_time_label: "२. वेळ निवडा",
    book_morning_session: "सकाळचे सत्र (सकाळी ९:०० ते दुपारी २:००)",
    book_evening_session: "संध्याकाळचे सत्र (सायंकाळी ५:०० ते रात्री १०:००)",
    book_details_label: "३. तुमची माहिती भरा",
    book_name_placeholder: "तुमचे पूर्ण नाव *",
    book_phone_placeholder: "व्हॉट्सॲप नंबर (१० अंकी) *",
    book_concern_label: "मुख्य आरोग्य समस्या *",
    book_concern_placeholder: "आरोग्य समस्या निवडा",
    book_summary_title: "भेटीचा तपशील",
    book_summary_date: "तारीख:",
    book_summary_time: "वेळ:",
    book_summary_doctor: "कन्सल्टंट:",
    book_summary_dr_name: "डॉ. एन. के. गावडे",
    book_btn_confirm: "व्हॉट्सॲपद्वारे बुक करा",
    book_success_note: "क्लिक केल्यानंतर व्हॉट्सॲप उघडेल आणि मेसेज थेट आमच्या क्लिनीकच्या क्रमांकावर पाठवला जाईल.",
    book_closed: "बंद",

    // Clinic locator
    clinic_title: "आमचे क्लिनिक",
    clinic_subtitle: "प्रत्यक्ष तपासणी आणि उपचारासाठी गडहिंगलज येथील श्रीरामकृष्ण होमिओपॅथिक सेंटरला भेट द्या.",
    clinic_name: "श्रीरामकृष्ण होमिओपैथिक सेंटर",
    clinic_dr: "डॉ. नंदकुमार कृष्ण गावडे",
    clinic_qual: "एम.डी. (होमिओपॅथी) • होमिओपॅथिक कन्सल्टंट",
    clinic_address_label: "पत्ता:",
    clinic_address_val: "ओम गणेशा सकुल, बँक ऑफ बडोदा जवळ, टिळक पथ, गडहिंगलज, कोल्हापूर, महाराष्ट्र - ४१६५०२",
    clinic_hours_label: "वेळ:",
    clinic_hours_val: "केवळ पूर्व-अपॉइंटमेंटनुसार (सोम-शुक्र, रवि: सकाळी ९-२, संध्याकाळी ५-१०. शनिवार: बंद)",
    clinic_directions: "गूगल मॅपवर दिशा मिळवा",

    // Contact form
    contact_title: "वैयक्तिक आरोग्य मार्गदर्शन",
    contact_subtitle: "काही प्रश्न आहेत का? आम्हाला संदेश पाठवा, आम्ही तुमच्याशी त्वरित संपर्क करू.",
    contact_urgency_label: "तातडीची पातळी",
    contact_urgency_normal: "सामान्य भेट",
    contact_urgency_urgent: "तातडीचे पुनरावलोकन",
    contact_urgency_emergency: "तातडीची वैद्यकीय चर्चा",
    contact_message_placeholder: "तुमची लक्षणे, सध्याची औषधे किंवा प्रश्न लिहा...",
    contact_send: "व्हॉट्सॲपद्वारे संदेश पाठवा",

    // Notice
    notice_bold: "महत्त्वाची सूचना:",
    notice_text: "क्लिनिकला भेट देण्यापूर्वी कृपया फोन किंवा संदेशाद्वारे अपॉइंटमेंट निश्चित करून यावे.",
    notice_call: "क्लिनीकला कॉल करा",
    notice_whatsapp: "व्हॉट्सॲप चॅट",

    // Blog Preview
    blog_title: "आरोग्य आणि जीवनशैली",
    blog_subtitle: "नैसर्गिक उपचार, मधुमेह नियंत्रण आणि निरोगी जीवनशैलीबद्दल डॉ. गावडे यांचे मार्गदर्शन.",
    blog_read_more: "लेख वाचा",

    // Footer
    footer_desc: "दोन दशकांहून अधिक काळ होमिओपॅथीद्वारे निरोगी जीवनशैली आणि नैसर्गिक उपचारांसाठी कटिबद्ध.",
    footer_quick_links: "जलद लिंक्स",
    footer_specialties: "आमचे विशेष उपचार",
    footer_contact_support: "संपर्क आणि मदत",
    footer_privacy: "गोपनीयता धोरण",
    footer_terms: "वापराच्या अटी",
    footer_disclaimer: "वैद्यकीय अस्वीकरण: होमिओपॅथी नैसर्गिक बरे होण्यास मदत करते. उपचारांमधील बदलांसाठी नेहमी मुख्य डॉक्टरांचा सल्ला घ्या.",
    footer_rights: "सर्व हक्क राखीव."
  }
};
