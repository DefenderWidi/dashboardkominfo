import Showcase from "./showcase";

export default function Overview() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex flex-col justify-center items-center rounded-lg overflow-hidden"
      style={{
        backgroundImage: "url('/herobackground.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* Kontainer Utama dengan Scroll */}
      <div className="w-full max-w-7xl h-full bg-transparent rounded-lg overflow-y-auto shadow-lg">
        {/* Bagian Pertama */}
        <section className="h-screen w-full flex flex-col justify-center items-center">
          {/* Header Section */}
          <div className="text-center px-4">
            <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
              Welcome to{" "}
              <span className="text-[#90caf9]">KOMDIGI</span> Dashboard
            </h1>
            <p className="text-lg text-[#CECECE] mt-4">
              Ubah data menjadi informasi yang bermakna hanya dalam hitungan detik.
            </p>

            {/* Tombol Mulai */}
            <div className="mt-6 flex justify-center">
              <a
                href="/executivesummary"
                className="cssbuttons-io-button text-[#90caf9]"
              >
                Mulai
                <span className="icon" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5l6 6m0 0l-6 6m6-6H4.5"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Kelebihan dan Fungsi */}
        <section className="w-full py-12 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-white text-center">
            Kelebihan dan Fungsi
          </h2>
          <p className="text-md text-[#CECECE] mt-2 text-center">
            Kenapa Anda harus memilih KOMDIGI Dashboard?
          </p>

{/* Grid of Cards */}
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
  {/* Card 1 */}
  <div className="p-6 bg-[rgba(255,255,255,0.15)] rounded-lg shadow-md backdrop-blur-sm hover:scale-105 transition transform duration-300">
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-[#90caf9] flex justify-center items-center rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32" className="text-white">
          <path fill="currentColor" d="M32 32H4a4 4 0 0 1-4-4V0h2v28a2 2 0 0 0 2 2h28z" className="ouiIcon__fillSecondary" />
          <path fill="currentColor" d="M6 20h2v7H6zm10-8h2v15h-2zm10 5h2v10h-2z" />
          <path fill="currentColor" d="M27 6a3 3 0 0 0-2.08.84L20 4.36A2 2 0 0 0 20 4a3 3 0 0 0-6 0c.001.341.062.68.18 1l-5.6 4.46A3 3 0 0 0 7 9a3 3 0 1 0 3 3a2.9 2.9 0 0 0-.18-1l5.6-4.48A3 3 0 0 0 17 7a3 3 0 0 0 2.08-.84l5 2.48A2 2 0 0 0 24 9a3 3 0 1 0 3-3M7 13a1 1 0 1 1 0-2a1 1 0 0 1 0 2m10-8a1 1 0 1 1 0-2a1 1 0 0 1 0 2m10 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-white">Visualisasi Interaktif</h3>
    </div>
    <p className="text-sm text-[#DEDEDE] mt-4">
    Tersedia berbagai jenis grafik interaktif yang dapat dikustomisasi untuk membantu Anda memahami data secara lebih mendalam.
    </p>
  </div>

  {/* Card 2 */}
  <div className="p-6 bg-[rgba(255,255,255,0.15)] rounded-lg shadow-md backdrop-blur-sm hover:scale-105 transition transform duration-300">
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-[#90caf9] flex justify-center items-center rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 512 512" className="text-white">
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M461.81 53.81a4.4 4.4 0 0 0-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a295 295 0 0 0-33.09 39.08c-21-1.9-42-.3-59.88 7.5c-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 0 0 9.8 10.4l81.07-8.9a180 180 0 0 0 1.1 18.3a18.15 18.15 0 0 0 5.3 11.09l31.39 31.39a18.15 18.15 0 0 0 11.1 5.3a180 180 0 0 0 18.19 1.1l-8.89 81a9 9 0 0 0 10.39 9.79c24.9-4 83-18.69 105.07-69.17c7.8-17.9 9.4-38.79 7.6-59.69a294 294 0 0 0 39.19-33.09c68.38-68 115.47-190.86 102.37-247.95M298.66 213.67a42.7 42.7 0 1 1 60.38 0a42.65 42.65 0 0 1-60.38 0" />
          <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M109.64 352a45.06 45.06 0 0 0-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 0 0 160 402.32" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-white">Analisis Cepat</h3>
    </div>
    <p className="text-sm text-[#DEDEDE] mt-4">
    Proses data dengan cepat dan tampilkan hasil analisis dalam hitungan detik untuk mendukung pengambilan keputusan yang efisien.
    </p>
  </div>

  {/* Card 3 */}
  <div className="p-6 bg-[rgba(255,255,255,0.15)] rounded-lg shadow-md backdrop-blur-sm hover:scale-105 transition transform duration-300">
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-[#90caf9] flex justify-center items-center rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" className="text-white">
          <path fill="currentColor" d="M10 22v-1H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h5V2q0-.425.288-.712T11 1t.713.288T12 2v20q0 .425-.288.713T11 23t-.712-.288T10 22m5-1q-.425 0-.712-.288T14 20t.288-.712T15 19h4V5h-4q-.425 0-.712-.288T14 4t.288-.712T15 3h4q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-8q-.425 0-.712-.288T14 12t.288-.712T15 11h1q.425 0 .713.288T17 12t-.288.713T16 13zm0-4q-.425 0-.712-.288T14 8t.288-.712T15 7h1q.425 0 .713.288T17 8t-.288.713T16 9zm-7 8h1q.425 0 .713-.288T10 16t-.288-.712T9 15H8q-.425 0-.712.288T7 16t.288.713T8 17m0-4h1q.425 0 .713-.288T10 12t-.288-.712T9 11H8q-.425 0-.712.288T7 12t.288.713T8 13m0-4h1q.425 0 .713-.288T10 8t-.288-.712T9 7H8q-.425 0-.712.288T7 8t.288.713T8 9" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-white">Dukungan Multiple Data</h3>
    </div>
    <p className="text-sm text-[#DEDEDE] mt-4">
    Kemudahan membandingkan hingga tiga data sekaligus untuk mendukung analisis dan pengambilan keputusan yang lebih akurat.
    </p>
  </div>
</div>
        </section>

        {/* Bagian Kedua */}
        <section className="h-screen w-full flex flex-col items-center justify-center">
          {/* Informative Section */}
          <div className="text-center px-4">
            <h2 className="text-3xl font-bold text-white drop-shadow-lg">
              Sesuaikan bentuk grafik sesuai kebutuhan Anda!
            </h2>
            <p className="text-md text-[#CECECE] mt-2">
              Beragam grafik interaktif yang membantu Anda memahami data lebih baik.
            </p>
          </div>

          {/* Showcase Section */}
          <div className="mt-8 w-full">
            <Showcase />
          </div>
        </section>
      </div>
    </div>
  );
}
