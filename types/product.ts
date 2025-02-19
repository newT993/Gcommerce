import { Product, Review, User } from "@prisma/client";

export type ProductWithReviews = Product & {
  reviews: (Review & {
    user: {
      name: string | null;
      image: string | null;
    };
  })[];
};
