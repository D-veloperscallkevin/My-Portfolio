import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next"; // Importar useTranslation
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { i18n, t } = useTranslation(); // Obtener funciones de traducción

  const sections = [
    { label: t("navbar.hero"), id: "hero" },
    { label: t("navbar.about"), id: "about" },
    { label: t("navbar.projects"), id: "projects" },
    { label: t("navbar.skills"), id: "skills" },
    { label: t("navbar.contact"), id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      as="nav"
      pos="fixed"
      w="100%"
      h="80px"
      bgImage="url('/images/cielo-editado.png')"
      bgSize="cover"
      bgPosition="center right"
      bgRepeat="no-repeat"
      color="white"
      zIndex="1000"
      boxShadow="md"
    >
      <Flex h="100%" align="center" px={8} justify="space-between">
        <Image src="/images/dragon-morado.png" w={"150px"} h={20} />
        <HStack spacing={4}>
          {sections.map((section) => (
            <Button
              key={section.id}
              variant="ghost"
              color="white"
              _hover={{ bg: colorMode === "light" ? "teal.600" : "gray.700" }}
              onClick={() => scrollToSection(section.id)}
            >
              {section.label}
            </Button>
          ))}

          {/* Botón para cambiar idioma */}
          <Button
            onClick={() =>
              i18n.changeLanguage(i18n.language === "es" ? "en" : "es")
            }
            variant="ghost"
            color="white"
            _hover={{ bg: colorMode === "light" ? "teal.600" : "gray.700" }}
          >
            {i18n.language === "es" ? "ES" : "EN"}
          </Button>

          {/* Botón para cambiar el tema */}
          <IconButton
            aria-label="Cambiar tema"
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            onClick={toggleColorMode}
            variant="ghost"
            color="white"
            _hover={{ bg: colorMode === "light" ? "teal.600" : "gray.700" }}
          />
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
