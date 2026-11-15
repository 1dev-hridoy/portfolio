import nasaSpaceApps from "../assets/certificate/nasa-space-apps-2026.webp";
import survivorsVoice from "../assets/certificate/survivors-voice-summit-2026.webp";
import ideaActivation from "../assets/certificate/idea-university-activation-2025.webp";
import brainBee from "../assets/certificate/bangladesh-brain-bee-2026.webp";

export type Certificate = {
  title: string;
  issuer: string;
  year: string;
  src: string;
  alt: string;
  detail?: string;
};

export const certificates: Certificate[] = [
  {
    title: "NASA Space Apps Challenge",
    issuer: "NASA",
    year: "2026",
    src: nasaSpaceApps,
    alt: "Certificate of participation in the 2026 NASA Space Apps Challenge",
    detail:
      "Certificate of participation in the 2026 NASA Space Apps Challenge, recognizing work addressing challenges we face on Earth and in space.",
  },
  {
    title: "Bangladesh Brain Bee",
    issuer: "International Brain Bee",
    year: "2026",
    src: brainBee,
    alt: "Certificate of appreciation as an organizer and core panel member of Bangladesh Brain Bee 2026",
    detail:
      "Certificate of appreciation for distinguished service as an Organizer and Core Panel Member of the Bangladesh Brain Bee 2026 (Certificate ID: BEE-ORG-151).",
  },
  {
    title: "Survivor's Voice Summit",
    issuer: "Survivor's Path & SRI Welfare Foundation",
    year: "2026",
    src: survivorsVoice,
    alt: "Certificate of volunteer contribution at the Survivor's Voice Summit 2026",
    detail:
      "Volunteer contribution certificate for the Survivor's Voice Summit 2026 — \u201cBreaking Silence, Building Hope, Empowering Every Voice\u201d — held on 19 May 2026 at the Bangladesh Shishu Academy, Dhaka.",
  },
  {
    title: "University Activation Programme",
    issuer: "iDEA Project, Bangladesh Computer Council",
    year: "2025",
    src: ideaActivation,
    alt: "Certificate of completion for the University Activation Programme 2025",
    detail:
      "Certificate of completion for active participation in the University Activation Programme 2025, run by the iDEA Project at the Bangladesh Computer Council (ICT Division).",
  },
];