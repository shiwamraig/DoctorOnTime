import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
import profile_pic from "./profile_pic.png";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./logo.png";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import doc15 from "./doc15.png";
import Dermatologist from "./Dermatologist.svg";
import Gastroenterologist from "./Gastroenterologist.svg";
import General_physician from "./General_physician.svg";
import Gynecologist from "./Gynecologist.svg";
import Neurologist from "./Neurologist.svg";
import Pediatricians from "./Pediatricians.svg";

export const assets = {
  appointment_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

export const specialityData = [
  {
    speciality: "General physician",
    image: General_physician,
  },
  {
    speciality: "Gynecologist",
    image: Gynecologist,
  },
  {
    speciality: "Dermatologist",
    image: Dermatologist,
  },
  {
    speciality: "Pediatricians",
    image: Pediatricians,
  },
  {
    speciality: "Neurologist",
    image: Neurologist,
  },
  {
    speciality: "Gastroenterologist",
    image: Gastroenterologist,
  },
];

export const doctors = [
  {
    _id: "doc1",
    name: "Dr. Rudra Jain",
    image: doc1,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Rudra Jain is a dedicated general physician with a strong focus on lifestyle-related illnesses, preventive healthcare, and early diagnosis. He believes in treating the root cause and empowering patients through health education.",
    fees: 500,
    address: {
      line1: "Civil Lines",
      line2: "Jaipur, Rajasthan",
    },
  },
  {
    _id: "doc2",
    name: "Dr. Pradeep Lamba",
    image: doc2,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "8 Years",
    about:
      "Dr. Pradeep Lamba provides comprehensive gynecological care, including menstrual disorders, fertility treatments, pregnancy management, and menopause support. He combines clinical precision with empathetic counseling.",
    fees: 700,
    address: {
      line1: "Sector 21",
      line2: "Faridabad, Haryana",
    },
  },
  {
    _id: "doc3",
    name: "Dr. Sarita Patel",
    image: doc3,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Year",
    about:
      "Dr. Sarita Patel offers advanced skincare treatments, focusing on acne, pigmentation, hair loss, and cosmetic dermatology. She is passionate about helping patients feel confident in their skin.",
    fees: 350,
    address: {
      line1: "MG Road",
      line2: "Indore, Madhya Pradesh",
    },
  },
  {
    _id: "doc4",
    name: "Dr. Chetak Singh",
    image: doc4,
    speciality: "Pediatricians",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Chetak Singh specializes in newborn and child healthcare. His expertise includes vaccinations, growth monitoring, and treating common pediatric infections with a child-friendly approach.",
    fees: 600,
    address: {
      line1: "Vikas Nagar",
      line2: "Lucknow, Uttar Pradesh",
    },
  },
  {
    _id: "doc5",
    name: "Dr. Jayanti Garg",
    image: doc5,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Jayanti Garg has in-depth expertise in treating neurological conditions like migraines, epilepsy, stroke, and nerve disorders. She prioritizes a detailed diagnosis and long-term patient wellness.",
    fees: 700,
    address: {
      line1: "Sector 5",
      line2: "New Delhi, India",
    },
  },
  {
    _id: "doc6",
    name: "Dr. Anjali Walia",
    image: doc6,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Anjali Walia offers neurological care with a compassionate and methodical approach. Her practice includes managing brain, spinal cord, and peripheral nerve disorders using evidence-based techniques.",
    fees: 600,
    address: {
      line1: "Sector 7",
      line2: "Chandigarh, Punjab",
    },
  },
  {
    _id: "doc7",
    name: "Dr. Chandan Das",
    image: doc7,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Chandan Das provides personalized care for chronic and seasonal illnesses, managing conditions like diabetes, hypertension, and infections with a preventive mindset.",
    fees: 400,
    address: {
      line1: "Bistupur",
      line2: "Jamshedpur, Jharkhand",
    },
  },
  {
    _id: "doc8",
    name: "Dr. Taniya Negi",
    image: doc8,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Taniya Negi is known for her expertise in women’s reproductive health, handling pregnancy, PCOS, infertility, and hormonal imbalances with personalized treatment plans.",
    fees: 450,
    address: {
      line1: "Laxmi Nagar",
      line2: "Delhi, India",
    },
  },
  {
    _id: "doc9",
    name: "Dr. Aman Yadav",
    image: doc9,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Aman Yadav specializes in clinical and aesthetic dermatology, offering treatments for chronic skin conditions and cosmetic concerns with a patient-first approach.",
    fees: 300,
    address: {
      line1: "CRPF CAMP",
      line2: "Durgapur, West Bengal",
    },
  },
  {
    _id: "doc10",
    name: "Dr. Jayprakash Kisan",
    image: doc10,
    speciality: "Pediatricians",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Jayprakash Kisan has a warm and engaging approach to pediatric care, treating newborns to adolescents and guiding parents through every stage of child development.",
    fees: 500,
    address: {
      line1: "Rajendra Nagar",
      line2: "Patna, Bihar",
    },
  },
  {
    _id: "doc11",
    name: "Dr. Zeenat Khan",
    image: doc11,
    speciality: "Gastroenterologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Zeenat Khan treats a wide range of digestive issues, including acid reflux, IBS, ulcers, and liver conditions. She focuses on dietary planning and long-term digestive health.",
    fees: 550,
    address: {
      line1: "Anna Nagar",
      line2: "Chennai, Tamil Nadu",
    },
  },
  {
    _id: "doc12",
    name: "Dr. Prateek Hegde",
    image: doc12,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Prateek Hegde manages brain and nerve disorders with precision, treating conditions like seizures, Parkinson’s disease, and stroke-related complications.",
    fees: 650,
    address: {
      line1: "JP Nagar",
      line2: "Bangalore, Karnataka",
    },
  },
  {
    _id: "doc13",
    name: "Dr. Mahendra Apte",
    image: doc13,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Mahendra Apte provides complete primary care for individuals and families, managing lifestyle diseases and promoting preventive health through regular check-ups.",
    fees: 450,
    address: {
      line1: "Dadar West",
      line2: "Mumbai, Maharashtra",
    },
  },
  {
    _id: "doc14",
    name: "Dr. Riya Malhotra",
    image: doc14,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Riya Malhotra offers expert care for women’s health issues including prenatal care, infertility, menstrual disorders, and menopausal support with a compassionate touch.",
    fees: 500,
    address: {
      line1: "Salt Lake",
      line2: "Kolkata, West Bengal",
    },
  },
  {
    _id: "doc15",
    name: "Dr. Anu Haldar",
    image: doc15,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Anu Haldar is known for her work in treating skin, hair, and nail disorders. She combines clinical expertise with modern therapies to help patients achieve lasting results.",
    fees: 350,
    address: {
      line1: "Bapu Nagar",
      line2: "Ahmedabad, Gujarat",
    },
  },
];

