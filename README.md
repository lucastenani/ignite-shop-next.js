# Next.js E-commerce App Documentation

## Project Description

This project is a study application to explore the fundamentals of Next.js, including CSS-in-JS styling, integration with an online payment platform (Stripe), Static Site Generation (SSG), Server-Side Rendering (SSR), SEO, and API Routes. </br>
The application features a small e-commerce carousel where users can select a product and proceed to checkout. After entering (fictitious) payment details, users are directed to a success page if everything goes smoothly.

## Project URL

You can see the project in action [here](https://ignite-shop-next-js.vercel.app/)

## Libraries Used

- **@stitches/react**: For CSS-in-JS styling.
- **axios**: For making HTTP requests.
- **keen-slider**: For implementing a responsive carousel.
- **stripe**: For integrating with the Stripe payment platform.
- **eslint**: For linting and maintaining code quality.

## Features

- Integration with Stripe for handling online payments.
- Product selection through a carousel interface.
- Checkout page for entering payment details.
- Success page displayed after successful transactions.
- Static Site Generation (SSG) and Server-Side Rendering (SSR) for improved performance and SEO.
- API Routes for handling server-side operations within the Next.js framework.

## Folder Structure

- **src/**:
  - **assets/**: Contains images and other static resources.
  - **lib/**: Utility functions and configurations (e.g., Stripe setup).
  - **pages/**:
    - **api/**: Contains API routes for server-side logic.
    - **(application pages)**: Individual `.tsx` files representing different pages of the application.
  - **styles/**: Global and component-specific styles.

## Prerequisites

Make sure you have the following installed before running the application locally:

:warning: [Node.js](https://nodejs.org/en/download/)

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/lucastenani/ignite-shop-next.js.git
```
2. Navigate to the project directory:

```bash
cd ignite-shop-next.js/
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```
