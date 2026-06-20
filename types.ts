export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CredibilityBadge {
  text?: string;
  badge?: string;
}

export interface WhyChooseItem {
  title?: string;
  text?: string;
}

export interface SiteSettings extends CosmicObject {
  type: 'site-settings';
  metadata: {
    brand_name?: string;
    logo?: CosmicImage;
    phone_number?: string;
    hero_headline?: string;
    hero_subheadline?: string;
    hero_background_image?: CosmicImage;
    about_title?: string;
    about_content?: string;
    credibility_badges?: unknown;
    why_choose_us?: unknown;
    cta_headline?: string;
    cta_subheadline?: string;
    website_url?: string;
  };
}

export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name?: string;
    icon?: string;
    short_description?: string;
    full_description?: string;
    featured_image?: CosmicImage;
  };
}

export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name?: string;
    role?: string;
    photo?: CosmicImage;
    bio?: string;
    years_experience?: number | string;
  };
}

export interface Location extends CosmicObject {
  type: 'locations';
  metadata: {
    location_name?: string;
    seo_description?: string;
    featured_image?: CosmicImage;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name?: string;
    rating?: number | string;
    quote?: string;
    location?: string;
  };
}

export interface FAQ extends CosmicObject {
  type: 'faqs';
  metadata: {
    question?: string;
    answer?: string;
  };
}

export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    study_title?: string;
    client_name?: string;
    challenge?: string;
    solution?: string;
    result?: string;
    featured_image?: CosmicImage;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}