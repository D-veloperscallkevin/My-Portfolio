import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

// Estilos del documento
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 12,
    fontFamily: "Helvetica",
    backgroundColor: "#f9f9f9",
  },
  header: {
    marginBottom: 10,
    textAlign: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  contact: {
    marginTop: 4,
    fontSize: 10,
    color: "#555",
  },
  section: {
    marginTop: 30, // Aumenta el espacio antes de cada sección
    paddingBottom: 12, // Aumenta el espacio antes de la línea
    borderBottom: "1 solid #ccc",
    marginBottom: 13, // Aumenta el espacio después de la línea
  },
  sectionExperience: {
    marginTop: 100, // Aumenta el espacio antes de cada sección
    paddingBottom: 12, // Aumenta el espacio antes de la línea
    borderBottom: "1 solid #ccc",
    marginBottom: 13, // Aumenta el espacio después de la línea
  },
  sectionTitle: {
    fontSize: 14,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#333",
    textTransform: "uppercase",
  },
  textBlock: { marginTop: 10, marginBottom: 6, lineHeight: 1.5 },
  listItem: {
    marginBottom: 10,
    lineHeight: 1,
  },
  skills: {
    marginTop: 4,
    fontSize: 10,
    lineHeight: 2,
  },
  bold: {
    fontWeight: "bold",
  },
});

export const PdfDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.name}>Kevin Josué Aguilar Ureña</Text>
        <Text style={styles.contact}>64891763 | Costa Rica, San José</Text>
        <Text style={styles.contact}>
          kevin.aguilaru@gmail.com | LinkedIn:
          www.linkedin.com/in/kevin-josué-aguilar-ureña-b47601179
        </Text>
        <Text style={styles.contact}>
          GitHub: https://github.com/D-veloperscallkevin
        </Text>
        <Text style={styles.contact}>
          My portfolio: https://my-portfolio-production-d98f.up.railway.app/
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.textBlock}>
          Innovative Full Stack MERN Developer with a strong foundation in
          React, Node.js, MongoDB, and modern frameworks like Chakra UI.
          Passionate about problem-solving, clean code, and optimizing backend
          architectures like MVC.
        </Text>
        <Text style={styles.textBlock}>
          Developed a secure user authentication system, improving login
          efficiency by 30% through seamless OAuth integrations. Engineered a
          robust file upload service, increasing user engagement through
          automation and efficient processing. Adept at API integrations,
          debugging, and building scalable applications.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Achievements & Impact</Text>
        <Text style={styles.listItem}>
          • Optimized database queries, reducing API response times.
        </Text>
        <Text style={styles.listItem}>
          • Refactored authentication system, decreasing login failures by 30%
          with JWT and OAuth integrations.
        </Text>
        <Text style={styles.listItem}>
          • Developed a file upload system with{" "}
          <Text style={styles.bold}>Multer & Cloudinary</Text>, increasing user
          engagement by 25%.
        </Text>
      </View>

      <View style={styles.sectionExperience}>
        <Text style={styles.sectionTitle}>Experience</Text>
        <Text style={styles.textBlock}>
          Developed dynamic web applications using the MERN stack, leveraging
          MongoDB, Node.js with Express.js and React.js.
        </Text>
        <Text style={styles.bold}>
          SECURE USER AUTHENTICATION SYSTEM, AUTH0, NODEJS, MONGODB
        </Text>
        <Text style={styles.textBlock}>
          Implemented user authentication with Auth0, enhancing security in a
          MERN stack application. Managed user roles and OAuth integrations for
          streamlined login experiences.
        </Text>
        <Text style={styles.bold}>
          FILE UPLOAD & NOTIFICATIONS SERVICE, MULTER, SENDGRID, EXPRESS.JS
        </Text>
        <Text style={styles.textBlock}>
          Developed a file upload system in Node.js with Multer. Integrated
          SendGrid for automated email notifications, enhancing user experience
          with timely updates.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Skills</Text>
        <Text style={styles.skills}>
          Frontend: HTML, CSS, React, Vite, TypeScript, Chakra UI, Bootstrap and
          I18next
          {"\n"}
          Backend: JavaScript, Node.js, File System, Express, API Rest, MongoDB,
          Microsoft SQL Server{"\n"}
          Tools: Git, Docker, Postman, Visual Studio Code, React Query Tools
          {"\n"}
          Libraries & APIs: Auth0, Multer, Cloudinary, SendGrid, Stripe, React
          Hook Form, Zod, Mongoose, MSSQL, JWT, Bcrypt, Axios, Cors, Helmet,
          RateLimit, Morgan, OpenAI, Replicate, HuggingFace
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certifications</Text>
        <Text style={styles.listItem}>
          • Universidad Creativa 2022-2023 | Professional Front End Web
          Developer in React
        </Text>
        <Text style={styles.listItem}>
          • Universidad Creativa 2023-2024 | Full Stack Developer
        </Text>
        <Text style={styles.listItem}>• Udemy 2024 | Reaper DAW desde 0</Text>
        <Text style={styles.listItem}>
          • Udemy 2024 | HTML5 CSS3 y JS desde 0
        </Text>
        <Text style={styles.listItem}>
          • Hola Mundo Academy 2024-2025 | Ultimate JavaScript & React
        </Text>
        <Text style={styles.listItem}>
          • Hola Mundo Academy 2025 | Ultimate Docker, Linux, Git, SQL
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Languages</Text>
        <Text style={styles.listItem}> Spanish - Native</Text>
        <Text style={styles.listItem}> English - Intermediate</Text>
      </View>
    </Page>
  </Document>
);
