import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// Simplified resources - removed HTTP backend for better performance
const resources = {  en: {
    default: {
      "welcome": "Welcome",
      "home": "Home",
      "about": "About Us", 
      "courses": "Courses",
      "guide": "Guide",
      "services": "Services",
      "company": "Company",
      "legal": "Legal",
      "language": "Language",
      "teaching": "Teaching",
      "assessments": "Assessments",
      "materials": "Materials",
      "contact": "Contact",
      "terms": "Terms of use",
      "privacy": "Privacy policy",
      "cookies": "Cookie policy",
      "whySaarthi": "Why Saarthi?",
      "whySaarthiDescription": "Saarthi is designed in such a way that it is accessible to students with various difficulties, like visual, auditory etc. Our platform will have features like captioning, audio to text, screen reading and many more. Saarthi will foster an inclusive learning environment by promoting diversity and acceptance. Visual aids like pictures, diagrams, and videos can make thoughts and ideas easier to understand for nonverbal or non-speaking people.",
      "comprehensivecurriculum": "Comprehensive Curriculum",
      "coversawiderangeoftopics": "Covers a wide range of topics",
      "onlinecoursecatalogs": "Online Course Catalogs",      "providingeasyaccesstothe": "Providing easy access to the differently-abled children",
      "trustedbyeducators": "Trusted by educators",
      "over100tutorswith300": "Over 100 tutors with 300+ lectures",
      "immersivelearningexperi": "Immersive Learning Experience",
      "childrenareTaughtwithfu": "Children are taught with fun and interactive sessions to enhance their learning potential",
      "includes": "Includes",      "supportofmultilingual": "Support of multilingual / Regional language content",
      "communicationandsociall": "Communication and social learning",      "discussionboardschatsf": "Discussion boards, Chats, Forums, Learning communities.",
      "ourVision": "OUR VISION",
      "ourVisionDescription": "Our aim is to provide equal opportunity of Education to everyone irrespective of their disability.",
      "science": "Science",
      "scienceDescription": "Science helps us understand the world around us by exploring natural phenomena, conducting experiments, and making observations.",      "mathematics": "Mathematics", 
      "mathematicsDescription": "Mathematics is the language of the universe, and it plays a vital role in various fields of science and technology.",      "english": "English",
      "englishDescription": "English is a global language, and it's essential for communication, literature, and many other aspects of life.",
      "goToCourse": "GO TO COURSE",
      "revScheme": "REV-2019'C' Scheme",      "home": "HOME",
      "aboutus": "ABOUT US", 
      "courses": "COURSES",
      "guide": "GUIDE",
      "profile": "Profile",
      "signout": "Sign out",
      "signin": "Sign In",
      "current": "Current",
      "active": "Active",
      "tagline": "Empowering Abilities,",
      "taglineSecond": "Unlocking Potential: Education for All",
      "hindi": "Hindi",
      "subjectsTaught": "Subjects Taught",
      "profile": "Profile",
      "signout": "Sign out",
      "signin": "Sign In",
      "current": "Current",
      "active": "Active",
      "tagline": "Empowering Abilities,",
      "taglineSecond": "Unlocking Potential: Education for All"
    }
  },  hi: {
    default: {
      "welcome": "स्वागत",
      "home": "होम",
      "about": "हमारे बारे में",
      "courses": "पाठ्यक्रम",
      "guide": "गाइड",
      "services": "सेवाएं",
      "company": "कंपनी",
      "legal": "कानूनी",
      "language": "भाषा",
      "teaching": "शिक्षण",
      "assessments": "मूल्यांकन",
      "materials": "सामग्री",
      "contact": "संपर्क",
      "terms": "उपयोग की शर्तें",
      "privacy": "गोपनीयता नीति",
      "cookies": "कुकी नीति",
      "whySaarthi": "साअरथी क्यों?",
      "whySaarthiDescription": "साअरथी इस तरह से डिज़ाइन किया गया है कि यह विभिन्न कठिनाइयों वाले छात्रों के लिए सुलभ है, जैसे दृश्य, श्रवण आदि। हमारे प्लेटफ़ॉर्म में कैप्शनिंग, ऑडियो टू टेक्स्ट, स्क्रीन रीडिंग और कई अन्य सुविधाएं होंगी। साअरथी विविधता और स्वीकृति को बढ़ावा देकर एक समावेशी शिक्षण वातावरण को बढ़ावा देगा।",
      "comprehensivecurriculum": "व्यापक पाठ्यक्रम",
      "coversawiderangeoftopics": "विषयों की विस्तृत श्रृंखला को कवर करता है",
      "onlinecoursecatalogs": "ऑनलाइन कोर्स कैटलॉग",      "providingeasyaccesstothe": "विकलांग बच्चों को आसान पहुंच प्रदान करना",
      "trustedbyeducators": "शिक्षकों द्वारा भरोसेमंद",
      "over100tutorswith300": "300+ व्याख्यानों के साथ 100 से अधिक शिक्षक",
      "immersivelearningexperi": "इमर्सिव लर्निंग एक्सपीरियंस",
      "childrenareTaughtwithfu": "बच्चों को मजेदार और इंटरैक्टिव सत्रों के साथ पढ़ाया जाता है",
      "includes": "शामिल है",      "supportofmultilingual": "बहुभाषी / क्षेत्रीय भाषा सामग्री का समर्थन",
      "communicationandsociall": "संचार और सामाजिक शिक्षा",      "discussionboardschatsf": "चर्चा बोर्ड, चैट, फोरम, शिक्षण समुदाय।",
      "ourVision": "हमारा विजन",
      "ourVisionDescription": "हमारा लक्ष्य हर व्यक्ति को उनकी विकलांगता के बावजूद शिक्षा का समान अवसर प्रदान करना है।",
      "science": "विज्ञान",
      "scienceDescription": "विज्ञान प्राकृतिक घटनाओं की खोज, प्रयोग करने और अवलोकन करके हमारे आसपास की दुनिया को समझने में मदद करता है।",      "mathematics": "गणित",
      "mathematicsDescription": "गणित ब्रह्मांड की भाषा है, और यह विज्ञान और प्रौद्योगिकी के विभिन्न क्षेत्रों में महत्वपूर्ण भूमिका निभाता है।",      "english": "अंग्रेजी",
      "englishDescription": "अंग्रेजी एक वैश्विक भाषा है, और यह संचार, साहित्य और जीवन के कई अन्य पहलुओं के लिए आवश्यक है।",
      "goToCourse": "कोर्स पर जाएं",
      "revScheme": "REV-2019'C' योजना",      "home": "होम",
      "aboutus": "हमारे बारे में",
      "courses": "पाठ्यक्रम", 
      "guide": "गाइड",
      "profile": "प्रोफाइल",
      "signout": "साइन आउट",
      "signin": "साइन इन",
      "current": "वर्तमान",
      "active": "सक्रिय",
      "tagline": "क्षमताओं को सशक्त बनाना,",
      "taglineSecond": "संभावनाओं को अनलॉक करना: सभी के लिए शिक्षा",
      "hindi": "हिंदी",
      "subjectsTaught": "पढ़ाए गए विषय"
    }
  },mr: {
    default: {
      "welcome": "स्वागत",
      "home": "घर",
      "about": "आमच्याबद्दल",
      "courses": "अभ्यासक्रम",
      "guide": "मार्गदर्शक",
      "services": "सेवा",
      "company": "कंपनी",
      "legal": "कायदेशीर",
      "language": "भाषा",
      "teaching": "शिक्षण",
      "assessments": "मूल्यमापन",
      "materials": "साहित्य",
      "contact": "संपर्क",
      "terms": "वापराच्या अटी",
      "privacy": "गोपनीयता धोरण",
      "cookies": "कुकी धोरण",
      "whySaarthi": "साअरथी का?",
      "whySaarthiDescription": "साअरथी अशा प्रकारे डिझाइन केले आहे की ते दृश्य, श्रवण इत्यादी विविध अडचणी असणाऱ्या विद्यार्थ्यांसाठी प्रवेशयोग्य आहे. आमच्या प्लॅटफॉर्ममध्ये कॅप्शनिंग, ऑडिओ टू टेक्स्ट, स्क्रीन रीडिंग आणि बरेच काही सुविधा असतील.",
      "comprehensivecurriculum": "व्यापक अभ्यासक्रम",
      "coversawiderangeoftopics": "विषयांच्या विस्तृत श्रेणीला समावेश करते",
      "onlinecoursecatalogs": "ऑनलाइन कोर्स कॅटलॉग",      "providingeasyaccesstothe": "विकलांग मुलांना सहज प्रवेश प्रदान करणे",
      "trustedbyeducators": "शिक्षकांकडून विश्वसनीय",
      "over100tutorswith300": "300+ व्याख्यानांसह 100+ शिक्षक",
      "immersivelearningexperi": "इमर्सिव्ह लर्निंग एक्सपीरियन्स",
      "childrenareTaughtwithfu": "मुलांना मजेदार आणि परस्परसंवादी सत्रांसह शिकवले जाते",
      "includes": "समाविष्ट",      "supportofmultilingual": "बहुभाषिक / प्रादेशिक भाषा सामग्रीचे समर्थन",
      "communicationandsociall": "संवाद आणि सामाजिक शिक्षण",      "discussionboardschatsf": "चर्चा बोर्ड, चॅट्स, फोरम, शिक्षण समुदाय.",
      "ourVision": "आमची दृष्टी",
      "ourVisionDescription": "आमचे उद्दिष्ट प्रत्येकाला त्यांच्या अपंगत्वाची पर्वा न करता शिक्षणाची समान संधी प्रदान करणे आहे।",
      "science": "विज्ञान",
      "scienceDescription": "विज्ञान नैसर्गिक घटनांचा शोध, प्रयोग आणि निरीक्षण करून आपल्या सभोवतालच्या जगाला समजून घेण्यास मदत करते।",      "mathematics": "गणित",
      "mathematicsDescription": "गणित हे विश्वाची भाषा आहे, आणि विज्ञान आणि तंत्रज्ञानाच्या विविध क्षेत्रांमध्ये त्याची महत्त्वाची भूमिका आहे।",      "english": "इंग्रजी", 
      "englishDescription": "इंग्रजी ही एक जागतिक भाषा आहे, आणि ती संवाद, साहित्य आणि जीवनाच्या इतर अनेक बाबींसाठी आवश्यक आहे।",
      "goToCourse": "कोर्समध्ये जा", 
      "revScheme": "REV-2019'C' योजना",      "home": "होम",
      "aboutus": "आमच्याबद्दल",
      "courses": "अभ्यासक्रम",
      "guide": "मार्गदर्शक",
      "profile": "प्रोफाइल",
      "signout": "साइन आउट",
      "signin": "साइन इन", 
      "current": "वर्तमान",
      "active": "सक्रिय",
      "tagline": "क्षमता सशक्त करणे,",
      "taglineSecond": "संभाव्यता अनलॉक करणे: सर्वांसाठी शिक्षण",
      "hindi": "हिंदी",
      "subjectsTaught": "शिकवलेले विषय"
    }
  }
};

// Simplified initialization - no HTTP backend
i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    
    ns: ["default"],
    defaultNS: "default",

    supportedLngs: ["en","hi","mr"],
    
    // Optimize for performance
    load: 'languageOnly',
    
    interpolation: {
      escapeValue: false
    },
    
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    
    // Reduce processing overhead
    debug: false,
    initImmediate: false
  })