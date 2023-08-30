import { useEffect, useState } from 'react';

const useIntersectionObserver = (
  loadMore: () => void,
  isLoading: boolean
) => {
  const [target, setTarget] = useState<HTMLElement | null | undefined>(null);

  useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if(entry.isIntersecting) loadMore()
        })
      }, { threshold: 1 });
      
      if(target) observer.observe(target);

      return () => {
        if(target) observer.unobserve(target);
      };
  }, [target]);

  return { setTarget };
};

export default useIntersectionObserver;