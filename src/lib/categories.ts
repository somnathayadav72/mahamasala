export type Category = {
  id: string;
  label: string;
  iconId: string;
  iconClass: string;
  description?: string;
};

export const categories: Category[] = [
  {
    id: "turmeric",
    label: "Turmeric",
    iconId: "cat-turmeric",
    iconClass: "cat-icon-wrap--gold",
    description: "Pure haldi for color, health & everyday cooking.",
  },
  {
    id: "red-chilli",
    label: "Red Chilli",
    iconId: "cat-chilli",
    iconClass: "cat-icon-wrap--red",
    description: "Fiery and bold red chilli for rich & spicy flavours.",
  },
  {
    id: "coriander",
    label: "Coriander",
    iconId: "cat-coriander",
    iconClass: "cat-icon-wrap--green",
    description: "Aromatic dhania for fresh and earthy taste.",
  },
  {
    id: "garam-masala",
    label: "Garam Masala",
    iconId: "cat-garam",
    iconClass: "cat-icon-wrap--lavender",
    description: "Perfect blend for rich, warm and authentic flavours.",
  },
  {
    id: "biryani-masala",
    label: "Biryani Masala",
    iconId: "cat-biryani",
    iconClass: "cat-icon-wrap--orange",
    description: "Special blend for flavorful & delicious biryani.",
  },
  {
    id: "kitchen-king",
    label: "Kitchen King",
    iconId: "cat-kitchen-king",
    iconClass: "cat-icon-wrap--peach",
    description: "All-in-one masala for everyday cooking.",
  },
  {
    id: "chaat-masala",
    label: "Chaat Masala",
    iconId: "cat-chaat",
    iconClass: "cat-icon-wrap--pink",
    description: "Tangy & tasty blend to make every bite exciting.",
  },
  {
    id: "sambhar-masala",
    label: "Sambhar Masala",
    iconId: "cat-sambhar",
    iconClass: "cat-icon-wrap--gold",
    description: "Authentic taste for perfect south Indian dishes.",
  },
  {
    id: "herbs-more",
    label: "Herbs & More",
    iconId: "cat-herbs",
    iconClass: "cat-icon-wrap--green",
    description: "Premium herbs and spices for special recipes.",
  },
];
