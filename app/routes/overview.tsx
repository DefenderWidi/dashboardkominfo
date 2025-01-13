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
            <p className="text-lg text-white mt-4">
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
          <p className="text-md text-white mt-2 text-center">
            Kenapa Anda harus memilih KOMDIGI Dashboard?
          </p>

          {/* Grid of Cards */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
            {/* Card 1 */}
            <div className="p-6 bg-[rgba(255,255,255,0.15)] rounded-lg shadow-md backdrop-blur-md hover:scale-105 transition transform duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#90caf9] flex justify-center items-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 16h-1v-4h-1m-1 0h6m-4-4v4m0 0V4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Visualisasi Interaktif
                </h3>
              </div>
              <p className="text-sm text-white mt-4">
                Menyediakan berbagai jenis grafik untuk membantu Anda memahami data
                lebih baik.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-[rgba(255,255,255,0.15)] rounded-lg shadow-md backdrop-blur-md hover:scale-105 transition transform duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#90caf9] flex justify-center items-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Analisis Cepat
                </h3>
              </div>
              <p className="text-sm text-white mt-4">
                Memberikan hasil analisis data dalam hitungan detik.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-[rgba(255,255,255,0.15)] rounded-lg shadow-md backdrop-blur-md hover:scale-105 transition transform duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#90caf9] flex justify-center items-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14m-7-7l7 7-7 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Dukungan Berbagai Format
                </h3>
              </div>
              <p className="text-sm text-white mt-4">
                Mendukung berbagai format data seperti Excel, CSV, dan lainnya.
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
            <p className="text-md text-white mt-2">
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
