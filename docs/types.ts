/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface QuizState {
  objective: string;
  gender: string;
  ageGroup: string;
  activityLevel: string;
  consultationType: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  date: string;
  tag: string;
}

export interface MenuItem {
  label: string;
  href: string;
}
