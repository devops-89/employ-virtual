import {
  ADDRESS_TYPE,
  CountryType,
  DETAILS_DATA,
  FOOTER_LINKS,
  HERO_CARD_PROPS,
  OFFER_CARD_PROPS,
  PARTNER_CARD_PROPS,
  SERVICE_CARD_PROPS,
  VIRTUAL_CARD_PROPS,
  WHY_EMPLOY_PROPS,
} from "@/utils/types";
import resource1 from "@/banner/talent.png";
import resource2 from "@/banner/zero-downtime.png";
import resource3 from "@/banner/zero-overheads.png";
import why1 from "@/homepage/why_employ/DEDICATED-EMPLOYEES.png";
import why2 from "@/homepage/why_employ/VALUE-FOR-MONEY.png";
import why3 from "@/homepage/why_employ/INFINITY-SHAPED-SKILLS.png";
import why4 from "@/homepage/why_employ/DIVERSE-EXPERIENCE.png";
import why5 from "@/homepage/why_employ/REAL-TIME-ASSISTANCE.png";
import why6 from "@/homepage/why_employ/TRUE-EMPLOYEES-1.png";
import remote1 from "@/homepage/remote-1.png";
import remote2 from "@/homepage/remote-2.png";
import remote3 from "@/homepage/remote-3.png";
import remote4 from "@/homepage/remote-4.png";
import { COLORS } from "@/utils/enum";
import suited1 from "@/homepage/suited/DEDICATED-MODEL-1.png";
import suited2 from "@/homepage/suited/CUSTOMISED-MODEL-1.png";
import suited3 from "@/homepage/suited/TEAM-MODEL-1.png";
import partner1 from "@/homepage/partner/right-cloud.png";
import partner2 from "@/homepage/partner/skechers.png";
import partner3 from "@/homepage/partner/infraguard.png";
import partner4 from "@/homepage/partner/avigna.png";
import partner5 from "@/homepage/partner/pensieve.png";
import partner6 from "@/homepage/partner/haute-baby.png";
import partner7 from "@/homepage/partner/kal-group.png";
import offer1 from "@/about-icon/VIRTUAL-RESOURCING.png";
import offer2 from "@/about-icon/WEBSITE-DEVELOPMENT.png";
import offer3 from "@/about-icon/DIGITAL-MEDIA.png";
import offer4 from "@/about-icon/workforce-solutions.png";
import offer5 from "@/about-icon/BRAND-SOLUTIONS.png";
import offer6 from "@/about-icon/D2C-SALES-MANAGEMENT.png";
import offer7 from "@/about-icon/3D-ARVR.png";
import offer8 from "@/about-icon/INFRASTRUCTURE-CLOUD.png";
import eye_on from "@/about-icon/KEEP-AN-EYE-ON.png";
import helping_hand from "@/about-icon/THE-HELPING-HAND.png";
import professionalism from "@/about-icon/PROFESSIONALISM.png";
import service1 from "@/services/services-icon/VIRTUAL-RESOURCING.png";
import service2 from "@/services/services-icon/INFRASTRUCTURE-CLOUD.png";
import service3 from "@/services/services-icon/BRAND-SOLUTIONS.png";
import service4 from "@/services/services-icon/DIGITAL-MEDIA.png";
import service5 from "@/services/services-icon/D2C-SALES-MANAGEMENT.png";
import service6 from "@/services/services-icon/workforce-solutions.png";
import service7 from "@/services/services-icon/WEBSITE-DEVELOPMENT.png";
import service8 from "@/services/services-icon/3D-ARVR.png";

export const NAVBAR_LINKS = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About Us",
    url: "/about-us",
  },
  {
    label: "Services",
    url: "/services",
  },
  {
    label: "Blog",
    url: "/blogs",
  },
  {
    label: "Contact Us",
    url: "/contact-us",
  },
];

export const HERO_CARD_DATA: HERO_CARD_PROPS[] = [
  {
    img: resource1,
    title: "TALENT ON-DEMAND",
    description:
      "Hire a dedicated, skilled remote employee in less than 8 hours",
  },
  {
    img: resource2,
    title: "ZERO OVERHEADS",
    description:
      "Say goodbye to profit-guzzling expenses like office rent, taxes, hardware, etc",
  },
  {
    img: resource3,
    title: "ZERO DOWNTIME",
    description: "No downtime, no being stranded midway in a project",
  },
];

export const WHY_EMPLOY_DATA: WHY_EMPLOY_PROPS[] = [
  {
    img: why1,
    title: "DEDICATED EMPLOYEES",
    description:
      "Handpicked dedicated resources who will work exclusively for you.",
    color: COLORS.BLACK,
  },
  {
    img: why2,
    title: "VALUE FOR MONEY",
    description:
      "Pay for your resource but leverage the expertise of our team.",
    color: COLORS.BLACK,
  },
  {
    img: why3,
    title: "INFINITY SHAPED SKILLS",
    description:
      "Collaboration between team and experts for the betterment of your project.",
    color: COLORS.BLACK,
  },
  {
    img: why4,
    title: "DIVERSE EXPERIENCE",
    description:
      "You are free to choose any junior, mid or senior level resource and build",
    color: COLORS.BLACK,
  },
  {
    img: why5,
    title: "REAL TIME ASSISTANCE",
    description:
      "Ask your team to work as per your time and merge the codes as per your preference.",
    color: COLORS.BLACK,
  },
  {
    img: why6,
    title: "TRUE EMPLOYEES",
    description:
      "Just happen to be working & reporting through a video screen instead of across the desk.",
    color: COLORS.BLACK,
  },
];

