export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  } else {
    console.warn(`Section with ID "${sectionId}" not found.`);
  }
}