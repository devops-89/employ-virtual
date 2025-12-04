import { VIRTUAL_CARD_PROPS } from "@/utils/types";
import staffing from "@/hire/icon/staffing.png"
import staff from "@/hire/icon/staff.png"
import direct from "@/hire/icon/direct.png"
import captive from "@/hire/icon/captive.png"
import transitioning from "@/hire/icon/transitioning.png"
import recruitment from "@/hire/icon/transitioning.png"
import manage from "@/hire/icon/manage.png"
import onsite from "@/hire/icon/onsite.png"
import statement from "@/hire/icon/statement.png"
import payroll from "@/hire/icon/payroll.png"
import business from "@/hire/icon/business.png"



export const STAFFING_DATA:VIRTUAL_CARD_PROPS[]=[
    {
        heading:"STAFFING",
        img: staffing,
        description:"Staffing is the backbone for any organisation and for smooth functioning of its operations and it can affect quality of work.",
        slug:"staffing",
    },
    {
        heading:"STAFF AUGMENTATION",
        img:staff,
        description:"Staff Augmentation is the utilization of outside personnel on a temporary basis to augment the capacity of business.",
        slug:"staff-augmentation",
    },
     {
        heading:"DIRECT HIRE STRATEGY",
        img:direct,
        description:"Many employers prefer hiring directly to save up front cost without any involvement of third-party organization.",
        slug:"direct-hire-strategy",
    },
     {
        heading:"CAPTIVE CLIENT SERVICING",
        img:captive,
        description:"Client servicing is important for every organization. Businesses need to add confidence to their captive business models.",
        slug:"captive-client-servicing",
    },
     {
        heading:"TRANSITIONING",
        img:transitioning,
        description:"Transitioning in workforce is multi-faceted. Workforce transitioning is to help people to move to next phase in their career.",
        slug:"transitioning",
    },
     {
        heading:"RECRUITMENT PROCESS OUTSOURCING",
        img:recruitment,
        description:"Though recruiting seems to be an easy and sorted but the people and the organization associated with this will say opposite.",
        slug:"recruitment-process-outsourcing",
    },
     {
        heading:"MANAGED SERVICE PROVIDER",
        img:manage,
        description:"Managed services have become a popular buzzword in business. Managed services give complete responsibility to 3rd Party.",
        slug:"managed-service-provider",
    },
    {
        heading:"ONSITE RECRUITMENT",
        img:onsite,
        description:"Onsite Recruitment is part of workforce management service where a recruitment agency effectively becomes part of an organisation.",
        slug:"onsite-recruitment",
    },
    {
        heading:"STATEMENT OF WORK (SOW)",
        img:statement,
        description:"Statement of Work is a form of agreement or contract between an organization and a recruitment agency or individual.",
        slug:"statement-of-work",
    },
    {
        heading:"PAYROLL MANAGEMENT",
        img:payroll,
        description:"With the recruitment, employees come the payroll and its management. Payroll is an important document that every company uses.",
        slug:"payroll-management",
    },
     {
        heading:"BUSINESS PROCESS OUTSOURCING (BPO)",
        img:business,
        description:"Business Process Outsourcing is a common term that is used frequently in small or medium scale and even in large organizations who hires staff.",
        slug:"business-process-outsourcing",
    },
]