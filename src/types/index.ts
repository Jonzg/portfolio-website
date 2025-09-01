// src/types/index.ts

// Define any TypeScript types or interfaces used throughout the project

export interface Project {
    title: string;
    description: string;
    githubLink: string;
}

export interface Experience {
    company: string;
    position: string;
    years: string;
}

export interface ContactInfo {
    linkedIn: string;
    github: string;
    email: string;
}