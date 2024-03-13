import React from "react";
import ReviewForm from "./ReviewForm";
import Container from "../../../components/shared/Containers/Container";
import Review from "./Review";
import useGetSecure from "../../../hooks/apiSecure/useGetSecure";
import useUser from "../../../hooks/specific/useUser";

const Reviews = ({ productId }) => {
  const { data: reviews } = useGetSecure(
    ["Reviews", productId],
    `/reviews?product=${productId}`
  );

  const user = useUser();

  return (
    <Container className="mt-16">
      <ReviewForm productId={productId} userId={user?._id} />

      <ul className="mt-20 flex flex-col gap-9 h-[300px] overflow-y-auto no-scrollbar border-b border-b-gray-300">
        {reviews?.map((review) => (
          <Review key={review?._id} review={review} />
        ))}
      </ul>
    </Container>
  );
};

export default Reviews;
