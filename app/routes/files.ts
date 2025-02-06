import jsonDb from '../jsonDb'; // Sesuaikan path jika perlu
import { json } from "@remix-run/node";

export const loader = async () => {
  try {
    console.log("🚀 Fetching files..."); // Debugging log

    // Menggunakan `jsonDb` yang sudah diimpor
    const files = await jsonDb.jsonFile.findMany({
      select: { id: true },
    });

    console.log("✅ Files fetched:", files); // Debugging log
    return json(files);
  } catch (error) {
    console.error("❌ Error fetching files:", error);
    return json({ error: "Failed to fetch files" }, { status: 500 });
  }
};