export const REMOTE_CARD_DATA: WHY_EMPLOY_PROPS[] = [
  {
    img: remote1,
    title: "BRIEF US",
    description:
      "Please share your requirement with us and we will get to match the right candidate with the right role.",
    color: COLORS.BLACK,
  },
  {
    img: remote2,
    title: "HAND PICK RESOURCE",
    description:
      "We will align them for you to interview them, test them & once satisfied, handpicked them.",
    color: COLORS.BLACK,
  },
  {
    img: remote3,
    title: "CHOOSE YOUR TEAM",
    description:
      "Put the selected candidates together to build your team and assign roles & responsibilities.",
    color: COLORS.BLACK,
  },
  {
    img: remote4,
    title: "GET GOING!",
    description:
      "Now you are ready for briefing and allocating the task & don't forget to review and take reports.",
    color: COLORS.BLACK,
  },
];

export const BEST_SUITED_CARD: WHY_EMPLOY_PROPS[] = [
  {
    img: suited1,
    title: "DEDICATED MODEL",
    description:
      "You get complete control over your programmer and project, by connecting with him on Google Meet or Teams for 8 Hrs.",
    color: COLORS.WHITE,
  },
  {
    img: suited3,
    title: "TEAM MODEL",
    description:
      "Pay for the equivalent of just one resource, but benefit from an entire team with mixed skill sets in multiple domains.",
    color: COLORS.WHITE,
  },
  {
    img: suited2,
    title: "CUSTOMISED MODEL",
    description:
      "Depending on the amount of work required, you can choose from 8-hour/day, 4-hour/day or Ad-Hoc Resources hiring options.",
    color: COLORS.WHITE,
  },
];

export const PARTNER_DATA: PARTNER_CARD_PROPS[] = [
  {
    img: partner1,
    name: "Right Cloud",
  },
  {
    img: partner2,
    name: "Skechers",
  },
  {
    img: partner3,
    name: "Infraguard",
  },
  {
    img: partner4,
    name: "Avigna",
  },
  {
    img: partner5,
    name: "Pensieve",
  },
  {
    img: partner6,
    name: "Haute Baby",
  },
  {
    img: partner7,
    name: "Kal Group",
  },
];

export const FOOTER_LINKS_URL: FOOTER_LINKS[] = [
  {
    heading: "Hire Resources",
    data: [
      {
        label: "Java Developer",
        url: "/hire-java-developer",
      },
      {
        label: "Python Developer",
        url: "/hire-python-developer",
      },
      {
        label: "Node Developer",
        url: "/hire-node-developer",
      },
      {
        label: "Angular Developer",
        url: "/hire-angular-developer",
      },
      {
        label: "React Developer",
        url: "/hire-react-developer",
      },
      {
        label: "Mern Stack Developer",
        url: "/hire-mern-stack-developer",
      },
    ],
  },
  {
    heading: "Quick Links",
    data: [
      {
        label: "Contact Us",
        url: "/contact-us",
      },
      {
        label: "Careers",
        url: "/careers",
      },
      {
        label: "Blogs",
        url: "/blogs",
      },
      {
        label: "Terms of use",
        url: "/terms-of-use",
      },
      {
        label: "Privacy Policy",
        url: "/privacy-policy",
      },
    ],
  },
];

export const ABOUT_FEATURES_CARD_DATA: FOOTER_LINKS[] = [
  {
    heading: "Features",
    data: [
      {
        label: "Dedicated Resources",
      },
      {
        label: "Team Sits Together",
      },
      {
        label: "Data Security",
      },
      {
        label: "Ease of Communication",
      },
      {
        label: "Access to Regular IT Support",
      },
      {
        label: "Intellectual Property Protection",
      },
      {
        label: "Professional Office Environment",
      },
      {
        label: "Resource Administration",
      },
      {
        label: "Accountability of Work",
      },
    ],
  },
  {
    heading: "Sectors",
    data: [
      {
        label: "Administration, Business Support",
      },
      {
        label: "Arts, Entertainment and Recreation Industry",
      },
      {
        label: "Education Industry ",
      },
      {
        label: "Finance and Insurance Industry",
      },
      {
        label: "Healthcare Industry",
      },
      {
        label: "Information Technology",
      },
      {
        label: "Manufacturing Industry",
      },
      {
        label: "Mining Industry",
      },
      {
        label: "Retail & Wholesale Trade",
      },
    ],
  },
];

