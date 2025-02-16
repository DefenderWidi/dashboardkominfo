/**
 * Dynamic Executive Summary Component
 * 
 * This component serves as a dynamic route handler for different executive summary sheets.
 * It uses Remix's routing system to capture and display sheet-specific summaries.
 * 
 * Route Pattern: /executive-summary/:sheetName
 * Example URLs: 
 * - /executive-summary/sheet1
 * - /executive-summary/finance
 */

import { useParams } from "@remix-run/react";
import ExecutiveSummary from "./executiveSummary";

/**
 * DynamicExecutiveSummary Component
 * 
 * @component
 * @description Renders an executive summary page with dynamic sheet name from URL parameters.
 * If no sheet name is provided, falls back to "Sheet" as default text.
 */
export default function DynamicExecutiveSummary() {
  // Extract sheetName parameter from URL using Remix's useParams hook
  const { sheetName } = useParams();

  return (
    <div className="h-full">
      {/* Page Header - Displays current sheet name with fallback */}
      <h2 className="text-2xl font-bold text-[#29166e] mb-4">
        {sheetName || "Sheet"} - Executive Summary
      </h2>

      {/* Main Content - Renders ExecutiveSummary component with sheet name */}
      <ExecutiveSummary sheetName={sheetName} />
    </div>
  );
}
