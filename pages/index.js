import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Awards from "../components/awards";
import Casourel from "../components/casourel";
// import Button from "../components/button";
const Home = () => {
  return (
    <>
      <Head>
        <title>NTJ Conference</title>
        <meta
          name="description"
          content="Nitj Conf Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      
      <Hero />
      <Casourel/>
      <SectionTitle
        pretitle="We are Live"
        title="Glimpse Of Past Conference">
        The registrations for the conference of the year are live. Book your slots already as these are limited. With the renowned speakers being a part of this, this edition in India will be at an another level.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Awards/>
      <SectionTitle
        pretitle="Explore More Conference"
        title="We Invite You to be the part">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Feedback"
        title="Here's what our Attendee said">
        Feedback is a great way to increase the awareness..
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
      
    </>
  );
}

export default Home;