export const OFFER_CARD_DATA: OFFER_CARD_PROPS[] = [
  {
    img: offer1,
    heading: "VIRTUAL RESOURCING",
    description:
      "The dedicated virtual employee you hire from employ virtual is only just a ping away. These resources makes working with your team as easy as being in the next cubicle, bridging the geographical distance and time zone difference.",
  },
  {
    img: offer2,
    heading: "WEBSITE DEVELOPMENT",
    description:
      "Employ virtual offers highly qualified offshore employees with a brief knowledge of Node, Python, REACT, PHP, HTML, AJAX, J2EE, PWA, Microservices etc. for Website Design and Development work on basically all frameworks.",
  },
  {
    img: offer3,
    heading: "Digital Media",
    description:
      "Employ virtual resources ideate, feel, breathe and live digital & are born to deliver fruitful and effective results to increase the satisfaction of the clients, be it SEO, SEM, SMO, SMM or performance marketing, these people deliver.",
  },
  {
    img: offer4,
    heading: "WORKFORCE SOLUTIONS",
    description:
      "Employ virtual enable its clients to reduce the cost while ensuring reliability, scalability, and manageability. We help finding talent effortlessly with our AI-powered methodology, screening 100s of CVs to find the best fit.",
  },
  {
    img: offer5,
    heading: "Brand Solutions",
    description:
      "Employ virtual resources have creativity flowing in their veins. These passionate multidisciplinary creative artists believes in doing something unusual and extraordinary by implementing new ideas in order to cross the limits of success and bring uniqueness to your brand.",
  },
  {
    img: offer6,
    heading: "D2C SALES MANAGEMENT",
    description:
      "Employ virtual resources are leading marketing experts in eCommerce intelligence, sales optimisation, and marketplace management. These resources will take you from surviving to thriving. Use the power & influence of advertising to increase sales and grow your brand on Amazon.",
  },
  {
    img: offer7,
    heading: "3D & AR/VR",
    description:
      "Employ virtual has a creative and a dedicated team of professionals who make the most realistic designs with sound effects which produce a virtual tour effect. We have certified professionals who can make the best tailor-fit 3D, Augmented Reality (AR) and Virtual Reality (VR) for its clients globally.",
  },
  {
    img: offer8,
    heading: "INFRASTRUCTURE & CLOUD",
    description:
      "Employ virtual cloud offering include a wide range of technology service offerings such as Cloud Consulting, Containerisation, DevOps, Digital Transformation, Identity and Access Management, Managed Services, Cloud Security, Big Data, Machine Learning, AI, Technology Advisory and Virtualisation Services.",
  },
];

export const TAKE_CARE_CARD_DATA: WHY_EMPLOY_PROPS[] = [
  {
    img: eye_on,
    title: "KEEP AN EYE ON",
    description:
      "We monitor your team and your employees all the time while they are at work and make sure you never wished you wasn’t there.",
    color: COLORS.WHITE,
  },
  {
    img: helping_hand,
    title: "THE HELPING HAND",
    description:
      "If your employees have any problem, our managers are there to help them and resolve any issue they may have.",
    color: COLORS.WHITE,
  },
  {
    img: professionalism,
    title: "PROFESSIONALISM",
    description:
      "We maintained a professional atmosphere in the office and make sure that your employee follow your every instruction.",
    color: COLORS.WHITE,
  },
];

