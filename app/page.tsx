import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import Works from "@/components/Works";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50">
      <Header />

      <main className="flex-1">
        {/* Hero / VCard Section */}
        <div className="animate-fade-in-up">
          <ProfileCard />
        </div>

        {/* Separator or spacing */}
        <div className="h-12"></div>

        {/* Map / Address Visual (Optional based on reference) */}
        {/* For now, just spacing or a placeholder for map */}

      </main>

      <Footer />
    </div>
  );
}
