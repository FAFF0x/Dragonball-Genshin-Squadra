import React from 'react';

export interface NewsItem {
  id: number;
  date: string;
  category: 'UPDATE' | 'EVENT' | 'MAINTENANCE';
  title: string;
  imageUrl: string;
}

export interface CharacterStat {
  subject: string;
  A: number;
  fullMark: number;
}

export interface Skill {
  name: string;
  type: 'Super Attack' | 'Ultimate' | 'Passive';
  description: string;
  icon: React.ReactNode;
}