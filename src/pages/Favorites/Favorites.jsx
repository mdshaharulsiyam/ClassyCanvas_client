import React from "react";
import Container from "../../components/shared/Containers/Container";
import FavoriteCard from "./FavoriteCard";
import Button from "../../components/html/Button";
import { IoBookmarks } from "react-icons/io5";

import ProfileHeader from "../../components/shared/Headers/ProfileHeader";
import DashboardProfileContainer from "../../components/shared/Containers/DashboardProfileContainer";
import useGetSecure from "../../hooks/apiSecure/useGetSecure";
import useAuth from "../../hooks/auth/useAuth";
import ProductCollectionSkeleton from "../../components/skeletons/ProductCollectionSkeleton";

const Favorites = () => {
  const { user } = useAuth();
  const { data: favorites, isLoading } = useGetSecure(
    ["Favorites", user?.email],
    `/favorites?email=${user?.email}`
  );

  return (
    <DashboardProfileContainer>
      <ProfileHeader
        header={"Personal Picks"}
        icon={<IoBookmarks className="text-2xl lg:text-3xl" />}
      />
      {isLoading ? (
        <ProductCollectionSkeleton />
      ) : (
        <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-10">
          {favorites?.map((favorite) => (
            <FavoriteCard key={favorite?._id} favorite={favorite} />
          ))}
        </div>
      )}
      {/* <Button className="w-full py-2 mt-8 mb-10 text-lg text-black bg-white border border-black font-clashSemibold">
        Load More
      </Button> */}
    </DashboardProfileContainer>
  );
};

export default Favorites;