export const SERVICE_CARD_DATA: SERVICE_CARD_PROPS[] = [
  {
    img: service1,
    heading: "VIRTUAL RESOURCING",
    data: [
      {
        label: "Hire Software Developers",
        url: "hire-software-developer",
      },
      {
        label: "Hire Java Developers",
        url: "hire-java-developer",
      },
      {
        label: "Hire Python Developers",
        url: "hire-python-developer",
      },
      {
        label: "Hire Nodejs Developers",
        url: "hire-node-developer",
      },
      {
        label: "Hire Angular Js Developers",
        url: "hire-angular-developer",
      },
      {
        label: "Hire React Js Developers",
        url: "hire-react-developer",
      },
      {
        label: "Hire Mern Stack Developers",
        url: "hire-mern-stack-developer",
      },
      {
        label: "Hire Laravel Developers",
        url: "hire-laravel-developer",
      },
      {
        label: "Hire Flutter Developers",
        url: "hire-flutter-developer",
      },
      {
        label: "Hire Wordpress Developers",
        url: "hire-wordpress-developer",
      },
      {
        label: "Hire PHP Developers",
        url: "hire-php-developer",
      },
      {
        label: "Hire Magento Developers",
        url: "hire-magento-developer",
      },
      {
        label: "Hire Android Developer",
        url: "hire-android-developer",
      },
      {
        label: "Hire Ios Developers",
        url: "hire-ios-developer",
      },
      {
        label: "Hire Frontend Developers",
        url: "hire-frontend-developer",
      },
      {
        label: "Hire HTML Developers",
        url: "hire-html-developer",
      },
    ],
  },
  {
    img: service2,
    heading: "INFRASTRUCTURE & CLOUD",
    data: [
      {
        label: "Cloud Consulting",
        url: "cloud-consulting",
      },
      {
        label: "Cloud Migration",
        url: "cloud-migration",
      },
      {
        label: "Cloud Assessment",
        url: "cloud-assessment",
      },
      {
        label: "Cloud Cost Optimization",
        url: "cloud-cost-optimization",
      },
      {
        label: "Managed Services",
        url: "managed-services",
      },
      {
        label: "Cloud Native Applications",
        url: "cloud-native-applications",
      },
      {
        label: "Data engineering & Analytics",
        url: "data-engineering-and-analytics",
      },
      {
        label: "Devops Automation",
        url: "devops-automation",
      },
      {
        label: "Cloud Security",
        url: "cloud-security",
      },
      {
        label: "Devops",
        url: "devops",
      },
      {
        label: "Big Data",
        url: "big-data",
      },
      {
        label: "Machine Learning",
        url: "machine-learning",
      },
      {
        label: "Artificial Intelligence",
        url: "artificial-intelligence",
      },
      {
        label: "Digital Transformation",
        url: "digital-transformation",
      },
      {
        label: "Technology Advisory and Virtualisation services",
        url: "technology-advisory-and-virtualisation-services",
      },
    ],
  },
  {
    img: service3,
    heading: "BRAND SOLUTIONS",
    data: [
      {
        label: "Brand Strategy",
        url: "brand-strategy",
      },
      {
        label: "Press Ads",
        url: "press-ads",
      },
      {
        label: "Radio",
        url: "radio",
      },
      {
        label: "Outdoor",
        url: "outdoor",
      },
      {
        label: "TV Commercial",
        url: "tv-commercial",
      },
      {
        label: "Packaging Design",
        url: "packaging-design",
      },
      {
        label: "AV (Audio visuals)",
        url: "audio-visuals",
      },
      {
        label: "Marketing Collateral",
        url: "marketing-collateral",
      },
      {
        label: "Corporate Identity",
        url: "corporate-identity",
      },
      {
        label: "Logo & Brand Manual",
        url: "logo-brand-manual",
      },
      {
        label: "360°Creative Campaigns",
        url: "creative-campaigns",
      },
      {
        label: "Online Media Planning & Buying",
        url: "online-media-planning-buying",
      },
    ],
  },
  {
    img: service4,
    heading: "DIGITAL MEDIA",
    data: [
      {
        label: "Search Engine Optimization",
        url: "search-engine-optimization",
      },
      {
        label: "Search Engine Marketing",
        url: "search-engine-marketing",
      },
      {
        label: "Mobile Marketing",
        url: "mobile-marketing",
      },
      {
        label: "Social Selling",
        url: "social-selling",
      },
      {
        label: "Social Media Optimization",
        url: "social-media-optimization",
      },
      {
        label: "Social Media Marketing",
        url: "social-media-marketing",
      },
      {
        label: "Campaign Planning",
        url: "campaign-planning",
      },
      {
        label: "Campaign Execution",
        url: "campaign-execution",
      },
      {
        label: "Campaign Optimisation",
        url: "campaign-optimisation",
      },
      {
        label: "E-mail Marketing",
        url: "email-marketing",
      },
      {
        label: "Creative & Content",
        url: "creative-and-content",
      },
      {
        label: "Analytics & Reporting",
        url: "analytics-and-reporting",
      },
    ],
  },
  {
    img: service5,
    heading: "D2C SALES MANAGEMENT",
    data: [
      {
        label: "Ecommerce Sales Management",
        url: "ecommerce-sales-management",
      },
      {
        label: "Amazon Sales Management",
        url: "amazon-sales-management",
      },
      {
        label: "Inventory Management",
        url: "inventory-management",
      },
      {
        label: "Listing Setup & Optimization",
        url: "listing-setup-and-optimization",
      },
      {
        label: "Catalogue Management",
        url: "catalogue-management",
      },
      {
        label: "Campaign Management",
        url: "campaign-management",
      },
      {
        label: "Brand Protection",
        url: "brand-protection",
      },
      {
        label: "Error Management",
        url: "error-management",
      },
      {
        label: "Complete Reporting",
        url: "complete-reporting",
      },
      {
        label: "A+ Content",
        url: "a-plus-content",
      },
      {
        label: "Creatives for eCommerce",
        url: "creatives-for-ecommerce",
      },
      {
        label: "Partners value added service management",
        url: "partners-value-added-service-management",
      },
      {
        label: "Purpose-Driven Campaigning",
        url: "purpose-driven-campaigning",
      },
      {
        label: "Full-Service Ecommerce Growth",
        url: "full-service-ecommerce-growth",
      },
    ],
  },
  {
    img: service6,
    heading: "WORKFORCE SOLUTIONS",
    data: [
      {
        label: "Staffing",
        url: "staffing",
      },
      {
        label: "Staff Augmentation",
        url: "staff-augmentation",
      },
      {
        label: "Direct Hire Strategy",
        url: "direct-hire-strategy",
      },
      {
        label: "Captive Client Servicing",
        url: "captive-client-servicing",
      },
      {
        label: "Transitioning",
        url: "transitioning",
      },
      {
        label: "Recruitment Process Outsourcing",
        url: "recruitment-process-outsourcing",
      },
      {
        label: "Managed Service Provider",
        url: "managed-service-provider",
      },
      {
        label: "Onsite recruitment",
        url: "onsite-recruitment",
      },
      {
        label: "Statement of Work (SOW)",
        url: "statement-of-work-sow",
      },
      {
        label: "Payroll Management",
        url: "payroll-management",
      },
      {
        label: "Business Process Outsourcing (BPO)",
        url: "business-process-outsourcing-bpo",
      },
    ],
  },
  {
    img: service7,
    heading: "Website Development",
    data: [
      {
        label: "Customised Applications",
        url: "customised-applications",
      },
      {
        label: "Web Application",
        url: "web-application",
      },
      {
        label: "Mobile Application",
        url: "mobile-application",
      },
      {
        label: "Portal Development",
        url: "portal-development",
      },
      {
        label: "Microservices Based Applications",
        url: "microservices-based-applications",
      },
      {
        label: "Content Management System",
        url: "content-management-system",
      },
      {
        label: "E-commerce Development",
        url: "ecommerce-development",
      },
      {
        label: "Marketplace Development",
        url: "marketplace-development",
      },
      {
        label: "Progressive Web Application (PWA)",
        url: "progressive-web-application-pwa",
      },
    ],
  },
  {
    img: service8,
    heading: "3D & AR/VR",
    data: [
      {
        label: "3D Product Modelling",
        url: "3d-product-modelling",
      },
      {
        label: "3D AV’s (Audio Visuals)",
        url: "3d-avs-audio-visuals",
      },
      {
        label: "3D AR Applications",
        url: "3d-ar-applications",
      },
      {
        label: "3D VR Applications",
        url: "3d-vr-applications",
      },
      {
        label: "Interactive 3D",
        url: "interactive-3d",
      },
    ],
  },
];

