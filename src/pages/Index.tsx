import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NotesForm from "@/components/NotesForm";
import ServicesSection from "@/components/ServicesSection";
import ScheduleSection from "@/components/ScheduleSection";
import ContactsSection from "@/components/ContactsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <NotesForm />
        <ServicesSection />
        <ScheduleSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
