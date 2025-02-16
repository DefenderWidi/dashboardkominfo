/**
 * Layout Component
 * 
 * A wrapper component that provides consistent styling and structure for child components.
 * Acts as a container with a light gray background and padding.
 * 
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child elements to be rendered within the layout
 * 
 * @example
 * <Layout>
 *   <h1>My Page Content</h1>
 *   <p>Some content here</p>
 * </Layout>
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gray-100 p-4">
      {/* Render child components with consistent padding and background */}
      {children}
    </div>
  );
}