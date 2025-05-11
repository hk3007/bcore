import {useEffect} from "react";

const events = [
    {
        id: 1,
        name: '1st International Olympic Research Conference',
        date: '27 - 30 January 2025',
        place: 'Bharat Centre of Olympic Research and Education (BCORE), Rashtriya Raksha University, Gandhinagar, India',
        description: 'A gathering of sports experts, enthusiasts, and professionals to discuss sports innovation, technology, and more.',
    },
  ];
export const EventGallery = () => {
    useEffect(() => {
        // Scroll to top when the component mounts
        window.scrollTo(0, 0);
      }, []);
      
}