export const countries: readonly CountryType[] = [
  { code: "AD", label: "Andorra", phone: "376" },
  {
    code: "AE",
    label: "United Arab Emirates",
    phone: "971",
  },
  { code: "AF", label: "Afghanistan", phone: "93" },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    phone: "1-268",
  },
  { code: "AI", label: "Anguilla", phone: "1-264" },
  { code: "AL", label: "Albania", phone: "355" },
  { code: "AM", label: "Armenia", phone: "374" },
  { code: "AO", label: "Angola", phone: "244" },
  { code: "AQ", label: "Antarctica", phone: "672" },
  { code: "AR", label: "Argentina", phone: "54" },
  { code: "AS", label: "American Samoa", phone: "1-684" },
  { code: "AT", label: "Austria", phone: "43" },
  {
    code: "AU",
    label: "Australia",
    phone: "61",
    suggested: true,
  },
  { code: "AW", label: "Aruba", phone: "297" },
  { code: "AX", label: "Alland Islands", phone: "358" },
  { code: "AZ", label: "Azerbaijan", phone: "994" },
  {
    code: "BA",
    label: "Bosnia and Herzegovina",
    phone: "387",
  },
  { code: "BB", label: "Barbados", phone: "1-246" },
  { code: "BD", label: "Bangladesh", phone: "880" },
  { code: "BE", label: "Belgium", phone: "32" },
  { code: "BF", label: "Burkina Faso", phone: "226" },
  { code: "BG", label: "Bulgaria", phone: "359" },
  { code: "BH", label: "Bahrain", phone: "973" },
  { code: "BI", label: "Burundi", phone: "257" },
  { code: "BJ", label: "Benin", phone: "229" },
  { code: "BL", label: "Saint Barthelemy", phone: "590" },
  { code: "BM", label: "Bermuda", phone: "1-441" },
  { code: "BN", label: "Brunei Darussalam", phone: "673" },
  { code: "BO", label: "Bolivia", phone: "591" },
  { code: "BR", label: "Brazil", phone: "55" },
  { code: "BS", label: "Bahamas", phone: "1-242" },
  { code: "BT", label: "Bhutan", phone: "975" },
  { code: "BV", label: "Bouvet Island", phone: "47" },
  { code: "BW", label: "Botswana", phone: "267" },
  { code: "BY", label: "Belarus", phone: "375" },
  { code: "BZ", label: "Belize", phone: "501" },
  {
    code: "CA",
    label: "Canada",
    phone: "1",
    suggested: true,
  },
  {
    code: "CC",
    label: "Cocos (Keeling) Islands",
    phone: "61",
  },
  {
    code: "CD",
    label: "Congo, Democratic Republic of the",
    phone: "243",
  },
  {
    code: "CF",
    label: "Central African Republic",
    phone: "236",
  },
  {
    code: "CG",
    label: "Congo, Republic of the",
    phone: "242",
  },
  { code: "CH", label: "Switzerland", phone: "41" },
  { code: "CI", label: "Cote d'Ivoire", phone: "225" },
  { code: "CK", label: "Cook Islands", phone: "682" },
  { code: "CL", label: "Chile", phone: "56" },
  { code: "CM", label: "Cameroon", phone: "237" },
  { code: "CN", label: "China", phone: "86" },
  { code: "CO", label: "Colombia", phone: "57" },
  { code: "CR", label: "Costa Rica", phone: "506" },
  { code: "CU", label: "Cuba", phone: "53" },
  { code: "CV", label: "Cape Verde", phone: "238" },
  { code: "CW", label: "Curacao", phone: "599" },
  { code: "CX", label: "Christmas Island", phone: "61" },
  { code: "CY", label: "Cyprus", phone: "357" },
  { code: "CZ", label: "Czech Republic", phone: "420" },
  {
    code: "DE",
    label: "Germany",
    phone: "49",
    suggested: true,
  },
  { code: "DJ", label: "Djibouti", phone: "253" },
  { code: "DK", label: "Denmark", phone: "45" },
  { code: "DM", label: "Dominica", phone: "1-767" },
  {
    code: "DO",
    label: "Dominican Republic",
    phone: "1-809",
  },
  { code: "DZ", label: "Algeria", phone: "213" },
  { code: "EC", label: "Ecuador", phone: "593" },
  { code: "EE", label: "Estonia", phone: "372" },
  { code: "EG", label: "Egypt", phone: "20" },
  { code: "EH", label: "Western Sahara", phone: "212" },
  { code: "ER", label: "Eritrea", phone: "291" },
  { code: "ES", label: "Spain", phone: "34" },
  { code: "ET", label: "Ethiopia", phone: "251" },
  { code: "FI", label: "Finland", phone: "358" },
  { code: "FJ", label: "Fiji", phone: "679" },
  {
    code: "FK",
    label: "Falkland Islands (Malvinas)",
    phone: "500",
  },
  {
    code: "FM",
    label: "Micronesia, Federated States of",
    phone: "691",
  },
  { code: "FO", label: "Faroe Islands", phone: "298" },
  {
    code: "FR",
    label: "France",
    phone: "33",
    suggested: true,
  },
  { code: "GA", label: "Gabon", phone: "241" },
  { code: "GB", label: "United Kingdom", phone: "44" },
  { code: "GD", label: "Grenada", phone: "1-473" },
  { code: "GE", label: "Georgia", phone: "995" },
  { code: "GF", label: "French Guiana", phone: "594" },
  { code: "GG", label: "Guernsey", phone: "44" },
  { code: "GH", label: "Ghana", phone: "233" },
  { code: "GI", label: "Gibraltar", phone: "350" },
  { code: "GL", label: "Greenland", phone: "299" },
  { code: "GM", label: "Gambia", phone: "220" },
  { code: "GN", label: "Guinea", phone: "224" },
  { code: "GP", label: "Guadeloupe", phone: "590" },
  { code: "GQ", label: "Equatorial Guinea", phone: "240" },
  { code: "GR", label: "Greece", phone: "30" },
  {
    code: "GS",
    label: "South Georgia and the South Sandwich Islands",
    phone: "500",
  },
  { code: "GT", label: "Guatemala", phone: "502" },
  { code: "GU", label: "Guam", phone: "1-671" },
  { code: "GW", label: "Guinea-Bissau", phone: "245" },
  { code: "GY", label: "Guyana", phone: "592" },
  { code: "HK", label: "Hong Kong", phone: "852" },
  {
    code: "HM",
    label: "Heard Island and McDonald Islands",
    phone: "672",
  },
  { code: "HN", label: "Honduras", phone: "504" },
  { code: "HR", label: "Croatia", phone: "385" },
  { code: "HT", label: "Haiti", phone: "509" },
  { code: "HU", label: "Hungary", phone: "36" },
  { code: "ID", label: "Indonesia", phone: "62" },
  { code: "IE", label: "Ireland", phone: "353" },
  { code: "IL", label: "Israel", phone: "972" },
  { code: "IM", label: "Isle of Man", phone: "44" },
  { code: "IN", label: "India", phone: "91" },
  {
    code: "IO",
    label: "British Indian Ocean Territory",
    phone: "246",
  },
  { code: "IQ", label: "Iraq", phone: "964" },
  {
    code: "IR",
    label: "Iran, Islamic Republic of",
    phone: "98",
  },
  { code: "IS", label: "Iceland", phone: "354" },
  { code: "IT", label: "Italy", phone: "39" },
  { code: "JE", label: "Jersey", phone: "44" },
  { code: "JM", label: "Jamaica", phone: "1-876" },
  { code: "JO", label: "Jordan", phone: "962" },
  {
    code: "JP",
    label: "Japan",
    phone: "81",
    suggested: true,
  },
  { code: "KE", label: "Kenya", phone: "254" },
  { code: "KG", label: "Kyrgyzstan", phone: "996" },
  { code: "KH", label: "Cambodia", phone: "855" },
  { code: "KI", label: "Kiribati", phone: "686" },
  { code: "KM", label: "Comoros", phone: "269" },
  {
    code: "KN",
    label: "Saint Kitts and Nevis",
    phone: "1-869",
  },
  {
    code: "KP",
    label: "Korea, Democratic People's Republic of",
    phone: "850",
  },
  { code: "KR", label: "Korea, Republic of", phone: "82" },
  { code: "KW", label: "Kuwait", phone: "965" },
  { code: "KY", label: "Cayman Islands", phone: "1-345" },
  { code: "KZ", label: "Kazakhstan", phone: "7" },
  {
    code: "LA",
    label: "Lao People's Democratic Republic",
    phone: "856",
  },
  { code: "LB", label: "Lebanon", phone: "961" },
  { code: "LC", label: "Saint Lucia", phone: "1-758" },
  { code: "LI", label: "Liechtenstein", phone: "423" },
  { code: "LK", label: "Sri Lanka", phone: "94" },
  { code: "LR", label: "Liberia", phone: "231" },
  { code: "LS", label: "Lesotho", phone: "266" },
  { code: "LT", label: "Lithuania", phone: "370" },
  { code: "LU", label: "Luxembourg", phone: "352" },
  { code: "LV", label: "Latvia", phone: "371" },
  { code: "LY", label: "Libya", phone: "218" },
  { code: "MA", label: "Morocco", phone: "212" },
  { code: "MC", label: "Monaco", phone: "377" },
  {
    code: "MD",
    label: "Moldova, Republic of",
    phone: "373",
  },
  { code: "ME", label: "Montenegro", phone: "382" },
  {
    code: "MF",
    label: "Saint Martin (French part)",
    phone: "590",
  },
  { code: "MG", label: "Madagascar", phone: "261" },
  { code: "MH", label: "Marshall Islands", phone: "692" },
  {
    code: "MK",
    label: "Macedonia, the Former Yugoslav Republic of",
    phone: "389",
  },
  { code: "ML", label: "Mali", phone: "223" },
  { code: "MM", label: "Myanmar", phone: "95" },
  { code: "MN", label: "Mongolia", phone: "976" },
  { code: "MO", label: "Macao", phone: "853" },
  {
    code: "MP",
    label: "Northern Mariana Islands",
    phone: "1-670",
  },
  { code: "MQ", label: "Martinique", phone: "596" },
  { code: "MR", label: "Mauritania", phone: "222" },
  { code: "MS", label: "Montserrat", phone: "1-664" },
  { code: "MT", label: "Malta", phone: "356" },
  { code: "MU", label: "Mauritius", phone: "230" },
  { code: "MV", label: "Maldives", phone: "960" },
  { code: "MW", label: "Malawi", phone: "265" },
  { code: "MX", label: "Mexico", phone: "52" },
  { code: "MY", label: "Malaysia", phone: "60" },
  { code: "MZ", label: "Mozambique", phone: "258" },
  { code: "NA", label: "Namibia", phone: "264" },
  { code: "NC", label: "New Caledonia", phone: "687" },
  { code: "NE", label: "Niger", phone: "227" },
  { code: "NF", label: "Norfolk Island", phone: "672" },
  { code: "NG", label: "Nigeria", phone: "234" },
  { code: "NI", label: "Nicaragua", phone: "505" },
  { code: "NL", label: "Netherlands", phone: "31" },
  { code: "NO", label: "Norway", phone: "47" },
  { code: "NP", label: "Nepal", phone: "977" },
  { code: "NR", label: "Nauru", phone: "674" },
  { code: "NU", label: "Niue", phone: "683" },
  { code: "NZ", label: "New Zealand", phone: "64" },
  { code: "OM", label: "Oman", phone: "968" },
  { code: "PA", label: "Panama", phone: "507" },
  { code: "PE", label: "Peru", phone: "51" },
  { code: "PF", label: "French Polynesia", phone: "689" },
  { code: "PG", label: "Papua New Guinea", phone: "675" },
  { code: "PH", label: "Philippines", phone: "63" },
  { code: "PK", label: "Pakistan", phone: "92" },
  { code: "PL", label: "Poland", phone: "48" },
  {
    code: "PM",
    label: "Saint Pierre and Miquelon",
    phone: "508",
  },
  { code: "PN", label: "Pitcairn", phone: "870" },
  { code: "PR", label: "Puerto Rico", phone: "1" },
  {
    code: "PS",
    label: "Palestine, State of",
    phone: "970",
  },
  { code: "PT", label: "Portugal", phone: "351" },
  { code: "PW", label: "Palau", phone: "680" },
  { code: "PY", label: "Paraguay", phone: "595" },
  { code: "QA", label: "Qatar", phone: "974" },
  { code: "RE", label: "Reunion", phone: "262" },
  { code: "RO", label: "Romania", phone: "40" },
  { code: "RS", label: "Serbia", phone: "381" },
  { code: "RU", label: "Russian Federation", phone: "7" },
  { code: "RW", label: "Rwanda", phone: "250" },
  { code: "SA", label: "Saudi Arabia", phone: "966" },
  { code: "SB", label: "Solomon Islands", phone: "677" },
  { code: "SC", label: "Seychelles", phone: "248" },
  { code: "SD", label: "Sudan", phone: "249" },
  { code: "SE", label: "Sweden", phone: "46" },
  { code: "SG", label: "Singapore", phone: "65" },
  { code: "SH", label: "Saint Helena", phone: "290" },
  { code: "SI", label: "Slovenia", phone: "386" },
  {
    code: "SJ",
    label: "Svalbard and Jan Mayen",
    phone: "47",
  },
  { code: "SK", label: "Slovakia", phone: "421" },
  { code: "SL", label: "Sierra Leone", phone: "232" },
  { code: "SM", label: "San Marino", phone: "378" },
  { code: "SN", label: "Senegal", phone: "221" },
  { code: "SO", label: "Somalia", phone: "252" },
  { code: "SR", label: "Suriname", phone: "597" },
  { code: "SS", label: "South Sudan", phone: "211" },
  {
    code: "ST",
    label: "Sao Tome and Principe",
    phone: "239",
  },
  { code: "SV", label: "El Salvador", phone: "503" },
  {
    code: "SX",
    label: "Sint Maarten (Dutch part)",
    phone: "1-721",
  },
  {
    code: "SY",
    label: "Syrian Arab Republic",
    phone: "963",
  },
  { code: "SZ", label: "Swaziland", phone: "268" },
  {
    code: "TC",
    label: "Turks and Caicos Islands",
    phone: "1-649",
  },
  { code: "TD", label: "Chad", phone: "235" },
  {
    code: "TF",
    label: "French Southern Territories",
    phone: "262",
  },
  { code: "TG", label: "Togo", phone: "228" },
  { code: "TH", label: "Thailand", phone: "66" },
  { code: "TJ", label: "Tajikistan", phone: "992" },
  { code: "TK", label: "Tokelau", phone: "690" },
  { code: "TL", label: "Timor-Leste", phone: "670" },
  { code: "TM", label: "Turkmenistan", phone: "993" },
  { code: "TN", label: "Tunisia", phone: "216" },
  { code: "TO", label: "Tonga", phone: "676" },
  { code: "TR", label: "Turkey", phone: "90" },
  {
    code: "TT",
    label: "Trinidad and Tobago",
    phone: "1-868",
  },
  { code: "TV", label: "Tuvalu", phone: "688" },
  {
    code: "TW",
    label: "Taiwan",
    phone: "886",
  },
  {
    code: "TZ",
    label: "United Republic of Tanzania",
    phone: "255",
  },
  { code: "UA", label: "Ukraine", phone: "380" },
  { code: "UG", label: "Uganda", phone: "256" },
  {
    code: "US",
    label: "United States",
    phone: "1",
    suggested: true,
  },
  { code: "UY", label: "Uruguay", phone: "598" },
  { code: "UZ", label: "Uzbekistan", phone: "998" },
  {
    code: "VA",
    label: "Holy See (Vatican City State)",
    phone: "379",
  },
  {
    code: "VC",
    label: "Saint Vincent and the Grenadines",
    phone: "1-784",
  },
  { code: "VE", label: "Venezuela", phone: "58" },
  {
    code: "VG",
    label: "British Virgin Islands",
    phone: "1-284",
  },
  {
    code: "VI",
    label: "US Virgin Islands",
    phone: "1-340",
  },
  { code: "VN", label: "Vietnam", phone: "84" },
  { code: "VU", label: "Vanuatu", phone: "678" },
  { code: "WF", label: "Wallis and Futuna", phone: "681" },
  { code: "WS", label: "Samoa", phone: "685" },
  { code: "XK", label: "Kosovo", phone: "383" },
  { code: "YE", label: "Yemen", phone: "967" },
  { code: "YT", label: "Mayotte", phone: "262" },
  { code: "ZA", label: "South Africa", phone: "27" },
  { code: "ZM", label: "Zambia", phone: "260" },
  { code: "ZW", label: "Zimbabwe", phone: "263" },
];

