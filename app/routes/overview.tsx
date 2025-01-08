export default function Overview() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center rounded-lg flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('/herobackground.png')",
      }}
    >
      <h1 className="text-4xl font-bold text-white shadow-lg text-center">
        Welcome to Diskominfo Dashboard
      </h1>
      <p className="text-lg text-white mt-4 text-center">
        Jelajahi fitur dengan menggunakan menu di sebelah kiri.
      </p>
    </div>
  );
}
