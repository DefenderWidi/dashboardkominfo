// routes/executiveSummary.$sheetName.tsx
import { useParams } from "@remix-run/react";
import ExecutiveSummary from "./executiveSummary";

export default function DynamicExecutiveSummary() {
  const { sheetName } = useParams(); // Mendapatkan nama sheet dari URL

  return (
    <div className="h-full">
      <h2 className="text-2xl font-bold text-[#29166e] mb-4">
        {sheetName || "Sheet"} - Executive Summary
      </h2>
      <ExecutiveSummary sheetName={sheetName} />
    </div>
  );
}
