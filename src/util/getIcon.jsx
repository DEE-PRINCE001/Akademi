import React from 'react';
import { Briefcase, User, HandCoins, TrendingUp, HelpCircle } from 'lucide-react'; 


const getIcon = (iconName) => {
  switch (iconName) {
    case 'briefcase': return <Briefcase size={20} />;
    case 'user': return <User size={20} />;
    case 'hand-coins': return <HandCoins size={20} />;
    case 'trending-up': return <TrendingUp size={20} />;
    default: return null;
  }
};

export default getIcon;