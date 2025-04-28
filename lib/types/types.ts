export interface Link {
  name: string
  path: string
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}

export interface ContactInfo {
  type: string
  text: string
  icon: string
}

export interface Section {
  title: string
}

export interface FooterSections {
  quickLinks: Section
  contactUs: Section
}

export interface CompanyInfo {
  name: string
  description: string
  logo: string
  copyright: string
}

export interface ExperienceItem {
  title: string
  location: string
  description: string
  icon: string
  date: string
  image: string
}

export interface EducationItem {
  title: string
  location: string
  description: string
  icon: string
  date: string
  image: string
}

export interface LanguageItem {
  name: string
  level: string
  icon: string
}

export interface SkillItem {
  name: string
  icon: string
}

export interface HomePageContent {
  hero: {
    description: string
  }
  buttons: {
    viewProjects: string
    contactMe: string
    getInTouch: string
    learnMore: string
  }
  sections: {
    featuredProjects: {
      title: string
      projects: ProjectItem[]
    }
    contact: {
      title: string
      description: string
    }
    skills: {
      title: string
    }
  }
}

export interface ProjectItem {
  title: string
  briefDescription: string
  description: string
}

export interface AboutPageContent {
  hero: {
    title: string
    description: string[]
    profileImage: string
    profileImageAlt: string
  }
  sections: {
    languages: {
      title: string
      maxLevel: number
    }
    skills: {
      title: string
    }
    experience: {
      title: string
      showRecent: number
      recentText: string
    }
    education: {
      title: string
      showRecent: number
      recentText: string
    }
    running: {
      title: string
      description: string
      image: string
      imageAlt: string
      racesTitle: string
      races: string[]
    }
  }
}
