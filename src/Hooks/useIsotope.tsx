import { useEffect, useState } from 'react';

export const useIsotope = ({ selector, options }: { selector: string; options: any }) => {
  const [isotope, setIsotope] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const Isotope = require('isotope-layout');
      const isotopeInstance = new Isotope(selector, options);
      setIsotope(isotopeInstance);
      return () => {
        if (isotopeInstance) {
          isotopeInstance.destroy();
        }
      };
    }
  }, []);
  return { isotope };
};
