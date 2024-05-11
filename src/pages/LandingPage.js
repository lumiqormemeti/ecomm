import Banner from "../components/Banner/Banner";
import Footer from "../components/Footer/Footer";
import Grid from "../components/Grid/Grid";
import HeroSection from "../components/Hero/Hero";
import NavigationMenu from "../components/Navigation/Navbar";
import ReviewsCarousel from "../components/Reviews/ReviewsCarousel";
import SubscriptionForm from "../components/Subscription/SubscriptionForm";

const items = [
  {
    title: "Product 1",
    price: 20.99,
    features: ["24h Support", "Exclusive Discounts"],
  },
  {
    title: "Product 2",
    price: 29.99,
    features: ["24h Support"],
  },
  {
    title: "Product 3",
    price: 35.99,
    features: ["24h Support", "Exclusive Discounts", "Premium Features"],
  },
  {
    title: "Product 4",
    price: 39.99,
    features: ["24h Support", "Exclusive Discounts", "Delux Features"],
  },
];

const reviews = [
  {
    content:
      "Minimalin is pure genius! I'm a student, and writing assignments used to be a daunting task.",
    author: "Jessica Patel",
  },
  {
    content:
      "Minimalin is pure genius! I'm a student, and writing assignments used to be a daunting task.",
    author: "Dom Terrioti",
  },
  {
    content:
      "Minimalin is pure genius! I'm a student, and writing assignments used to be a daunting task.",
    author: "AGI",
  },
  // Add more reviews as needed
];

const LandingPage = () => {
  return (
    <body style={{ width: "90%", margin: "auto" }}>
      <NavigationMenu />
      <HeroSection />
      <Banner />
      <Grid items={items} />
      <ReviewsCarousel reviews={reviews} />
      <SubscriptionForm />
      <Footer />
    </body>
  );
};

export default LandingPage;
