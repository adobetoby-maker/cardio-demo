/**
 * siteData.ts — Typed constants for Nampa Cardiology Associates.
 * All values flow from lib/content.ts (single source of truth).
 * Import from here for easy access to primitives without destructuring siteContent.
 */
import { siteContent } from './content'

// Practice identity
export const PRACTICE_NAME = siteContent.practiceName
export const PRACTICE_TAGLINE = siteContent.tagline
export const PRACTICE_WEBSITE = siteContent.website

// Contact
export const PRACTICE_PHONE = siteContent.phone
export const PRACTICE_PHONE_TEL = 'tel:2085550398' // click-to-call format — literal digits
export const PRACTICE_EMAIL = siteContent.email

// Location
export const PRACTICE_ADDRESS = siteContent.address
export const PRACTICE_CITY = siteContent.city
export const PRACTICE_STATE = siteContent.state
export const PRACTICE_ZIP = siteContent.zip

// Physician
export const PHYSICIAN_NAME = siteContent.physicianName  // includes credentials: "Dr. Michael A. Torres, MD, FACC"
export const PHYSICIAN_TITLE = siteContent.physicianTitle
export const PHYSICIAN_YEARS = siteContent.physicianYears
export const PHYSICIAN_HOSPITAL = siteContent.hospital

// Specialty + Urgency
export const SPECIALTY = siteContent.specialty
export const URGENCY = siteContent.urgency

// Brand colors
export const COLOR_PRIMARY = siteContent.primaryColor    // #7f1d1d dark red
export const COLOR_SECONDARY = siteContent.secondaryColor // #dc2626 red
export const COLOR_ACCENT = siteContent.accentColor      // #fee2e2 light pink
export const COLOR_BG_LIGHT = siteContent.bgLightColor   // #fef2f2

// SEO
export const SEO_TITLE = siteContent.seoTitle
export const SEO_DESCRIPTION = siteContent.seoDescription
export const SEO_KEYWORDS = siteContent.seoKeywords

// Collections (re-exported for tree-shaking)
export const SERVICES = siteContent.services
export const CONDITIONS = siteContent.conditions
export const INSURANCE = siteContent.insurance
export const FAQ = siteContent.faq
export const TESTIMONIALS = siteContent.testimonials
