import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Plane, CarFront, ShieldCheck, BriefcaseBusiness, Sparkles, Route, Check, Users, Gem } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import styles from "./logistics.module.css";

export const metadata: Metadata = {
  title: "Luxury Logistics & Chauffeur Services",
  description: "Luxury car booking, airport and hotel transfers, private chauffeurs, corporate travel, events, and unforgettable arrivals.",
  alternates: { canonical: "/logistics" },
};
const services = [
  { icon: Plane, title: "Airport & hotel transfers", text: "Seamless airport pickup and drop-off, with hotel transfers that connect every part of your itinerary." },
  { icon: CarFront, title: "Luxury car booking", text: "A refined vehicle for your plans, from everyday escapes to the moments that deserve something exceptional." },
  { icon: ShieldCheck, title: "Private chauffeur services", text: "Your schedule, your pace. Personal chauffeur services for a single journey, a full day, or a tailored itinerary." },
  { icon: BriefcaseBusiness, title: "Corporate & VIP travel", text: "Thoughtfully coordinated transport for corporate travel, executive appointments, and VIP meetings." },
  { icon: Sparkles, title: "Events & special occasions", text: "Make the entrance part of the occasion with considered transportation for events and memorable evenings." },
  { icon: Route, title: "Intercity travel", text: "Private, door-to-door journeys beyond the city, with space to relax and time to make your own." },
];
const occasions = ["Wedding transportation", "Shopping & city tours", "Business roadshows", "Group transportation", "Red-carpet arrivals", "Private aviation transfers"];
const fleet = [
  { icon: CarFront, title: "Executive sedans", text: "Understated elegance for airport transfers, meetings, and private city journeys." },
  { icon: Gem, title: "Luxury SUVs", text: "Room to settle in, with a spacious setting for longer itineraries and travel with company." },
  { icon: Users, title: "Premium group travel", text: "Bring everyone together with transportation coordinated around your group and occasion." },
];
export default function LogisticsPage() {
  return <><Navbar /><main className={styles.page}>
    <section id="logistics-home" className={styles.hero}>
      <Image src="/images/homepage/luxury-transport.png" alt="Graphite luxury sedan on a coastal road at dusk" fill preload sizes="100vw" className={styles.heroImage} />
      <div className={styles.shade} />
      <div className={"container-padded " + styles.heroContent}>
        <p className={styles.eyebrow}>Logistics & transportation</p>
        <h1>Every journey.<br /><em>Extraordinary.</em></h1>
        <p className={styles.heroDescription}>For the moments that matter and the miles in between. Discover luxury travel, personal chauffeurs, and seamless arrivals, thoughtfully arranged around you.</p>
        <div className={styles.actions}><Link href="#booking" className={styles.button}>Book Your Ride Today <ArrowUpRight size={18} /></Link><a href="#our-services" className={styles.textLink}>Discover our services <ArrowUpRight size={17} /></a></div>
        <div className={styles.heroFoot}><span>From your doorstep to your destination</span><span>Exceptional travel. Personal attention.</span></div>
      </div>
    </section>
    <nav aria-label="Logistics page navigation" className={styles.localNav}><div className="container-padded">{[["Home", "logistics-home"], ["Our Services", "our-services"], ["Our Fleet", "our-fleet"], ["About Us", "our-experience"], ["Contact Us", "booking"]].map(([label,id]) => <a key={id} href={"#" + id}>{label}</a>)}<Link href="#booking">Book a Ride <ArrowUpRight size={15} /></Link></div></nav>
    <section id="our-services" className={"container-padded " + styles.section}>
      <div className={styles.heading}><div><p className={styles.eyebrow}>Consider every mile covered</p><h2>Your plans.<br /><em>Our attention to detail.</em></h2></div><p>From an early departure to a grand arrival, our transport services bring comfort and care to every part of your itinerary.</p></div>
      <div className={styles.services}>{services.map(({icon: Icon,title,text},i) => <article key={title} className={styles.card}><div className={styles.cardTop}><Icon size={28} strokeWidth={1.3} /><span>0{i+1}</span></div><h3>{title}</h3><p>{text}</p><a href="#booking" aria-label={"Enquire about " + title}>Arrange your journey <ArrowUpRight size={16} /></a></article>)}</div>
    </section>
    <section id="our-experience" className={styles.experience}><div className={"container-padded " + styles.split}><div className={styles.interior}><Image src="/images/homepage/luxury-interior.png" alt="Refined leather seats and interior details in a luxury vehicle" fill sizes="(max-width: 800px) 100vw, 50vw" className={styles.cover} /><span>The luxury is in the details.</span></div><div><p className={styles.eyebrow}>The premium experience</p><h2>A little more space.<br /><em>A world of difference.</em></h2><p className={styles.bodyCopy}>Time to prepare. Room to unwind. The quiet confidence of a journey planned with care. Our approach to luxury travel is simple: make every detail feel effortless.</p><ul className={styles.benefits}>{["Personal itineraries built around your schedule", "Comfort-led travel for business and leisure", "Discreet, attentive chauffeur services", "Coordination from first pickup to final arrival"].map(item => <li key={item}><Check size={17} />{item}</li>)}</ul><a href="#booking" className={styles.textLink}>Let us plan your next journey <ArrowUpRight size={17} /></a></div></div></section>
    <section id="our-fleet" className={"container-padded " + styles.section}><div className={styles.heading}><div><p className={styles.eyebrow}>Our fleet collection</p><h2>The right setting.<br /><em>For every journey.</em></h2></div><p>Explore your preferred travel style. Specific vehicles, passenger capacity, and availability are confirmed when you enquire.</p></div><div className={styles.fleet}>{fleet.map(({icon: Icon,title,text},i) => <article key={title} className={styles.fleetCard}><div className={styles.cardTop}><span>0{i+1} / THE COLLECTION</span><Icon size={28} strokeWidth={1.3} /></div><h3>{title}</h3><p>{text}</p><a href="#booking">Enquire about this category <ArrowUpRight size={16} /></a></article>)}</div></section>
    <section className={styles.occasions}><div className={"container-padded " + styles.split}><div><p className={styles.eyebrow}>Beyond the everyday</p><h2>An occasion to remember.<br /><em>An arrival to match.</em></h2><p className={styles.bodyCopy}>Whatever brings you here, let the journey feel like part of the experience.</p></div><div className={styles.occasionList}>{occasions.map((item,i) => <a href="#booking" key={item}><span>0{i+1}</span>{item}<ArrowUpRight size={18} /></a>)}</div></div></section>
    <section id="booking" className={"container-padded " + styles.section}><div className={styles.booking}><p className={styles.eyebrow}>Your next journey starts here</p><h2>Arrive with presence.<br /><em>Travel with peace of mind.</em></h2><p>Tell us your destination, travel date, passenger count, and preferred service. We will help shape the details of your journey.</p><Link href="/contact#contact-form" className={styles.button}>Book Your Ride Today <ArrowUpRight size={18} /></Link><small>Send a ride enquiry. Availability and arrangements are confirmed individually.</small></div><div className={styles.steps}>{[["01","Share your plans","Your route, your date, your occasion."],["02","Shape your journey","Discuss the vehicle and details that suit you."],["03","Enjoy the experience","Your itinerary, thoughtfully brought together."]].map(([n,title,text]) => <div key={n}><span>{n}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></section>
  </main><Footer /></>;
}
