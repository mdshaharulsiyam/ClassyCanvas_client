import React from "react";
import Input from "../../../components/html/Input";
import Button from "../../../components/html/Button";
import usePostSecure from "../../../hooks/apiSecure/usePostSecure";

import toast from "react-hot-toast";

const ReviewForm = ({ productId, userId }) => {
  const { mutateAsync: addReview } = usePostSecure(
    [["Reviews", productId]],
    "/review"
  );

  const handleAddReview = async (e) => {
    e.preventDefault();

    const review = {
      comment: e.target.comment.value,
      product: productId,
      user: userId,
    };

    try {
      const response = await addReview(review);
      toast.success("Review Added!");
      e.target.comment.value = "";
    } catch (error) {
      toast.error("Couldn't add review");
    }
  };

  return (
    <form onSubmit={handleAddReview} className="flex gap-2 items-center">
      <Input
        name="comment"
        placeHolder="Drop a review"
        className="bg-transparent border-b border-b-gray-600  md:w-[400px]"
      />
      <Button className="py-3 px-7 text-white text-sm sm:text-base">Add</Button>
    </form>
  );
};

export default ReviewForm;
