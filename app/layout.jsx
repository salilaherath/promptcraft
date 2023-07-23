import "@styles/globals.css";

export const metadata = {
  title: "PromptCraft",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="eng">
      <body>
        <div className="name">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
