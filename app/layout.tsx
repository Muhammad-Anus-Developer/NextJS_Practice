import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
<html lang="en">
      <head>  <meta charSet="UTF-8" />

      <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
<meta name="msapplication-TileColor" content="#da532c" />
<meta name="theme-color" content="#000000" />



<title>{`X | Home`}</title>


<meta
            name="description"
            content="Developed Site by Muhammad Anus"
         />
         <meta
            name="keywords"
            content="NextJS Developer, Muhammad Anus, Full Stack Developer, Responsive"
         />
         <meta property="og:title" content="X Project By Muhammad Anus" />
         <meta
            property="og:description"
            content="Demo Site by Muhammad Anus showcasing frontend skills"
         />
        






        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@300&display=swap" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
      
      
      
      
      </head>
      <body>{children}</body>
    </html>
  );
}
