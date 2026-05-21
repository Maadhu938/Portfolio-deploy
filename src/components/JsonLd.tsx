import Script from "next/script";

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Maadhu Avati",
    "url": "https://maadhuavati.in",
    "jobTitle": "Full-Stack Developer",
    "sameAs": [
      "https://github.com/Maadhu938",
      "https://linkedin.com/in/maadhu-avati-525435279",
      "https://instagram.com/maadhu_839"
    ]
  };

  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
