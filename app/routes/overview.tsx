import Showcase from "./showcase";

export default function Overview() {
  return (
    <div className="w-full h-screen overflow-hidden bg-gray-200 flex justify-center items-center">
      {/* Kontainer Utama dengan Frame Rounded */}
      <div className="w-full max-w-7xl h-full bg-white rounded-lg overflow-y-scroll shadow-lg">
        {/* Bagian Pertama */}
        <section
          className="h-screen w-full bg-cover bg-center flex flex-col justify-center items-center"
          style={{
            backgroundImage: "url('/herobackground.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            marginBottom: "-1px", // Tambahkan margin negatif di sini
          }}
        >
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

        {/* Bagian Kedua */}
        <section
          className="h-screen w-full bg-cover bg-center flex flex-col items-center justify-center"
          style={{
            backgroundImage: "url('/herobackground.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            marginBottom: "-2px", // Tambahkan margin negatif di sini juga
          }}
        >
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
