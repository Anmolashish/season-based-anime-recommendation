import MainSection from "../components/MainSection";

export default function page({ params }) {
  const seasons = ["winter", "summer", "rainy", "autumn"];
  if (!seasons.includes(params.season)) {
    return (
      <div className="w-full h-screen flex justify-center items-center font-bold text-pink-600 text-4xl">
        Data not available
      </div>
    );
  }

  return (
    <>
      <MainSection season={params.season} />
    </>
  );
}