export const CONTACT_DATA: ADDRESS_TYPE[] = [
  {
    country: "India",
    streetAddress: "2nd Floor, D-320,",
    addressLine1: "Sector 63, Noida,",
    addressLine2: "Uttar Pradesh – 201307 IN",
    phoneNumber: "+91 8800291352",
    email: "accounts@digixito.com",
    img: `https://flagcdn.com/w20/in.png`,
  },
  {
    country: "USA",
    streetAddress: "2035, Sunset Lake Road,",
    addressLine1: "Suite B2, Newark,",
    addressLine2: "DE - 19702, USA",
    phoneNumber: "+1 747 223 8494",
    email: "atul.singh@digixito.com",
    img: `https://flagcdn.com/w20/us.png`,
  },
  {
    country: "SINGAPORE",
    streetAddress: "10 Jalan Besar Road",
    addressLine1: "#08-04, Sim Lim Tower",
    addressLine2: "Singapore (208787)",
    phoneNumber: "+65 9009 2403",
    email: "atul.singh@digixito.com",
    img: `https://flagcdn.com/w20/sg.png`,
  },
];

export const VIRTUAL_CARD_DATA: VIRTUAL_CARD_PROPS[] = [
  {
    heading: "HIRE SOFTWARE DEVELOPERS",
    description:
      "Employ Virtual lets you hire the programming brains for your organisation.",
    slug: "hire-software-developer",
  },
  {
    heading: "HIRE JAVA DEVELOPER",
    description:
      "Build your dynamic website with virtual Java Developers from Employ Virtual. ",
    slug: "hire-java-developer",
  },
  {
    heading: "HIRE PYTHON PROGRAMMER",
    description:
      "Hire your expert Python programmer from Employ Virtual for dynamic codes.",
    slug: "hire-python-developer",
  },
  {
    heading: "HIRE NODEJS DEVELOPERS",
    description:
      "Hire your Node JS expert from Employ Virtual to build dynamic applications.",
    slug: "hire-node-developer",
  },
  {
    heading: "HIRE ANGULARJS DEVELOPERS",
    description:
      "Hire AngularJS Developer from Employ Virtual to build new-age applications.",
    slug: "hide-angular-developer",
  },
  {
    heading: "HIRE REACTJS DEVELOPERS",
    description:
      "ReactJS Developers hired from Employ Virtual creates business-powered applications.",
    slug: "hire-react-developer",
  },
  {
    heading: "HIRE MERN STACK DEVELOPERS",
    description:
      "A single professional from Employ Virtual will bring on the expertise of MongoDB, Express, React and Node.",
    slug: "hire-mern-stack-developer",
  },
  {
    heading: "HIRE LARAVEL DEVELOPERS",
    description:
      "Hire Laravel Developers from Employ Virtual to build SEO-optimized, enriched features applications.",
    slug: "hire-laravel-developer",
  },
  {
    heading: "HIRE FLUTTER DEVELOPERS",
    description:
      "Hire the Flutter Developer from Employ Virtual who will be developing cross platform applications.",
    slug: "hire-flutter-developer",
  },
  {
    heading: "HIRE WORDPRESS DEVELOPERS",
    description:
      "The WordPress Developers of Employ Virtual are known for handling complex WordPress Projects.",
    slug: "hire-wordpress-developer",
  },
  {
    heading: "HIRE PHP DEVELOPERS",
    description:
      "Hire experience PHP Developers from Employ Virtual to build secure, fast and performance driven websites.",
    slug: "hire-php-developer",
  },
  {
    heading: "HIRE MAGENTO DEVELOPERS",
    description:
      "Hire the Magento Developers for your ecommerce store from Employ Virtual, expertise in building a user-friendly ecommerce portal.",
    slug: "hire-magento-developer",
  },
  {
    heading: "HIRE ANDROID DEVELOPERS",
    description:
      "Android Developers from Employ Virtual are experts in designing and developing scalable and fully-functional mobile applications.",
    slug: "hire-android-developer",
  },
  {
    heading: "HIRE IOS DEVELOPERS",
    description:
      "iOS Developers from Employ Virtual are known for their excellent hold on coding and technical skills required for iOS application development.",
    slug: "hire-ios-developer",
  },
  {
    heading: "HIRE FRONTEND DEVELOPERS",
    description:
      "Employ Virtual lets you hire your Front-end experts with T-shaped skills who will collaborate with experts from other disciplines.",
    slug: "hire-frontend-developer",
  },
  {
    heading: "HIRE HTML DEVELOPERS",
    description:
      "Hire your HTML Developer from Employ Virtual who uses HTML to create website layouts based on templates and wireframes.",
    slug: "hire-html-developer",
  },
];
