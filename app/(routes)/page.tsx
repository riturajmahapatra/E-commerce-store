import getBillboard from "@/actions/get-billboard";
import Container from "@/components/ui/container";
import React from "react";
import Billboard from "@/components/ui/billboard";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("3246bbcd-3486-4b3c-a8db-be71a8b8053c");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default HomePage;
