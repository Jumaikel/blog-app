import PublicationCard from "../components/PublicationCard";
import Footer from "../components/Footer";
import AddPublication from "../components/AddPublication";

export default async function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center k p-5">
    <h1 className="text-4xl font-bold text-turquoise p-5">Post</h1>
    <AddPublication/>
    </main>
    <Footer />
    </>
  );
}
