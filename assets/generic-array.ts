import {
  FOOTER_LINKS,
  HERO_CARD_PROPS,
  OFFER_CARD_PROPS,
  PARTNER_CARD_PROPS,
  SERVICE_CARD_PROPS,
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
      },
      {
        label: "Hire Java Developers",
      },
      {
        label: "Hire Python Developers",
      },
    ],
  },
  {
    img: service2,
    heading: "INFRASTRUCTURE & CLOUD",
    data: [
      {
        label: "Cloud Consulting",
      },
      {
        label: "Cloud Migration",
      },
      {
        label: "Cloud Assessment",
      },
    ],
  },
  {
    img: service3,
    heading: "BRAND SOLUTIONS",
    data: [
      {
        label: "Brand Strategy",
      },
      {
        label: "Press Ads",
      },
      {
        label: "Radio",
      },
    ],
  },
  {
    img: service4,
    heading: "DIGITAL MEDIA",
    data: [
      {
        label: "Search Engine Optimization",
      },
      {
        label: "Search Engine Marketing",
      },
      {
        label: "Mobile Marketing",
      },
    ],
  },
  {
    img: service5,
    heading: "D2C SALES MANAGEMENT",
    data: [
      {
        label: "Ecommerce Sales Management",
      },
      {
        label: "Amazon Sales Management",
      },
      {
        label: "Inventory Management",
      },
    ],
  },
  {
    img: service6,
    heading: "WORKFORCE SOLUTIONS",
    data: [
      {
        label: "Staffing",
      },
      {
        label: "Staff Augmentation",
      },
      {
        label: "Direct Hire Strategy",
      },
    ],
  },
  {
    img: service7,
    heading: "Website Development",
    data: [
      {
        label: "Customised Applications",
      },
      {
        label: "Web Application",
      },
      {
        label: "Mobile Application",
      },
    ],
  },
  {
    img: service8,
    heading: "3D & AR/VR",
    data: [
      {
        label: "3D Product Modelling",
      },
      {
        label: "3D AV’s (Audio Visuals)",
      },
      {
        label: "3D AR Applications",
      },
      {
        label: "3D VR Applications",
      },
    ],
  },
];
