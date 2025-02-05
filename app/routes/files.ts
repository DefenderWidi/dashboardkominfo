import mysqlFilesDb from "~/db1.server";

export const loader = async () => {
  try {
    const files = await mysqlFilesDb.jsonFile.findMany({ 
      select: { id: true, data: true, uploadedAt: true } 
    });

    return new Response(JSON.stringify(files), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching files:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch files" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
